import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-white">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:50px_50px]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-8">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="uppercase tracking-[3px] text-xs font-semibold text-gray-400">Next Level Growth</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
          Ready to transform<br />your business?
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-lg mx-auto">
          Let’s create exceptional digital experiences that drive real results
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-purple-500/30"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/portfolio"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition-all duration-300 font-medium text-lg"
          >
            See Our Work
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-8 tracking-wide">
          ✓ No long-term contracts • ✓ Strategy call within 48 hours
        </p>
      </div>
    </section>
  );
}