import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Flower, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-gray-100 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-tale-dark text-white p-1.5 rounded-lg transition-transform group-hover:rotate-12">
              <Flower size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-serif font-medium text-tale-dark tracking-tight">
              Tale
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Methodology", "Library", "Articles", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-tale-dark transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-tale-dark transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-tale-dark/60 hover:text-tale-dark transition-colors px-4 py-2">
            Log in
          </button>
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-tale-dark px-6 py-3 text-sm font-bold text-white transition-all shadow-[0_15px_30px_-5px_rgba(30,47,35,0.2)] hover:shadow-[0_20px_40px_-5px_rgba(30,47,35,0.3)]"
          >
            Get Started
            <ChevronRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
