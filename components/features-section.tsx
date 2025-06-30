"use client";

import { useState } from 'react';
import { MessageSquare, Zap, Palette, Shield, Globe, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Conversation',
    description: 'Simply describe your app idea in plain English. Our AI understands context and builds exactly what you envision.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Go from concept to working prototype in minutes, not weeks. Deploy instantly with our streamlined workflow.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Every app comes with stunning, modern design. No design skills required - our AI creates pixel-perfect interfaces.',
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    description: 'Built-in security, scalability, and performance optimizations. Production-ready code from day one.',
  },
  {
    icon: Globe,
    title: 'Full-Stack Power',
    description: 'Frontend, backend, database, and deployment - all handled seamlessly in one integrated platform.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Every app is responsive and mobile-optimized by default. Reach users on any device, anywhere.',
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-black"></div>
      
      {/* Radial accent */}
      <div className="absolute inset-0 bg-gradient-radial from-black/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Why Choose enlightii?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of development with AI-powered tools that make app creation effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer group ${
                  hoveredIndex === index
                    ? 'bg-black text-white shadow-2xl transform scale-105'
                    : 'bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/80'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-black to-gray-700 mb-6 group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                  <Icon 
                    className={`h-8 w-8 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-black' : 'text-white'
                    }`} 
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}