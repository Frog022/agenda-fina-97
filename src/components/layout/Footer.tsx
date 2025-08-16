/**
 * Footer da Barbearia Corte Fino
 * 
 * Footer completo com informações da empresa, links rápidos,
 * redes sociais e informações legais.
 * 
 * Decisões técnicas:
 * - Layout em colunas responsivo
 * - Links organizados por categoria
 * - Informações de contato destacadas
 * - Copyright e links legais
 */

import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border">
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-primary">
                <Scissors className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">
                  Corte Fino
                </h3>
                <p className="text-xs text-muted-foreground">Barbearia Premium</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Sua barbearia premium em São Paulo. Oferecemos serviços de alta qualidade 
              com profissionais especializados e ambiente sofisticado.
            </p>

            {/* Redes sociais */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-smooth">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#barbeiros" className="text-muted-foreground hover:text-primary transition-smooth">
                  Barbeiros
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Corte Clássico</span>
              </li>
              <li>
                <span className="text-muted-foreground">Corte + Barba</span>
              </li>
              <li>
                <span className="text-muted-foreground">Barba Completa</span>
              </li>
              <li>
                <span className="text-muted-foreground">Corte Degradê</span>
              </li>
              <li>
                <span className="text-muted-foreground">Sobrancelha</span>
              </li>
              <li>
                <span className="text-muted-foreground">Pacote Premium</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Rua Augusta, 1234 - Consolação<br />
                  São Paulo, SP - CEP 01304-001
                </span>
              </li>
              
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>(11) 99999-9999</div>
                  <div>(11) 3333-4444</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  contato@cortefinobarbearia.com.br
                </span>
              </li>
            </ul>

            {/* Horários */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-foreground mb-3">
                Horário de Funcionamento:
              </h5>
              <div className="text-muted-foreground text-sm space-y-1">
                <div>Seg - Sex: 9h às 20h</div>
                <div>Sábado: 8h às 18h</div>
                <div>Domingo: 9h às 17h</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Barbearia Corte Fino. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};