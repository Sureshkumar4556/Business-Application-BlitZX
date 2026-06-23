import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void">
      <Navbar />
      <Hero />
      <Services />
      <CtaBanner />
      <Footer />
    </main>
  );
}
