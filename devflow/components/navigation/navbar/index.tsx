import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Theme from './theme';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white fixed z-50 w-full dark:shadow-none sm:px-12 shadow-light-300_dark700">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Devflow Logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-1000 dark:text-light-1000 max-sm:hidden">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
      </div>

      {/* Middle: Global Search */}
      <div className="flex-1 flex justify-center">
        <p className="text-light-900">Global Search</p>
      </div>

      {/* Right: Theme Switch */}
      <div className="flex-1 flex justify-end">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;