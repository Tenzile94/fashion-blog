'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">
              yourfashionstyleguide
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              ABOUT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">HOME</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">ABOUT</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

