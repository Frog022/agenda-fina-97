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
      const { name, email, phone, subject, message } = await req.json();

      // Validação básica
      if (!name || !email || !subject || !message) {
        return new Response(
          JSON.stringify({ error: 'Campos obrigatórios não preenchidos' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // Inserir no banco de dados
      const { data, error } = await supabaseClient
        .from('contacts')
        .insert([
          {
            name,
            email,
            phone,
            subject,
            message
          }
        ])
        .select();

      if (error) {
        console.error('Erro ao inserir contato:', error);
        return new Response(
          JSON.stringify({ error: 'Erro interno do servidor' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // TODO: Enviar email de notificação para a barbearia
      // Isso pode ser implementado com Resend, SendGrid ou similar
      
      return new Response(
        JSON.stringify({ 
          message: 'Mensagem enviada com sucesso!',
          data: data[0]
        }),
        { 
          status: 200, 
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
    console.error('Erro na função contato:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});