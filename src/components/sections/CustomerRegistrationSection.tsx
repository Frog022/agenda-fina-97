/**
 * Seção de Cadastro de Clientes da Barbearia Corte Fino
 * 
 * Formulário para cadastro de novos clientes com informações
 * pessoais e preferências de serviço.
 * 
 * Funcionalidades:
 * - Cadastro de dados pessoais
 * - Seleção de barbeiro preferido
 * - Validação de formulário
 * - Integração com API de cadastro
 */

import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Calendar, Scissors } from 'lucide-react';
import { useCustomer } from '@/hooks/useCustomer';
import { useState } from 'react';

export const CustomerRegistrationSection = () => {
  const { submitCustomer, isSubmitting } = useCustomer();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    preferredBarber: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitCustomer(formData);
    
    if (result.success) {
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        preferredBarber: '',
        notes: ''
      });
    }
  };

  return (
    <section id="cadastro" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">
            Cadastre-se e{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seja Nosso Cliente
            </span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Faça seu cadastro e desfrute de uma experiência personalizada 
            na melhor barbearia da cidade.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-subheading text-foreground">
                Dados Pessoais
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  Nome Completo*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  E-mail*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Telefone */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Data de Nascimento */}
                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                  />
                </div>
              </div>

              {/* Barbeiro Preferido */}
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  Barbeiro Preferido
                </label>
                <select 
                  name="preferredBarber"
                  value={formData.preferredBarber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground"
                >
                  <option value="">Selecione um barbeiro</option>
                  <option value="Carlos Silva">Carlos Silva</option>
                  <option value="Rafael Santos">Rafael Santos</option>
                  <option value="Bruno Costa">Bruno Costa</option>
                </select>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-smooth text-foreground resize-none"
                  placeholder="Alguma preferência especial ou observação..."
                ></textarea>
              </div>

              {/* Botão */}
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                <Scissors className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Cadastrando...' : 'Realizar Cadastro'}
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                * Campos obrigatórios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};