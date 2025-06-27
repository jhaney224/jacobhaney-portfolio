import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const navbarItems = [
  { label: "ℹ️ About", path: "/about" },
  { label: "🗂️ Projects", path: "/projects" },
  { label: "📩 Contact", path: "/contact" },
];

interface NavbarProps {
  brandName: string;
  imageSrcPath: string;
}

export default function Navbar({ brandName, imageSrcPath }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  
  // Set the selected index based on the current path when component mounts
  useEffect(() => {
    const currentPath = window.location.pathname;
    // Don't highlight any item if we're on the homepage
    if (currentPath === "/") {
      setSelectedIndex(-1);
      return;
    }
    
    // Find the index of the matching path
    const index = navbarItems.findIndex(item => item.path === currentPath);
    if (index !== -1) setSelectedIndex(index);
  }, []);

  return (
    <nav className="w-full px-6 py-4 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <a href="/" className="flex items-center hover:scale-105 transition">
          <img src={imageSrcPath} alt={`${brandName} Logo`} className="w-auto" />
        </a>

        {/* Hamburger Toggle (Mobile) */}
        <button className="block lg:hidden p-2 text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          <FaBars size={20} />
        </button>

        {/* Nav Links */}
        <ul className={`w-full lg:w-auto lg:flex lg:items-center lg:gap-6 mt-4 lg:mt-0 ${isMenuOpen ? "block" : "hidden"}`}>
          {navbarItems.map((item, index) => (
            <li key={index} onClick={() => setSelectedIndex(index)}>
              <a href={item.path} className={`block px-4 py-2 transition text-base md:text-lg ${selectedIndex === index ? "selected" : ""}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
