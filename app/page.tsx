import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import DemoSection from '@/components/demo-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <section id="about" className="relative py-24 bg-gradient-to-b from-white to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
            About Enlightii
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We believe that everyone should have the power to bring their ideas to life. 
            Our AI-powered platform democratizes app development, making it accessible to 
            creators of all backgrounds and skill levels.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Join thousands of developers, entrepreneurs, and creators who are building 
            the next generation of applications with enlightii.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}