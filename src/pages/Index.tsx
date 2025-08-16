/**
 * Página Principal da Barbearia Corte Fino
 * 
 * Landing page completa com todas as seções principais:
 * - Hero: impacto visual e proposta de valor
 * - Serviços: catálogo com preços e descrições
 * - Barbeiros: equipe com perfis profissionais
 * - Sobre: história e valores da barbearia
 * - Contato: informações e formulário
 * 
 * Design responsivo com foco em conversão e experiência premium.
 */

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BarbersSection } from '@/components/sections/BarbersSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header com navegação */}
      <Header />
      
      {/* Conteúdo principal */}
      <main>
        {/* Seção Hero - primeira impressão */}
        <HeroSection />
        
        {/* Catálogo de serviços */}
        <ServicesSection />
        
        {/* Apresentação da equipe */}
        <BarbersSection />
        
        {/* História e valores */}
        <AboutSection />
        
        {/* Contato e localização */}
        <ContactSection />
      </main>
      
      {/* Footer com informações completas */}
      <Footer />
    </div>
  );
};

export default Index;
