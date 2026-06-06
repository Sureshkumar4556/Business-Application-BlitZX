import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  { 
    title: "E-Commerce Store", 
    desc: "Modern Shopify-like platform with seamless checkout",
    category: "Development",
    image: "https://picsum.photos/id/1015/600/400",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "SEO Growth Project", 
    desc: "Increased organic traffic by 340% in 6 months",
    category: "SEO & Growth",
    image: "https://picsum.photos/id/237/600/400",
    color: "from-violet-500 to-purple-500"
  },
  { 
    title: "SaaS Agency Website", 
    desc: "High-converting corporate website with custom animations",
    category: "Branding",
    image: "https://picsum.photos/id/201/600/400",
    color: "from-amber-500 to-orange-500"
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 mb-4">
              <span className="text-amber-600">★</span>
              <span className="uppercase text-xs tracking-[2px] font-semibold text-gray-500">Featured Work</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">
              Selected Projects
            </h2>
          </div>
          
          <a 
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 text-xs font-medium bg-white/90 backdrop-blur rounded-full text-gray-800">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                    View Case Study 
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  
                  <div className={`w-8 h-8 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-[1.02]"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}