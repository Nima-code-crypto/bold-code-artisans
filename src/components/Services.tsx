import { motion } from "framer-motion";
import { Globe, Layers, Rocket, Monitor, Server, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webbplatser",
    description: "Moderna, responsiva webbplatser som gör intryck och konverterar besökare till kunder.",
  },
  {
    icon: Layers,
    title: "Webbapplikationer",
    description: "Skräddarsydda applikationer byggda med React och TypeScript för maximal prestanda.",
  },
  {
    icon: Rocket,
    title: "MVP-utveckling",
    description: "Snabb prototypning och lansering av din produkt – från koncept till marknad.",
  },
  {
    icon: Monitor,
    title: "Frontend-utveckling",
    description: "Pixelperfekta gränssnitt med modern teknik, animationer och sömlös UX.",
  },
  {
    icon: Server,
    title: "Backend & API",
    description: "Robusta backend-lösningar och API:er som skalar med ditt företag.",
  },
  {
    icon: Zap,
    title: "SaaS-plattformar",
    description: "Fullständiga SaaS-lösningar med autentisering, betalning och dashboard.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Tjänster
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Allt du behöver för att{" "}
            <span className="gradient-text">lyckas digitalt</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi erbjuder ett komplett utbud av utvecklingstjänster anpassade efter dina behov.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="glass-card p-4 md:p-8 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]"
            >
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={18} className="text-primary md:hidden" />
                <service.icon size={22} className="text-primary hidden md:block" />
              </div>
              <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
