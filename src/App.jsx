import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Signin from "./components/signup/SingUp";

function App() {
  const location = useLocation();
  // "/" for login, "/signup" for signup
  const hideLocation = ["/", "/signup"];
  const CheckLocation = hideLocation.includes(location.pathname);
  return (
    <>
      {!CheckLocation && <NavBar />}
      <Outlet />
    </>
  );
}

export default App;