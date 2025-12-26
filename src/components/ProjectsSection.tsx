import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Automated Lead Qualifier & Email Drafter",
    description:
      "Scrapes company sites from Sheets, scores relevance via Groq (LLaMA4), and drafts personalized emails.",
    image:
      "https://www.apptivo.com/wp-content/uploads/2021/07/Leads-Qualification-101-Importance-of-Qualifying-Leads.jpg",
    tech: ["n8n", "LLaMA 4 (Groq)", "Google Sheets", "Node.js"],
    live: "#",
    linked:
      "https://www.linkedin.com/posts/arham-tahir-95626a28a_n8n-automation-webscrapper-activity-7365852920992468994-2yy7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYpZtIBX_DV9rbMYtQetj-109aj_uILT-g",
  },
  {
    title: "n8n Support Ticket Management System",
    description:
      "n8n flow that handles tickets: forms → ack email → Discord alert → one‑click resolve.",
    image:
      "https://www.cflowapps.com/wp-content/uploads/2022/12/hr_ticktngsystem.jpg",
    tech: ["n8n", "Discord", "SMTP", "Forms"],
    live: "#",
    linked:
      "https://www.linkedin.com/posts/arham-tahir-95626a28a_n8n-automation-supportticketmanagement-activity-7375148232357879808-6Ars?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYpZtIBX_DV9rbMYtQetj-109aj_uILT-g",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-4">My Work</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects that showcase my expertise in building
              modern web applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="glass rounded-3xl overflow-hidden gradient-border hover:shadow-[0_0_40px_hsl(51_100%_52%_/_0.15)] transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.a
                        href={project.linked}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full glass text-foreground flex items-center justify-center hover:border-primary/50"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        size={20}
                      />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Arhamhir?tab=repositories"
              target="blank"
            >
              <Button variant="heroOutline" size="lg">
                View All Projects
                <ArrowUpRight size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
