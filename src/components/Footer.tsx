import { motion } from "framer-motion";
import {
  Flower,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ArrowUpRight,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F2] pt-32 pb-12 border-t border-gray-200/50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-12 lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="bg-[#1C2321] text-white p-2.5 rounded-2xl group-hover:rotate-12 group-hover:bg-[#5E8C61] transition-all duration-500 shadow-xl shadow-black/5">
                <Flower size={24} fill="currentColor" />
              </div>
              <span className="text-4xl font-serif font-bold text-[#1C2321] tracking-tight">
                Tale
              </span>
            </a>
            <p className="text-[#1C2321]/50 font-light text-xl leading-relaxed mb-10 max-w-sm">
              We create beautiful, evidence-based tools to help you navigate the
              complexities of contemporary life with grace.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#1C2321] hover:bg-[#1C2321] hover:text-white transition-all shadow-md group border border-white/50"
                >
                  <Icon
                    size={20}
                    className="transition-transform group-hover:rotate-6"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-bold text-[#1C2321] uppercase tracking-[0.2em] mb-10 opacity-40">
              Platform
            </h4>
            <ul className="space-y-5">
              {[
                "Methodology",
                "Sound Library",
                "Pricing Plans",
                "Web Experience",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#1C2321]/60 hover:text-[#5E8C61] transition-all flex items-center gap-1 group font-medium decoration-[#5E8C61]/30 hover:underline underline-offset-8 decoration-2"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-x-1 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-bold text-[#1C2321] uppercase tracking-[0.2em] mb-10 opacity-40">
              Company
            </h4>
            <ul className="space-y-5">
              {["Our Story", "Research", "Community", "Newsroom"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#1C2321]/60 hover:text-[#5E8C61] transition-all font-medium decoration-[#5E8C61]/30 hover:underline underline-offset-8 decoration-2"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <div className="bg-white p-10 rounded-[40px] border border-white shadow-2xl shadow-black/[0.03] relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-serif text-[#1C2321] mb-3">
                  Newsletter
                </h4>
                <p className="text-[#1C2321]/40 text-sm font-light mb-8 max-w-[200px]">
                  Bite-sized serenity delivered to your mailbox weekly.
                </p>
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-[#F5F5F2] px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#5E8C61]/30 focus:outline-none text-sm transition-all"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-[#1C2321] hover:bg-[#5E8C61] text-white px-5 rounded-xl transition-all hover:shadow-lg active:scale-95">
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
              <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-[#5E8C61]/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200/50 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C2321]/30">
            <p>© {currentYear} Tale Wellness Inc.</p>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin size={10} />
              <span>SF • LON • TOK</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={10} />
              <span>International Edition</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C2321]/30">
            <a href="#" className="hover:text-[#5E8C61] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#5E8C61] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#5E8C61] transition-colors">
              Accessibility
            </a>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5E8C61]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5E8C61] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5E8C61]"></span>
            </span>
            System: Normal
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 opacity-5 pointer-events-none select-none">
        <h1 className="text-[15vw] font-serif text-[#1C2321] leading-none text-center tracking-tighter">
          Tale
        </h1>
      </div>
    </footer>
  );
};
