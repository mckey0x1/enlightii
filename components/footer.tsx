import { Lightbulb, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">enlightii</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Empowering developers to create amazing applications through the power of artificial intelligence. 
              Build faster, smarter, and more intuitively than ever before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 enlightii. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-white/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}