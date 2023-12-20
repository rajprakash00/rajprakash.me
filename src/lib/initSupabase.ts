import { createClient } from "@supabase/supabase-js";

const clientEnabled =
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL !== "undefined" &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "" &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_KEY !== "undefined" &&
  process.env.NEXT_PUBLIC_SUPABASE_KEY !== "";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

export const supabaseClient = clientEnabled
  ? createClient(supabaseUrl, supabaseKey)
  : undefined;

export const initSupabaseClient = () => {
  if (typeof supabaseClient !== "undefined") {
    return {
      enabled: true,
      supabaseClient: supabaseClient,
    };
  }
  return {
    enabled: false,
    supabaseClient: undefined,
  };
};
