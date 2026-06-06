"use client";

import { X, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: "N/A", // optional since modal doesn't have phone
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await res.json();

      alert(data.message || "Lead submitted successfully");

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-lg w-full mx-4 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-5">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Let's Start a Project
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Tell us about your idea
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-5 py-3 rounded-2xl border text-gray-600 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-5 py-3 rounded-2xl border text-gray-600 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="hello@yourcompany.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What Service are you interested in?
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-5 py-3 rounded-2xl border text-gray-600 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-white"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ecommerce">E-Commerce Store</option>
              <option value="branding">Branding & Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Details
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-3 rounded-3xl border text-gray-600 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-y"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-500/30 transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 pb-6">
          We'll reply within 24 hours
        </p>
      </div>
    </div>
  );
}
