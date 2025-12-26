import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const skills = [
  { name: "Exploratory Data Analysis", base: 85, category: "Data" },
  { name: "Machine Learning", base: 82, category: "Data" },
  { name: "Model Training & Evaluation", base: 78, category: "Data" },
  { name: "Data Preprocessing & Visualization", base: 80, category: "Data" },
  { name: "Automation (n8n)", base: 75, category: "Automation" },
  { name: "Python", base: 88, category: "Languages" },
  { name: "C++", base: 70, category: "Languages" },
  { name: "Java", base: 65, category: "Languages" },
];

const technologies = [
  "Python",
  "n8n",
  "LLaMA (Groq)",
  "Pandas",
  "scikit-learn",
  "PyTorch",
  "NumPy",
  "Google Sheets",
  "Docker",
  "PostgreSQL",
  "React",
  "Tailwind CSS",
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // deterministic small jitter per skill so numbers are fixed but not all round
  function stableJitter(name: string, range = 3) {
    let h = 5381;
    for (let i = 0; i < name.length; i++) h = (h * 33) ^ name.charCodeAt(i);
    const jitter = (Math.abs(h) % (range * 2 + 1)) - range; // -range..+range
    return jitter;
  }

  const computed = useMemo(() => {
    return skills.map((s) => {
      const jitter = stableJitter(s.name, 3);
      const level = Math.max(40, Math.min(95, s.base + jitter));
      return { ...s, level };
    });
  }, []);

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-4">My Skills</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I work with modern technologies to build fast, scalable, and
              beautiful applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {computed.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.category}
                    </p>
                  </div>
                  <span className="text-2xl font-heading font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.3 + 0.1 * index,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                      style={{ backgroundSize: "200% 100%" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="font-heading font-semibold text-xl mb-8 text-muted-foreground">
              Also Experienced In
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + 0.05 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(51_100%_52%_/_0.2)] transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
