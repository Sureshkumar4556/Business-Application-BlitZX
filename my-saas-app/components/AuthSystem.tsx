"use client";

import { X, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "./Context/AuthContext";   // ← Added this

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();   // ← Added this

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Demo user data (you can change this later when connecting real backend)
      const userData = {
        name: activeTab === "signup" ? "Rahul Sharma" : "Rahul Sharma",
        email: "rahul@company.com",
        avatar: "https://picsum.photos/id/64/200/200",
      };

      login(userData);           // ← This connects with Navbar

      onClose();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b">
          <h3 className="text-2xl font-semibold text-gray-900">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={28} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-4 text-sm font-medium transition-all ${
              activeTab === "login" 
                ? "border-b-2 border-blue-600 text-blue-600" 
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-4 text-sm font-medium transition-all ${
              activeTab === "signup" 
                ? "border-b-2 border-blue-600 text-blue-600" 
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {activeTab === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-5 py-3 rounded-2xl border border-gray-200 focus:border-blue-600 outline-none"
                  placeholder="Rahul Sharma"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-11 pr-5 py-3 rounded-2xl border border-gray-200 focus:border-blue-600 outline-none"
                placeholder="hello@yourcompany.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                className="w-full pl-11 pr-5 py-3 rounded-2xl border border-gray-200 focus:border-blue-600 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-medium text-lg hover:shadow-xl transition-all disabled:opacity-70"
          >
            {isLoading 
              ? "Processing..." 
              : activeTab === "login" 
                ? "Login" 
                : "Create Account"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 pb-8">
          {activeTab === "login" 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <span 
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
          >
            {activeTab === "login" ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}