'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import { Timmana } from 'next/font/google';

const timmana = Timmana({
  subsets: ['latin'],
  weight: '400',
});

type HeaderProps = {
  onToggleSidebar?: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="block p-2 rounded hover:bg-gray-100 focus:outline-none
            md:pointer-events-none md:cursor-default"
        >
          <Menu size={22} className="text-[#344054]" />
        </button>

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/images/logo.png"
            alt="Fintrack Logo"
            width={26}
            height={24}
            className="object-contain"
          />
          <span
            className={`text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-[#437D8E] drop-shadow-md ${timmana.className}`}
          >
            Fintrack
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-6">
        <Image
          src="/images/searchIcon.svg"
          alt="Search"
          width={24}
          height={24}
          className="object-contain"
        />

        <Image
          src="/images/dashboardIcon.svg"
          alt="Dashboard"
          width={24}
          height={24}
          className="object-contain"
        />

        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
          <Image
            src="/images/firstMan.svg"
            alt="User Avatar"
            width={36}
            height={36}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
