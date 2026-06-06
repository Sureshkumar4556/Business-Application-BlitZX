import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Target, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:50px_50px]" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="uppercase tracking-[3px] text-sm font-medium">Est. 2023 • Gujarat</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-white">
                Crafting Digital<br />
                Experiences That<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Actually Matter
                </span>
              </h1>

              <p className="mt-8 text-2xl text-gray-400 leading-relaxed">
                We are a passionate team of designers, developers, and strategists 
                creating high-converting digital solutions for ambitious brands.
              </p>

              <div className="mt-12 flex items-center gap-5">
                <Link
                  href="/start-project"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-gray-100 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-white/30 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl font-bold tracking-tighter text-gray-900">
                  From a small idea<br />to a growing agency
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  DevAgency was founded in 2023 with a simple belief: 
                  Every business deserves a digital presence that reflects its true potential.
                </p>
                <p className="text-lg text-gray-600">
                  What started as a two-person team working from a small office in Ahmedabad 
                  has now grown into a full-fledged creative digital agency trusted by brands across India.
                </p>
              </div>

              <div className="relative">
                <img 
                  src="https://picsum.photos/id/1015/800/620" 
                  alt="Our Journey" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl">
                  <p className="text-4xl font-bold text-gray-900">50+</p>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <div className="uppercase tracking-widest text-blue-400 text-sm mb-4">OUR MISSION</div>
              <h3 className="text-4xl font-semibold leading-tight">
                To create digital experiences that don't just look beautiful — they perform exceptionally.
              </h3>
            </div>
            <div>
              <div className="uppercase tracking-widest text-purple-400 text-sm mb-4">OUR VISION</div>
              <h3 className="text-4xl font-semibold leading-tight">
                To be the most trusted digital growth partner for ambitious businesses in India.
              </h3>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-gray-900 text-4xl font-bold mb-16">What We Stand For</h2>
            
            <div className="text-gray-700 grid md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Excellence", desc: "We obsess over every detail. Good is not enough." },
                { icon: Target, title: "Results Driven", desc: "Design that looks good and works even better." },
                { icon: Users, title: "Transparency", desc: "Clear communication and honest timelines." }
              ].map((item, i) => (
                <div key={i} className="p-10 border border-gray-110 rounded-3xl hover:border-gray-300 transition-all group">
                  <item.icon className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-zinc-900 to-black text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-bold tracking-tighter">
              Let's create something<br />extraordinary together
            </h2>
            <p className="text-gray-400 mt-6 text-xl">
              Ready to take your brand to the next level?
            </p>
            <Link
              href="/start-project"
              className="mt-10 inline-block bg-white text-black px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Start Your Project Now
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}