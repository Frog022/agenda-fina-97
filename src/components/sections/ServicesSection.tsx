/**
 * Seção de Serviços da Barbearia Corte Fino
 * 
 * Apresenta o catálogo completo de serviços com cards visuais elegantes,
 * preços e duração. Design focado em conversão e experiência premium.
 * 
 * Decisões técnicas:
 * - Cards com hover effects e micro-interações
 * - Grid responsivo que se adapta aos breakpoints
 * - Imagens otimizadas para cada serviço
 * - Hierarquia visual clara: serviço -> preço -> duração
 * - CTA individual por serviço para facilitar conversão
 */

import { Button } from '@/components/ui/button';
import { Clock, Star } from 'lucide-react';
import serviceBeard from '@/assets/service-beard.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';

const services = [
  {
    id: 1,
    name: 'Corte Clássico',
    description: 'Corte tradicional masculino com acabamento impecável e estilo atemporal.',
    price: 'R$ 45',
    duration: '45 min',
    image: serviceHaircut,
    popular: false
  },
  {
    id: 2,
    name: 'Corte + Barba',
    description: 'Combo completo com corte moderno e barba alinhada por especialistas.',
    price: 'R$ 70',
    duration: '75 min',
    image: serviceBeard,
    popular: true
  },
  {
    id: 3,
    name: 'Barba Completa',
    description: 'Aparação, alinhamento e hidratação profissional da barba.',
    price: 'R$ 35',
    duration: '30 min',
    image: serviceBeard,
    popular: false
  },
  {
    id: 4,
    name: 'Corte Degradê',
    description: 'Fade moderno com transições suaves e acabamento premium.',
    price: 'R$ 55',
    duration: '60 min',
    image: serviceHaircut,
    popular: false
  },
  {
    id: 5,
    name: 'Sobrancelha',
    description: 'Design e alinhamento das sobrancelhas com precisão profissional.',
    price: 'R$ 25',
    duration: '20 min',
    image: serviceHaircut,
    popular: false
  },
  {
    id: 6,
    name: 'Pacote Premium',
    description: 'Experiência completa: corte, barba, sobrancelha e cuidados especiais.',
    price: 'R$ 120',
    duration: '120 min',
    image: serviceBeard,
    popular: true
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">
            Nossos{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços masculinos com qualidade premium 
            e atendimento personalizado para cada cliente.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:scale-105 transition-smooth border border-border/50"
            >
              {/* Badge de popular */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              {/* Imagem do serviço */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Conteúdo do card */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {service.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Preço e duração */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-black text-primary">
                    {service.price}
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group-hover:border-primary group-hover:bg-primary/10"
                >
                  Agendar {service.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA da seção */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          
          <Button variant="hero" size="xl">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};