'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Transactions', href: '/transactions' },
  { name: 'Reports', href: '/reports' },
  { name: 'Settings', href: '/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-300 hover:text-[#437D8E]'
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
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
                  onClick={onClose} // close sidebar on navigation
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Overlay */}
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
