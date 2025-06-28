import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
        <div className="">Logo</div>
        <ul className="flex space-x-4">
          <li className="bg-red-400 rounded-md p-2 hover:bg-red-300">
            <Link to="/main">Home</Link>
          </li>
          <li className="bg-blue-400 rounded-md p-2 hover:bg-blue-300">
            <Link to="/allnew">All Countries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}