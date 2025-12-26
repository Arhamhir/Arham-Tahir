import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Artificial Intelligence",
    company: "COMSATS University Islamabad",
    period: "2023 - Ongoing",
    description: "CGPA: 3.78",
  },
  {
    type: "education",
    title: "ICS (Intermediate in Computer Science)",
    company: "Cosmopolitan Grammar School",
    period: "Aug 2021 – July 2023",
    description: "Percentage: 86%",
  },
  {
    type: "work",
    title: "Tutor",
    company: "Cosmopolitan Grammar School",
    period: "Sep 2023 - Feb 2024",
    description:
      "Taught core subjects to primary-grade students with a focus on building foundational concepts. Assisted in logistics and coordination of university events.",
  },
  {
    type: "award",
    title: "3rd Place – Machine Learning Competition",
    company: "COMSATS University",
    period: "2023",
    description:
      "Active participant in university ML efforts and CAIS society.",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-4">My Journey</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A timeline of my professional growth and educational background.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 gradient-border hover:shadow-[0_0_30px_hsl(51_100%_52%_/_0.15)] transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {exp.type === "work" ? (
                          <Briefcase className="text-primary" size={20} />
                        ) : (
                          <GraduationCap className="text-primary" size={20} />
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
