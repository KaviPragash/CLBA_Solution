"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiUser, FiPhone } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-sm py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <Image
            src="/assets/img/Corporate &.png"
            alt="CLBA Solution Logo"
            width={60}
            height={60}
            className="rounded-8"
            priority
          />
          <span className="text-2xl font-bold text-gray-800 hidden md:block">
            CLBA SOLUTION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          
          <div className="flex items-center space-x-4 ml-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <FiSearch size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <FiUser size={20} />
            </button>
            <Link 
              href="/contact" 
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiPhone size={18} />
              <span>Get a Quote</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 text-gray-700 hover:text-blue-600">
                  <FiSearch size={24} />
                </button>
                <button className="p-2 text-gray-700 hover:text-blue-600">
                  <FiUser size={24} />
                </button>
                <Link 
                  href="/contact" 
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiPhone size={20} />
                  <span className="text-lg">Get a Quote</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}