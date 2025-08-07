'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SidebarProps } from '@/interfaces';
import { navLinks } from '@/constants/data';

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-64 bg-white p-6 hidden md:block">
        <nav className="space-y-1 text-sm font-medium">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'block px-4 py-2 rounded-full transition-colors',
                pathname === href
                  ? 'bg-gray-100 text-[#437D8E]'
                  : 'text-gray-700 hover:bg-gray-300 hover:text-[#437D8E]'
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-64 bg-white p-6 shadow-lg">
            <button
              className="mb-4 text-sm text-gray-500"
              onClick={onClose}
            >
              Close
            </button>
            <nav className="space-y-1 text-sm font-medium">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'block px-4 py-2 rounded-full transition-colors',
                    pathname === href
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-700 hover:bg-gray-300 hover:text-[#437D8E]'
                  )}
                  onClick={onClose}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={onClose}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
