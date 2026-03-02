import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating accent orb */}
      <div className="absolute top-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-glow-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-secondary/50 mb-8"
        >
          <Code2 size={14} className="text-primary" />
          <span className="text-sm text-muted-foreground font-medium">
            Moderna webblösningar för ambitiösa företag
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-balance"
        >
          Vi bygger digitala
          <br />
          <span className="gradient-text">lösningar som levererar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 text-balance"
        >
          Från idé till lansering. Vi utvecklar skräddarsydda webbapplikationer, 
          SaaS-plattformar och MVP:er med modern teknik och ett skarpt öga för detaljer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition-all hover:gap-3 group"
          >
            Starta ditt projekt
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/30 text-foreground px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:bg-secondary/60 transition-colors"
          >
            Se våra tjänster
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
