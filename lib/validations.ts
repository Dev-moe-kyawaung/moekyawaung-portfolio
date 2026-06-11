import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "အမည်ကို အနည်းဆုံး ၂ လုံးရေးပါ"),
  email: z.string().email("အီးမေးလ် မှန်ကန်အောင်ရေးပါ"),
  message: z.string().min(10, "စာကို အနည်းဆုံး ၁၀ လုံးရေးပါ")
});

export type ContactForm = z.infer<typeof contactSchema>;
