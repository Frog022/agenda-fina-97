import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    if (req.method === 'POST') {
      const { name, email, phone, birthDate, preferredBarber, notes } = await req.json();

      // Validação básica
      if (!name || !email) {
        return new Response(
          JSON.stringify({ error: 'Nome e email são obrigatórios' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // Verificar se email já existe
      const { data: existingCustomer } = await supabaseClient
        .from('customers')
        .select('id')
        .eq('email', email)
        .single();

      if (existingCustomer) {
        return new Response(
          JSON.stringify({ error: 'Email já cadastrado' }),
          { 
            status: 409, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // Inserir novo cliente
      const { data, error } = await supabaseClient
        .from('customers')
        .insert([
          {
            name,
            email,
            phone,
            birth_date: birthDate,
            preferred_barber: preferredBarber,
            notes
          }
        ])
        .select();

      if (error) {
        console.error('Erro ao inserir cliente:', error);
        return new Response(
          JSON.stringify({ error: 'Erro interno do servidor' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // TODO: Enviar email de boas-vindas para o cliente
      // Isso pode ser implementado com Resend, SendGrid ou similar
      
      return new Response(
        JSON.stringify({ 
          message: 'Cliente cadastrado com sucesso!',
          data: data[0]
        }),
        { 
          status: 201, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Método não permitido
    return new Response(
      JSON.stringify({ error: 'Método não permitido' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Erro na função cadastro:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});