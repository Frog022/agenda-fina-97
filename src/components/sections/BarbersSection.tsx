/**
 * Seção de Barbeiros da Corte Fino
 * 
 * Apresenta a equipe de barbeiros especialistas com perfis profissionais,
 * especialidades e avaliações. Design humanizado que gera confiança.
 * 
 * Decisões técnicas:
 * - Cards de perfil com fotos profissionais em destaque
 * - Sistema de avaliações com estrelas para social proof
 * - Especialidades tagueadas para facilitar escolha do cliente
 * - Links para agendamento direto com barbeiro específico
 * - Layout que valoriza aspecto humano e profissional
 */

import { Button } from '@/components/ui/button';
import { Star, Calendar, Award } from 'lucide-react';
import barber1 from '@/assets/barber-1.jpg';
import barber2 from '@/assets/barber-2.jpg';

const barbers = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Barbeiro Sênior',
    experience: '8 anos',
    rating: 4.9,
    reviews: 127,
    specialties: ['Fade Clássico', 'Barba Tradicional', 'Cortes Sociais'],
    image: barber1,
    bio: 'Especialista em cortes clássicos e modernos, com foco na experiência personalizada para cada cliente.',
    availability: 'Seg - Sex'
  },
  {
    id: 2,
    name: 'Rafael Costa',
    role: 'Barbeiro Especialista',
    experience: '6 anos',
    rating: 4.8,
    reviews: 89,
    specialties: ['Cortes Modernos', 'Design de Barba', 'Degradê'],
    image: barber2,
    bio: 'Mestre em técnicas modernas de corte e design, sempre atualizado com as últimas tendências.',
    availability: 'Ter - Sáb'
  },
  {
    id: 3,
    name: 'Bruno Silva',
    role: 'Barbeiro Master',
    experience: '10 anos',
    rating: 5.0,
    reviews: 203,
    specialties: ['Cortes Artísticos', 'Barboterapia', 'Consultoria de Estilo'],
    image: barber1,
    bio: 'Barbeiro com formação internacional, oferece consultoria completa de estilo masculino.',
    availability: 'Qua - Dom'
  }
];

export const BarbersSection = () => {
  return (
    <section id="barbeiros" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">
            Nossa{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Equipe
            </span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos barbeiros especialistas, cada um com seu estilo único 
            e anos de experiência no cuidado masculino premium.
          </p>
        </div>

        {/* Grid de barbeiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div 
              key={barber.id}
              className="bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:scale-105 transition-smooth border border-border/50 group"
            >
              {/* Foto do barbeiro */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={barber.image}
                  alt={`${barber.name} - ${barber.role}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay com disponibilidade */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {barber.availability}
                  </div>
                </div>

                {/* Badge de experiência */}
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    {barber.experience}
                  </div>
                </div>
              </div>

              {/* Informações do barbeiro */}
              <div className="p-6">
                {/* Nome e cargo */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {barber.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {barber.role}
                  </p>
                </div>

                {/* Avaliação */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(barber.rating) 
                            ? 'text-primary fill-current' 
                            : 'text-muted'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {barber.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({barber.reviews} avaliações)
                  </span>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {barber.bio}
                </p>

                {/* Especialidades */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group-hover:border-primary group-hover:bg-primary/10"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar com {barber.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA da seção */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Tem preferência por algum barbeiro ou quer que escolhamos o melhor para você?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Deixar a Equipe Escolher
            </Button>
            
            <Button variant="outline" size="xl">
              Ver Agenda Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};