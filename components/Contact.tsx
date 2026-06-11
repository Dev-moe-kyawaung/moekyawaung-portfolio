"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactForm } from "@/lib/validations";
import { site } from "@/lib/site";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    reset();
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24">
      <div className="mx-auto max-w-4xl cyber-frame border border-cyan-400/30 bg-white/5 p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold neon-text">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5">
          <input {...register("name")} placeholder="အမည်" className="bg-black/30 border border-white/10 p-4 rounded-xl" />
          {errors.name && <p className="text-pink-300">{errors.name.message}</p>}
          <input {...register("email")} placeholder="အီးမေးလ်" className="bg-black/30 border border-white/10 p-4 rounded-xl" />
          {errors.email && <p className="text-pink-300">{errors.email.message}</p>}
          <textarea {...register("message")} placeholder="စာတို" rows={6} className="bg-black/30 border border-white/10 p-4 rounded-xl" />
          {errors.message && <p className="text-pink-300">{errors.message.message}</p>}
          <button disabled={isSubmitting} className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 text-black font-bold py-4 rounded-xl">
            Send Message
          </button>
        </form>

        <div className="mt-8 text-white/70">
          <p>{site.email}</p>
          <p>{site.phone.join(" • ")}</p>
        </div>
      </div>
    </section>
  );
}
