import { Globe, Megaphone, Search, ShoppingCart, ArrowRight } from "lucide-react";

const services = [
  { 
    icon: Globe, 
    title: "Web Development", 
    desc: "High-performance React & Next.js websites that load fast and convert better.",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Search, 
    title: "SEO Optimization", 
    desc: "Data-driven SEO strategies to dominate search rankings and drive organic traffic.",
    color: "from-violet-500 to-purple-500"
  },
  { 
    icon: Megaphone, 
    title: "Digital Marketing", 
    desc: "Strategic paid ads and social media campaigns that deliver measurable ROI.",
    color: "from-amber-500 to-orange-500"
  },
  { 
    icon: ShoppingCart, 
    title: "E-Commerce", 
    desc: "Powerful online stores with seamless checkout and conversion-focused design.",
    color: "from-emerald-500 to-teal-500"
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border mb-4">
            <span className="text-blue-600">✦</span>
            <span className="uppercase text-xs tracking-[2px] font-semibold text-gray-500">What We Do</span>
          </div>
          
          <h2 className="text-5xl font-bold tracking-tighter text-gray-900">
            Services that <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">drive results</span>
          </h2>
          
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From stunning websites to full-scale digital growth — we handle it all with excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-gray-200 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Learn More */}
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                Learn more 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition-colors group"
          >
            Ready to elevate your business?
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}