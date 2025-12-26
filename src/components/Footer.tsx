import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Arham Tahir. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            Innovating today for a brighter tomorrow{" "}
            <Heart className="w-4 h-4 text-primary animate-pulse" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
