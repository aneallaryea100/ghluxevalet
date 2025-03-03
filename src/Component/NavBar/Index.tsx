import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Clients", path: "/client" },
    { name: "Services", path: "/services" },
    // { name: "Technology", path: "/technology" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    // { name: "Portal", path: "/portal" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-950 p-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-white">
          Luxe Valet
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map(({ name, path }) => (
            <li key={name} className="relative group text-amber-50">
              <Link
                to={path}
                className={`text-white hover:text-amber-300 transition-all duration-300 ${
                  location.pathname === path ? "border-white" : ""
                }`}
              >
                {name}
              </Link>
              {/* Animated Underline on Hover */}
              <span
                className={`absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full ${
                  location.pathname === path ? "w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-none text-white hover:text-dark transition-all duration-300"
          >
            {isOpen ? (
              <CloseIcon className="cursor-pointer" />
            ) : (
              <MenuIcon className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-4 bg-green-950 p-4 mt-0 absolute top-16 right-0 w-1/2 h-screen">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`text-white hover:text-yellow-300 transition-all duration-300 ${
                  location.pathname === path ? "border-b-2 border-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
