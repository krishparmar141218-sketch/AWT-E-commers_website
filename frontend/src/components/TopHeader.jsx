import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { logout } from "../redux/features/auth/authSlice";


const TopHeader = () => {
    const { userInfo } = useSelector((state) => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-40 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Website Name */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide ml-12 text-pink-500"
        >
          Nexora
        </Link>

        {/* Optional Right Side */}
        <div className="flex gap-4 items-center">
          <div className="text-lg text-gray-300">
            Welcome !
          </div>

          <div className="relative">
            {userInfo ? (
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2"
              >
                {userInfo.username}
                <span>{dropdownOpen ? "▲" : "▼"}</span>
              </button>
            ) : (
              <div className="flex gap-4">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}

            {/* Dropdown */}
            {dropdownOpen && userInfo && (
              <ul className="absolute right-0 mt-3 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden">
                
                {userInfo.isAdmin && (
                  <>
                    <li><Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
                    <li><Link to="/admin/productlist" className="block px-4 py-2 hover:bg-gray-100">Products</Link></li>
                    <li><Link to="/admin/categorylist" className="block px-4 py-2 hover:bg-gray-100">Category</Link></li>
                    <li><Link to="/admin/orderlist" className="block px-4 py-2 hover:bg-gray-100">Orders</Link></li>
                    <li><Link to="/admin/userlist" className="block px-4 py-2 hover:bg-gray-100">Users</Link></li>
                  </>
                )}

                <li>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>    
      </div>
    </div>
  );
};

export default TopHeader;