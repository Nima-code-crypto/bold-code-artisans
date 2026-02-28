import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 hero-glow" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Redo att <span className="gradient-text">komma igång?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Berätta om ditt projekt så återkommer vi inom 24 timmar. 
            Ingen förpliktelse – bara ett ärligt samtal om hur vi kan hjälpa dig.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:kontakt@nimab.dev"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all group"
          >
            <Mail size={18} />
            kontakt@nimab.dev
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/30 text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-secondary/60 transition-colors group"
          >
            Utforska tjänster
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
