/**
 * Componente Header da Barbearia Corte Fino
 * 
 * Header responsivo com navegação principal, logo e botão de agendamento.
 * Inclui menu mobile com animações suaves e design sofisticado.
 * 
 * Decisões técnicas:
 * - Sticky positioning para manter header visível durante scroll
 * - Menu hamburger animado para mobile
 * - Logo com gradiente dourado para reforçar identidade visual
 * - CTA de agendamento sempre destacado
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Scissors } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo com gradiente dourado */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-primary">
              <Scissors className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">
                Corte Fino
              </h1>
              <p className="text-xs text-muted-foreground">Barbearia Premium</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-medium">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Serviços
            </a>
            <a href="#barbeiros" className="text-foreground hover:text-primary transition-smooth font-medium">
              Barbeiros
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth font-medium">
              Sobre
            </a>
            <a href="#cadastro" className="text-foreground hover:text-primary transition-smooth font-medium">
              Cadastro
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contato
            </a>
          </nav>

          {/* Botão de Agendamento Desktop */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" className="hover-glow">
              Agendar Horário
            </Button>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-card/50 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Início
              </a>
              <a 
                href="#servicos" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Serviços
              </a>
              <a 
                href="#barbeiros" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Barbeiros
              </a>
              <a 
                href="#sobre" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Sobre
              </a>
              <a 
                href="#cadastro" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Cadastro
              </a>
              <a 
                href="#contato" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Contato
              </a>
              
              {/* CTA Mobile */}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Agendar Horário
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};