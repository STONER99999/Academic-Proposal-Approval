import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#dc3545]  text-white p-4 flex justify-between items-center">
      <Toaster />
      <div className="flex items-center">
        <img
          className="h-8 mr-2"
          src="https://marvel-b1-cdn.bc0a.com/f00000000206029/www.gannon.edu/images/GU-logo.png"
          alt="Logo"
        />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/aboutUs"} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link title="anish" className="hover:underline  "></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
