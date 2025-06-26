"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-6 lg:px-10 bg-black shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image src="/lolo.png" alt="Logo" width={60} height={60} />
        </div>

        {/* Center: Brand Name */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-2xl lg:text-3xl font-bold tracking-wide text-white">
            Darshna Sales Corporation
          </span>
        </div>


        {/* Mobile Toggle */}
        <div className="flex lg:hidden text-white">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
