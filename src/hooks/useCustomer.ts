import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CustomerForm {
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  preferredBarber?: string;
  notes?: string;
}

export const useCustomer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitCustomer = async (formData: CustomerForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao cadastrar cliente');
      }

      toast({
        title: "Cadastro realizado!",
        description: "Seu cadastro foi realizado com sucesso. Seja bem-vindo!",
      });

      return { success: true, data: result.data };
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      
      toast({
        title: "Erro no cadastro",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde.",
        variant: "destructive",
      });

      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitCustomer,
    isSubmitting,
  };
};