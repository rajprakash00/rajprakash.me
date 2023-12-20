import { initSupabaseClient } from "@/lib/initSupabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { enabled, supabaseClient } = initSupabaseClient();

  try {
    if (!enabled) {
      res.status(400).json({ message: "Supabase is not initialized" });
    } else {
      if (req.method === "GET") {
        const { page_slug } = req.query;

        if (typeof page_slug === "undefined") {
          res.status(400).json({
            error: "Missing slug",
          });
          return;
        }
        /* @ts-ignore sorry I was trying to finish up:( */
        const { data, error } = await supabaseClient
          ?.from("page_views")
          .select("views_count")
          .eq("slug", page_slug)
          .limit(1)
          .single();

        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ data: data.views_count });
        }
      }
    }
  } catch (e) {
    console.log(e, "error");
    res.status(500).json({ message: "Unknown error" });
  }
}
