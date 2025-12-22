declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

// Deno modules for Supabase Edge Functions
declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export function serve(handler: (req: Request) => Response | Promise<Response>): void;
}

declare module "https://deno.land/x/xhr@0.1.0/mod.ts" {}

export {};
  