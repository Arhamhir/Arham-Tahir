import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Rocket, label: "Performance" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual Side */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Abstract Shape */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 rotate-6" />
                <div className="absolute inset-0 rounded-3xl glass gradient-border" />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                {/* Content */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
                      >
                        <item.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-medium mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                AI &amp; Automation
                <br />
                <span className="text-gradient">Researcher & Developer</span>
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  AI undergrad (CGPA 3.78). I build practical ML tools and
                  automations — data, model, ship. Mostly Python, sometimes C++.
                </p>
                <p>
                  I favor simple, useful work: clean data, train a model, and
                  automate the repetitive bits. Projects are small and focused —
                  see the `Projects` section.
                </p>
                <p>
                  Outside of code I help run student events and tutor when I
                  can.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div>
                  <h4 className="text-sm text-primary font-medium mb-2">
                    Languages
                  </h4>
                  <p className="text-muted-foreground">English, Urdu</p>
                </div>

                <div>
                  <h4 className="text-sm text-primary font-medium mb-2">
                    Certifications
                  </h4>
                  <p className="text-muted-foreground">
                    CS50P – Introduction to Programming with Python
                    <br />
                    CS50x – Introduction to Computer Science
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm text-primary font-medium mb-2">
                  Awards & Activities
                </h4>
                <ul className="text-muted-foreground list-disc list-inside">
                  <li>
                    3rd Place – Machine Learning Competition, COMSATS University
                  </li>
                  <li>Participation in CAIS society events</li>
                  <li>Placed 7 in FAST speed programming out of 60</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
