import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function GlassmorphicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    
      
      <nav className="sticky top-4 z-50 mx-4 md:mx-8">
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl px-6 py-4 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-xl">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-black/20 hover:bg-black/30 text-white px-6 py-2 rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm font-medium">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-xl hover:bg-black/20 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-black/20 hover:bg-black/30 text-white px-6 py-2 rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm font-medium mt-4 self-start">
                  Hire Me
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    
  );
}
