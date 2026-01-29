import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* Desktop Navbar */}
      <div >
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <div >
        <Footer />
      </div>

      {/* Mobile Navbar (fixed bottom) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50">
        <MobileNav />
      </div>
    </div>
  );
}

export default Layout