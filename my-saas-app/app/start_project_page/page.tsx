"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function StartProject() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error jab user type kare
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateStep = () => {
    let newErrors: any = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
    }

    if (step === 2) {
      if (!formData.service) newErrors.service = "Please select a service";
      if (!formData.message.trim()) newErrors.message = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      setShowErrorModal(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) {
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1400);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" });
    setStep(1);
    setErrors({});
    setShowSuccessModal(false);
  };

  return (
    <div className="pt-24 pb-20 bg-zinc-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-950">
            Let's Build Something <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Great</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Fill the details below. Our team will contact you within 24 hours.
          </p>
        </div>

        {/* Progress */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-3">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2.5 w-12 rounded-full transition-all ${step >= s ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border">
          <form onSubmit={handleSubmit}>
            
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none text-base" 
                      placeholder="Rahul Sharma" />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none text-base" 
                      placeholder="hello@yourcompany.com" />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none text-base" 
                    placeholder="Your Company Pvt Ltd" />
                </div>

                <button type="button" onClick={handleNext}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900">Project Details</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Service Required *</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none bg-white text-base">
                    <option value="">Select Service</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="branding">Branding & Design</option>
                    <option value="full">Complete Digital Solution</option>
                  </select>
                  {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none bg-white text-base">
                      <option value="">Select Budget</option>
                      <option value="5-15">₹5 - 15 Lakh</option>
                      <option value="15-30">₹15 - 30 Lakh</option>
                      <option value="30-50">₹30 - 50 Lakh</option>
                      <option value="50+">₹50 Lakh +</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}
                      className="w-full px-5 py-3.5 text-gray-900 rounded-2xl border focus:border-blue-600 outline-none bg-white text-base">
                      <option value="">Select Timeline</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="2-3months">2-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6+">6+ Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Project Description *</label>
                  <textarea name="message" rows={6} value={formData.message} onChange={handleChange}
                    className="w-full px-5 py-4 text-gray-900 rounded-3xl border focus:border-blue-600 outline-none resize-y text-base"
                    placeholder="Tell us about your project goals, target audience, preferred design style, etc..."></textarea>
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 border rounded-2xl font-medium text-gray-700">Back</button>
                  <button type="button" onClick={handleNext} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold">Continue</button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900">Review Your Request</h2>
                
                <div className="bg-zinc-50 p-8 rounded-2xl space-y-4 text-gray-800">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Company:</strong> {formData.company || "Not provided"}</p>
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Budget:</strong> {formData.budget || "Not decided"}</p>
                  <p><strong>Timeline:</strong> {formData.timeline || "Not decided"}</p>
                  <p><strong>Description:</strong> {formData.message}</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-semibold text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Project Request"}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full py-5  rounded-2xl font-medium text-gray-700"
                >
                  Edit Details
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Missing Information</h3>
            <p className="text-gray-600 mt-3">Please fill all required fields before continuing.</p>
            <button 
              onClick={() => setShowErrorModal(false)}
              className="mt-6 w-full py-3 bg-gray-900 text-white rounded-2xl font-medium"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full mx-4 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Request Received!</h3>
            <p className="text-gray-600 mt-4 text-lg">
              Thank you! Our team will contact you within 24 hours to discuss your project.
            </p>
            <button 
              onClick={resetForm}
              className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg"
            >
              Submit Another Request
            </button>
            <Link href="/"
              className="mt-4 inline-block text-gray-700 hover:text-gray-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}