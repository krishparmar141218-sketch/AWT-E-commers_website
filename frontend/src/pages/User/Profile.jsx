import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Loader from "../../components/Loader";
import { useProfileMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUserName(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 mt-16">
        <div className="flex justify-center mb-6">
          <img
            src={`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20210%20210%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EFace%20Generator%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EThe%20Visual%20Team%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F986078800058673824%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EFace%20Generator%E2%80%9D%20(https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F986078800058673824)%20by%20%E2%80%9EThe%20Visual%20Team%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC%20BY%204.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22210%22%20height%3D%22210%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23ffdfbf%22%20width%3D%22210%22%20height%3D%22210%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22scale(-1%201)%20translate(-210%200)%22%3E%3Cg%20transform%3D%22translate(86.8%20138.9)%20scale(.71856)%22%3E%3Cpath%20d%3D%22M60.7%2022.9c0%2016.9-14.8%2030.5-33%2030.5C9.2%2053.4-5.6%2039.8-5.6%2023S-1%208%2027.6%208c34%200%2033-2%2033%2014.8Z%22%20fill%3D%22%23DE8383%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.1%208.7c-5%204.8-15.3%209-27.2%209A42%2042%200%200%201%201%209.3C4%207.9%209.8%208%2021.5%208a2115%202115%200%200%200%2014.8%200c9.4%200%2015.3%200%2018.8.7Z%22%20fill%3D%22%23F9F9F9%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(2%2011)%20scale(.71856)%22%3E%3Cpath%20d%3D%22M178.4%2052.7c3.7-2.9%209.4-8.7%2020.6-8.7a26%2026%200%200%201%2018.8%208.7M67.4%2052.7C71%2049.8%2076.8%2044%2087.9%2044a26%2026%200%200%201%2018.9%208.7%22%20stroke%3D%22%23000%22%20stroke-width%3D%223.7%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2288.4%22%20cy%3D%2290.8%22%20r%3D%2228.4%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22198.7%22%20cy%3D%2290.8%22%20r%3D%2228.4%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%2288.4%22%20cy%3D%2290.8%22%20r%3D%2215.3%22%20fill%3D%22%23757575%22%2F%3E%3Ccircle%20cx%3D%22198.7%22%20cy%3D%2290.8%22%20r%3D%2215.3%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(15%2089.2)%20scale(.71856)%22%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(80.3%2079.8)%20scale(.71856)%22%3E%3Cpath%20d%3D%22m24.6%2039.3-.2%202.6a14.7%2014.7%200%201%200%2029-.4l-.1-2a14.7%2014.7%200%200%201-28.7-.2Z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.2%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-lg"
          />
        </div>
      <div className="flex justify-center align-center md:flex md:space-x-4">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input p-4 rounded-sm w-full"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-input p-4 rounded-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-input p-4 rounded-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="form-input p-4 rounded-sm w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              >
                Update
              </button>

              {/* <Link
                to="/user-orders"
                className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
              >
                My Orders
              </Link> */}
            </div>
            {loadingUpdateProfile && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
