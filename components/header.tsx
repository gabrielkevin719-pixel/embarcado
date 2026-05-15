"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-bg text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Gran</span>
            <span className="text-primary"> Cursos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-white hover:text-gray-300 transition-colors font-medium">
              Beneficios
            </a>
            <a href="#planos" className="text-white hover:text-gray-300 transition-colors font-medium">
              Planos
            </a>
            <a href="#professores" className="text-white hover:text-gray-300 transition-colors font-medium">
              Professores
            </a>
            <a href="#aprovados" className="text-white hover:text-gray-300 transition-colors font-medium">
              Aprovados
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-secondary hover:bg-secondary-dark text-dark-bg font-bold py-2 px-6 rounded transition-colors">
              ASSINAR AGORA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#beneficios" className="text-white hover:text-gray-300 transition-colors">
                Beneficios
              </a>
              <a href="#planos" className="text-white hover:text-gray-300 transition-colors">
                Planos
              </a>
              <a href="#professores" className="text-white hover:text-gray-300 transition-colors">
                Professores
              </a>
              <a href="#aprovados" className="text-white hover:text-gray-300 transition-colors">
                Aprovados
              </a>
              <button className="bg-secondary hover:bg-secondary-dark text-dark-bg font-bold py-2 px-6 rounded transition-colors w-full mt-2">
                ASSINAR AGORA
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
