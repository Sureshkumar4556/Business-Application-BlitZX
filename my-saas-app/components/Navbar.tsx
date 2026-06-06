"use client";

import Link from "next/link";
import { Sparkles, Menu, X, Bell, HelpCircle, User, Settings, LogOut, FolderOpen } from "lucide-react";
import { useState } from "react";
import { useAuth } from "./Context/AuthContext";
import AuthModal from "./AuthSystem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="font-semibold text-gray-900 text-2xl tracking-tighter">DevAgency</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition">Services</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition">Work</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-gray-900 transition">About</Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {user ? (
                // Logged In
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsNotificationOpen(!isNotificationOpen)} className="p-2 hover:bg-gray-100 rounded-xl">
                    <Bell className="w-5 h-5" />
                  </button>

                  <Link href="/help" className="p-2 hover:bg-gray-100 rounded-xl">
                    <HelpCircle className="w-5 h-5" />
                  </Link>

                  <div className="relative">
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-9 h-9 rounded-full object-cover border-2 border-white"
                      />
                    </button>

                    {isProfileOpen && (
                      <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border py-2 z-50">
                        <div className="px-4 py-3 border-b">
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <Link href="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">Profile</Link>
                        <Link href="/my-projects" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">My Projects</Link>
                        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">Settings</Link>
                        <button onClick={logout} className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600">Logout</button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Logged Out
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                >
                  Get Started
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-2 text-gray-700"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col px-6 py-8 space-y-6 text-lg font-medium">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>Work</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>

              {user ? (
                <>
                  <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                    <User className="w-5 h-5" /> Profile
                  </Link>
                  <Link href="/my-projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                    <FolderOpen className="w-5 h-5" /> My Projects
                  </Link>
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="text-red-600 flex items-center gap-3"
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="mt-4 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}