import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import TopHeader from "./components/TopHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <TopHeader />
      <Navigation />
      <main className="pt-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
