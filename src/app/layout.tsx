'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import '../app/globals.css';
import Sidebar from '@/components/Sidebar.tsx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header onToggleSidebar={handleToggleSidebar} />

        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
