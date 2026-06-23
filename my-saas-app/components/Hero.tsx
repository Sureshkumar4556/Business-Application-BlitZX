import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-slate-50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur mb-6">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700 tracking-wide">PREMIUM DIGITAL AGENCY</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-gray-900">
          We craft <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">digital experiences</span><br />
          that convert
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          High-performance websites • Strategic branding • Growth-driven marketing
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/start_project_page"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium flex items-center gap-3 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.03]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a 
            href="/portfolio"
            className="px-8 py-4 text-gray-700 rounded-2xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
          >
            View Our Work
            <Star className="w-4 h-4" />
          </a>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-gray-900">50+</div>
            <div>Projects Delivered</div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-gray-900">98%</div>
            <div>Client Retention</div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-gray-900">4.9</div>
            <div>Average Rating</div>
          </div>
        </div>

      </div>

      {/* Premium Banner */}
      <div className="mt-20 max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-zinc-900 to-black text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-[120px] opacity-10">🚀</div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ready to grow 10× faster?
              </h2>
              <p className="text-gray-400 mt-3 text-lg">
                Let’s build something extraordinary together
              </p>
            </div>
            
            <a 
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}