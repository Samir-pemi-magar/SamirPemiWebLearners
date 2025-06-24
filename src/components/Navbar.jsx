export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-between items-center p-5 bg-gray-900 text-white text-white">
        <div className="">Logo</div>
        <ul className="flex space-x-4">
          <li className="bg-red-400 rounded-md p-2 hover:bg-red-300"><a href="/">Home</a></li>
          <li><input placeholder="Enter the location" className="bg-white px-2 py-2 text-black rounded" /></li>
          <li className="bg-blue-400 rounded-md p-2 hover:bg-blue-300"><a href="/about">All Countries</a></li>
        </ul>
      </nav>
    </header>
  );
}