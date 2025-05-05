"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  id: string;
  href: string;
  label: string;
  dropdown?: Array<{ id: string; href: string; label: string }>;
};

const navLinks: NavLink[] = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/about", label: "About" },
  {
    id: "destinations",
    href: "#",
    label: "Destination Rooms",
    dropdown: [
      { id: "delhi", href: "/destinations/delhi", label: "Delhi" },
      { id: "agra", href: "/destinations/agra", label: "Agra" },
      { id: "rishikesh", href: "/destinations/rishikesh", label: "Rishikesh" },
      { id: "homestay", href: "/destinations/homestay", label: "Homestay" },
      { id: "by-the-ganges", href: "/destinations/by-the-ganges", label: "By the Ganges" },
    ],
  },
  { id: "gallery", href: "/gallery", label: "Gallery" },
  { id: "contact", href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Joey's Hostel"
            width={160}
            height={94}
            className="h-auto w-40"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="block rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.id)}
                    className="flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {link.label}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === link.id && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-xl">
                      {link.dropdown.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.id}
                          href={dropdownLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <div key={link.id} className="py-2">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.id)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {link.label}
                        <svg
                          className={`ml-1 h-4 w-4 transform ${
                            activeDropdown === link.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === link.id && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.dropdown.map((dropdownLink) => (
                            <Link
                              key={dropdownLink.id}
                              href={dropdownLink.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={toggleMenu}
                            >
                              {dropdownLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
