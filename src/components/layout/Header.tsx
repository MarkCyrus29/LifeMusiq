"use client";
import { Music2, Menu } from "lucide-react";
import Link from "next/link";
// import { button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-linear-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
              <Music2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl">LifeMusiq</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#channels"
              className="text-gray-300 hover:text-white transition-colors"
            >
              YouTube Channels
            </a>
            <button
              title="button"
              className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-2 rounded-full transition-colors "
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu button */}
          <button
            title="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#channels"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              YouTube Channels
            </Link>
            <button
              title="button"
              className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full px-4 py-2"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
