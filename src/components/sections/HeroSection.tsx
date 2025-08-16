/**
 * Seção Hero da Barbearia Corte Fino
 * 
 * Seção principal com impacto visual máximo, apresentando a proposta de valor
 * da barbearia com design sofisticado e call-to-action em destaque.
 * 
 * Decisões técnicas:
 * - Background com gradiente sobreposto para melhor legibilidade
 * - Tipografia em escala hierárquica (display -> heading -> body)
 * - Imagem de fundo gerada para representar o ambiente da barbearia
 * - Animações sutis de entrada com delays escalonados
 * - Layout responsivo com ajustes específicos para mobile/desktop
 */

import { Button } from '@/components/ui/button';
import { Calendar, Star, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com overlay gradiente */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Interior moderno da Barbearia Corte Fino" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de qualidade */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">
              Barbearia Premium em São Paulo
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-display mb-6 leading-tight">
            Seu melhor{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              corte
            </span>
            ,<br />
            no seu melhor{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              horário
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experimente o padrão premium em cortes masculinos. Agendamento online, 
            barbeiros especializados e ambiente sofisticado para o homem moderno.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="hover-glow group">
              <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Agendar Agora
            </Button>
            
            <Button variant="outline" size="xl">
              <Clock className="h-5 w-5 mr-2" />
              Ver Horários
            </Button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Barbeiros Especialistas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};