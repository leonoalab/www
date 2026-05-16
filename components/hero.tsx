"use client";

import { motion } from "framer-motion";
import { ArrowRight, Braces, Code2, HeartPulse, Layers3, ShieldCheck } from "lucide-react";
import { ButtonLink, Container, SectionLabel } from "@/components/ui";

export function Hero() {
  return (
    <section className="noise relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="absolute left-[45%] top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violetlab/8 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-coral/12 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <SectionLabel>ONG, proyectos sociales y tecnología útil</SectionLabel>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              Proyectos sociales
              <span className="block text-bluebolt">con tecnología útil.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
              Leonoa Lab es una ONG que impulsa proyectos sociales para mejorar la calidad de vida de personas y colectivos. Construimos tecnología con propósito, pero también organizamos formación, talleres, eventos y colaboraciones cuando eso ayuda a resolver una necesidad real.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contacto">Proponer una necesidad</ButtonLink>
              <ButtonLink href="#que-hacemos" variant="light">Conocer la ONG</ButtonLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.08 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-bluebolt/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-4 shadow-lift">
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-citrus/25 blur-2xl" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#284466] p-5 text-white shadow-soft">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-coral" />
                    <span className="h-3 w-3 rounded-full bg-amberline" />
                    <span className="h-3 w-3 rounded-full bg-aqua" />
                  </div>
                  <div className="mt-5 space-y-3 font-mono text-sm text-sky-50/90">
                    <div><span className="text-aqua">const</span> problema = <span className="text-citrus">"real"</span>;</div>
                    <div><span className="text-aqua">const</span> salida = <span className="text-citrus">"usable"</span>;</div>
                    <div><span className="text-coral">acompañar</span>(entregar());</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-bluebolt/20 bg-bluebolt/5 p-5">
                    <Layers3 className="h-6 w-6 text-bluebolt" />
                    <p className="mt-4 text-sm font-medium leading-6 text-ink">Proyectos pensados para personas, familias, profesionales y entidades reales.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-coral/20 bg-coral/5 p-5">
                    <Braces className="h-6 w-6 text-coral" />
                    <p className="mt-4 text-sm font-medium leading-6 text-ink">Software, formación, eventos y acompañamiento sin perder el foco social.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[1.5rem] border border-violetlab/20 bg-white p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink"><ShieldCheck className="h-4 w-4 text-violetlab" /> Como ONG, buscamos</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Mejorar autonomía, comunicación, organización o acceso a recursos. La tecnología es el medio, no el fin.</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 grid h-16 w-16 place-items-center rounded-2xl border border-white bg-coral text-white shadow-soft">
              <HeartPulse className="h-7 w-7" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
