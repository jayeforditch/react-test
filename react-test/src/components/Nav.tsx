import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={`h-16 fixed bottom-0 w-full bg-green z-10`}>
      <ul className={`flex justify-evenly h-full items-center`}>
        <li>
          <Link to={"http://localhost:5173/"}>Login</Link>
        </li>
        <li>
          {" "}
          <Link to={"http://localhost:5173/dashboard"}>Dashboard</Link>
        </li>

        <li>Logout</li>
      </ul>
    </nav>
  );
};
export default Nav;
