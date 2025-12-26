import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mahrarihat@gmail.com" },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92300-5177228" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Arhamhir", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/arham-tahir-95626a28a/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/arhamhir/",
    label: "Instagram",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Prefer environment variable in production: Vite exposes `import.meta.env.VITE_*`
  // Set `VITE_APPS_SCRIPT_URL` in Vercel env vars and in local `.env.local` for dev.
  const APPS_SCRIPT_URL = (import.meta.env.VITE_APPS_SCRIPT_URL as string) ||
    "https://script.google.com/macros/s/AKfycbzmGb0vHzEinUMu7p1RbNN5KZWMHXuetSmkrIo7XXv5eAKWHbNTeqfz4H4oBOA21brI2Q/exec?secret=baller_is_the_one";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fd = new FormData(e.target as HTMLFormElement);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    };

    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes("PUT_YOUR")) {
      // No URL configured — fall back to local simulated submit
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast({
        title: "Message saved locally",
        description: "No endpoint configured.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      return;
    }

    try {
      // Send as FormData to avoid CORS preflight (Apps Script does not handle OPTIONS)
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      toast({
        title: "Message sent!",
        description: "Thanks — I'll reply soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Send failed",
        description:
          "Could not send. If you deployed the Apps Script web app, check it is set to 'Anyone, even anonymous' and that the URL is correct.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
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
            <p className="text-primary font-medium mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-4 text-muted-foreground">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      target="_blank"
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(51_100%_52%_/_0.3)] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 gradient-border"
              >
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Arham Tahir"
                        required
                        className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="arham@example.com"
                        required
                        className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
