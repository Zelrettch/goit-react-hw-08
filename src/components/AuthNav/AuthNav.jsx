import { Link } from "react-router-dom";
export default function AuthNav() {
  return (
    <>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </>
  );
}
