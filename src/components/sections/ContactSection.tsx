/**
 * Seção de Contato da Barbearia Corte Fino
 * 
 * Informações de contato, localização e formulário de contato.
 * Design focado em facilitar o primeiro contato do cliente.
 * 
 * Decisões técnicas:
 * - Mapa integrado (placeholder) para localização visual
 * - Informações de contato em destaque
 * - Formulário de contato responsivo
 * - Horários de funcionamento destacados
 * - Links diretos para WhatsApp e telefone
 */

import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">
            Entre em{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Agende seu horário ou tire suas dúvidas 
            através dos nossos canais de comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informações de contato */}
          <div>
            <h3 className="text-subheading mb-8 text-foreground">
              Nossas Informações
            </h3>

            {/* Cards de contato */}
            <div className="space-y-6 mb-8">
              {/* Endereço */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      Endereço
                    </h4>
                    <p className="text-muted-foreground">
                      Rua Augusta, 1234 - Consolação<br />
                      São Paulo, SP - CEP 01304-001
                    </p>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      Telefone & WhatsApp
                    </h4>
                    <p className="text-muted-foreground">
                      (11) 99999-9999<br />
                      (11) 3333-4444
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      E-mail
                    </h4>
                    <p className="text-muted-foreground">
                      contato@cortefinobarbearia.com.br
                    </p>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      Funcionamento
                    </h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 9h às 20h</p>
                      <p>Sábado: 8h às 18h</p>
                      <p>Domingo: 9h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Siga-nos nas Redes
              </h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:border-primary hover:bg-primary/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-primary hover:bg-primary/10">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            <h3 className="text-subheading mb-8 text-foreground">
              Envie uma Mensagem
            </h3>

            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
              <form className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground">
                    <option>Agendamento</option>
                    <option>Informações sobre Serviços</option>
                    <option>Sugestões</option>
                    <option>Reclamações</option>
                    <option>Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground resize-none"
                    placeholder="Descreva sua mensagem aqui..."
                  ></textarea>
                </div>

                {/* Botão */}
                <Button variant="hero" size="lg" className="w-full">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa (placeholder) */}
        <div className="mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-card-foreground mb-2">
              Localização
            </h4>
            <p className="text-muted-foreground mb-6">
              Estamos localizados no coração de São Paulo, próximo ao metrô Consolação.
            </p>
            <Button variant="outline" size="lg">
              Ver no Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};