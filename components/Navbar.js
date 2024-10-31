// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [vpsSubMenuOpen, setVpsSubMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // État du mode sombre
  let closeSubMenuTimeout;

  const handleMouseEnter = () => {
    clearTimeout(closeSubMenuTimeout);
    setSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeSubMenuTimeout = setTimeout(() => {
      setSubMenuOpen(false);
    }, 200);
  };

  const handleVpsMouseEnter = () => {
    clearTimeout(closeSubMenuTimeout);
    setVpsSubMenuOpen(true);
  };

  const handleVpsMouseLeave = () => {
    closeSubMenuTimeout = setTimeout(() => {
      setVpsSubMenuOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-black text-white p-3 flex items-center justify-between relative z-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-2xl font-bold hover:text-[#6A5ACD] transition">
          UnixoCloud
        </Link>
      </div>

      {/* Main Menu for large screens */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
        {/* Services de Jeux Dropdown */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center space-x-1 hover:text-[#6A5ACD] transition">
            <span className="material-icons">sports_esports</span>
            <span>SERVICES DE JEUX</span>
          </button>
          {subMenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-900 text-white rounded shadow-lg w-48" 
                 onMouseEnter={handleMouseEnter} 
                 onMouseLeave={handleMouseLeave}>
              <Link href="/fivem/FiveM" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
                <img src="/fivem.jpg" alt="GTA 5 Logo" className="w-6 h-6" />
                <span>FiveM</span>
              </Link>
              <Link href="/minecraft/Minecraft" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
                <img src="/minecraft.png" alt="Minecraft Logo" className="w-6 h-6" />
                <span>Minecraft</span>
              </Link>
              <Link href="/gmod" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
                <img src="/gmod.png" alt="Garry's Mod Logo" className="w-6 h-6" />
                <span>Garry's Mod</span>
              </Link>
              <Link href="/ark" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
                <img src="/ark.png" alt="Ark Logo" className="w-6 h-6" />
                <span>Ark</span>
              </Link>
              <Link href="/rust" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
                <img src="/rust.jpg" alt="Rust Logo" className="w-6 h-6" />
                <span>Rust</span>
              </Link>
            </div>
          )}
        </div>

        {/* VPS Cloud Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleVpsMouseEnter}
          onMouseLeave={handleVpsMouseLeave}
        >
          <button className="flex items-center space-x-1 hover:text-[#6A5ACD] transition">
            <span className="material-icons">cloud</span>
            <span>VPS CLOUD</span>
          </button>
          {vpsSubMenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-900 text-white rounded shadow-lg w-48"
                 onMouseEnter={handleVpsMouseEnter} 
                 onMouseLeave={handleVpsMouseLeave}>
              <Link href="/vps/intel" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS Intel</Link>
              <Link href="/vps/amd" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS AMD</Link>
            </div>
          )}
        </div>

        <Link href="/univers-pro" className="flex items-center space-x-1 hover:text-[#6A5ACD] transition">
          <span className="material-icons">dns</span>
          <span>AUTRES SERVICES</span>
        </Link>
      </div>

      {/* Espace Client Button et Commutateur de mode sombre */}
      <div className="hidden md:flex items-center space-x-2">
        {/* Commutateur de mode sombre */}
        <button
          onClick={handleToggleDarkMode}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Espace Client Button */}
        <Link href="https://client.unixocloud.fr/index.php?rp=/login">
          <button className="bg-[#6A5ACD] flex items-center justify-center space-x-2 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
            <span className="material-icons text-white">person</span>
            <span>Espace Client</span>
          </button>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <span className="material-icons text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-50">
          {/* Mobile links */}
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/fivem/FiveM" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/fivem.jpg" alt="GTA 5 Logo" className="w-6 h-6" />
              <span>FiveM</span>
            </Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/minecraft/Minecraft" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/minecraft.png" alt="Minecraft Logo" className="w-6 h-6" />
              <span>Minecraft</span>
            </Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/gmod" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/gmod.png" alt="Garry's Mod Logo" className="w-6 h-6" />
              <span>Garry's Mod</span>
            </Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/ark" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/ark.png" alt="Ark Logo" className="w-6 h-6" />
              <span>Ark</span>
            </Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/rust" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/rust.jpg" alt="Rust Logo" className="w-6 h-6" />
              <span>Rust</span>
            </Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/vps/intel" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS Intel</Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/vps/amd" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS AMD</Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="/univers-pro" className="block px-4 py-2 hover:bg-[#6A5ACD]">AUTRES SERVICES</Link>
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <Link href="https://client.unixocloud.fr/index.php?rp=/login">
              <button className="bg-[#6A5ACD] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105 w-full">
                Espace Client
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
