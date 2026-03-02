import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Djup teknisk kompetens inom moderna ramverk",
  "Snabb leverans utan att kompromissa på kvalitet",
  "Transparent kommunikation genom hela processen",
  "Skalbar och underhållbar kod från dag ett",
  "Personligt engagemang i varje projekt",
  "Resultatfokuserad – vi mäter framgång i din tillväxt",
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Om Nimab
            </span>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
              Din partner för{" "}
              <span className="gradient-text">digital framgång</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              Nimab Development är ett teknikfokuserat utvecklingsbolag som hjälper 
              företag att ta steget in i det digitala. Vi kombinerar teknisk spetskompetens 
              med affärsförståelse för att skapa lösningar som faktiskt gör skillnad.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              Med ett starkt driv och ett genuint intresse för modern webbutveckling 
              levererar vi projekt som inte bara ser bra ut – utan som presterar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-5 md:p-10"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Varför Nimab?</h3>
            <div className="space-y-3 md:space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground text-sm leading-relaxed">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
