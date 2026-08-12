'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4C2380] text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-3 text-xl font-bold tracking-wide">
          <Image 
            src="/schlogo.png" 
            alt="STC College Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <span className="truncate">STC COLLEGE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#FDB913] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#FDB913] transition">
            About Us
          </Link>
          <Link href="/staff" className="hover:text-[#FDB913] transition">
            Meet Our Staff
          </Link>
          <Link href="/activities" className="hover:text-[#FDB913] transition">
            Activities
          </Link>
          <Link 
            href="/admin" 
            className="bg-[#FDB913] text-[#4C2380] font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Admin Portal
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-[#3b1b63] transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* Close (X) Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#4C2380] border-t border-[#3b1b63] px-4 pt-3 pb-6 space-y-3 text-sm font-medium">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-[#FDB913] transition border-b border-[#5a2a98]"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-[#FDB913] transition border-b border-[#5a2a98]"
          >
            About Us
          </Link>
          <Link 
            href="/staff" 
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-[#FDB913] transition border-b border-[#5a2a98]"
          >
            Meet Our Staff
          </Link>
          <Link 
            href="/activities" 
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-[#FDB913] transition border-b border-[#5a2a98]"
          >
            Activities
          </Link>
          <Link 
            href="/admin" 
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#FDB913] text-[#4C2380] font-semibold py-2.5 rounded-md hover:bg-yellow-400 transition mt-3"
          >
            Admin Portal
          </Link>
        </div>
      )}
    </nav>
  );
}