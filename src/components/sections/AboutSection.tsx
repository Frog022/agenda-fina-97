/**
 * Seção Sobre da Barbearia Corte Fino
 * 
 * Conta a história da barbearia, valores e diferenciais competitivos.
 * Design que transmite confiança, tradição e modernidade.
 * 
 * Decisões técnicas:
 * - Layout assimétrico para dinamismo visual
 * - Estatísticas em destaque para social proof
 * - Valores da marca em cards elegantes
 * - Call-to-action para contato e localização
 */

import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Shield, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometidos com a qualidade premium em cada corte e atendimento.'
  },
  {
    icon: Heart,
    title: 'Cuidado',
    description: 'Cada cliente é único e merece atenção personalizada e cuidado especial.'
  },
  {
    icon: Zap,
    title: 'Inovação',
    description: 'Sempre atualizados com as últimas técnicas e tendências do mercado.'
  },
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Ambiente seguro, higienizado e profissionais certificados.'
  }
];

const stats = [
  { number: '3+', label: 'Anos de Tradição' },
  { number: '500+', label: 'Clientes Satisfeitos' },
  { number: '3', label: 'Barbeiros Especializados' },
  { number: '15+', label: 'Serviços Disponíveis' }
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo principal */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-heading mb-4">
                Sobre a{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Corte Fino
                </span>
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Nascemos da paixão por criar experiências únicas no cuidado masculino. 
                Combinamos tradição, técnica e modernidade para oferecer muito mais 
                que um corte - oferecemos confiança e estilo.
              </p>
            </div>

            {/* História */}
            <div className="mb-8">
              <h3 className="text-subheading mb-4 text-foreground">
                Nossa História
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                Fundada em 2021, a Corte Fino surgiu com o objetivo de elevar o padrão 
                de barbearias em São Paulo. Começamos como um sonho de três amigos 
                barbeiros que queriam criar um espaço onde tradição e modernidade 
                convivessem em harmonia.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Hoje, somos referência em cuidado masculino premium, oferecendo desde 
                cortes clássicos até as tendências mais atuais, sempre com foco na 
                experiência completa do cliente.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Conheça Nosso Espaço
              </Button>
              
              <Button variant="outline" size="lg">
                Nossa Localização
              </Button>
            </div>
          </div>

          {/* Valores e estatísticas */}
          <div>
            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:shadow-glow transition-smooth group"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      {value.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Seção de compromisso */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-subheading mb-4 text-foreground">
              Nosso Compromisso
            </h3>
            
            <p className="text-body-large text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Garantimos que cada visita à Corte Fino seja uma experiência premium. 
              Desde o agendamento online até o último retoque, cuidamos de cada detalhe 
              para superar suas expectativas.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Pontualidade Garantida
              </div>
              
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Ambiente Higienizado
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Profissionais Certificados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};