import { useState } from "react";
 import { Link } from "react-router-dom";
import { FaHome, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants/menu";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className=" fixed flex flex-col items-center w-full top-0 z-50 justify-center ">
      <div className="w-full flex items-center justify-between overflow-y-hidden px-10  p-4 backdrop-blur-lg shadow-lg ">
        <div className="flex items-center">
          <FaHome className="text-white" size={30} />
          <h2 className="font-semibold uppercase text-yellow-500">Bofty</h2>
          <h1 className="text-white">KITCHEN</h1>
        </div>
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={` text-white text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover:text-yellow-500`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-white" size={30}/> : <FaBars className="text-white" size={30}/>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              onClick={(e) => handleScroll(e, link.targetId)}
              key={index}
              href={`#${link.targetId}`}
              className=" text-white block p-4 uppercase tracking-tighter"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
