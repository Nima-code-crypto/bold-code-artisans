import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "190 95% 55%" },
  { name: "TypeScript", color: "215 80% 55%" },
  { name: "JavaScript", color: "50 90% 55%" },
  { name: "HTML5", color: "15 85% 55%" },
  { name: "CSS3", color: "200 85% 55%" },
  { name: "Tailwind CSS", color: "190 95% 55%" },
  { name: "Node.js", color: "140 60% 45%" },
  { name: "Next.js", color: "0 0% 80%" },
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 hero-glow opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Teknikstack
          </span>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-4">
            Byggd med <span className="gradient-text">modern teknik</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Vi använder branschledande verktyg och ramverk för att leverera snabba, skalbara och underhållbara lösningar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 group cursor-default hover:border-primary/30 transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full transition-shadow duration-300"
                style={{
                  backgroundColor: `hsl(${tech.color})`,
                  boxShadow: `0 0 12px hsl(${tech.color} / 0.5)`,
                }}
              />
              <span className="font-semibold text-xs md:text-sm text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16 max-w-2xl mx-auto glass-card p-4 md:p-6 font-mono text-xs md:text-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(50 90% 55%)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(140 60% 45%)" }} />
          </div>
          <pre className="text-muted-foreground overflow-x-auto">
            <code>
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">nimab</span> ={" "}
              <span className="text-primary">{"{"}</span>
              {"\n"}
              {"  "}passion: <span style={{ color: "hsl(140 60% 55%)" }}>"unlimited"</span>,{"\n"}
              {"  "}code: <span style={{ color: "hsl(140 60% 55%)" }}>"clean & scalable"</span>,{"\n"}
              {"  "}delivery: <span style={{ color: "hsl(140 60% 55%)" }}>"on time, every time"</span>,{"\n"}
              <span className="text-primary">{"}"}</span>;
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
