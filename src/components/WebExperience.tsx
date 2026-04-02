import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Dashboard from "./Dashboard";

const WebExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-calm-green/80 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-tale-warm/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-tale-dark mb-6"
          >
            Experience Calm, <br />
            <span className="italic text-gray-400">Everywhere You Are.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg font-light"
          >
            Seamlessly sync your sessions between mobile and desktop. Whether
            you're at your desk or on the go, your peace of mind is always
            within reach.
          </motion.p>
        </div>

        <motion.div
          style={{ y, opacity, scale }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute left-1/2 bottom-[-40px] -translate-x-1/2 w-48 h-24 bg-linear-to-b from-gray-300 to-gray-400 rounded-lg -z-10 shadow-xl" />
          <div className="absolute left-1/2 bottom-[-40px] -translate-x-1/2 w-64 h-4 bg-gray-300 rounded-full blur-xl opacity-50" />

          <div className="bg-black p-3 md:p-5 rounded-4xl shadow-2xl border-4 border-gray-800 ring-1 ring-gray-700 relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full z-20 hidden md:block" />

            <div className="bg-white rounded-3xl overflow-hidden aspect-16/10 md:aspect-video relative group">
              <div className="bg-gray-50/90 backdrop-blur px-4 py-3 border-b border-gray-100 flex items-center gap-4 absolute top-0 left-0 right-0 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white/50 border border-gray-200/50 rounded-md h-6 flex-1 max-w-md mx-auto flex items-center justify-center text-[10px] text-gray-400 font-medium">
                  app.tale-wellness.com/dashboard
                </div>
              </div>

              <div className="h-full pt-12 overflow-y-auto scrollbar-hide bg-calm-neutral">
                <Dashboard />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 max-w-5xl mx-auto text-center">
          {[
            {
              title: "Universal Sync",
              desc: "Start on your phone, finish on your desktop.",
            },
            {
              title: "Focus Mode",
              desc: "Distraction-free interface for deep work sessions.",
            },
            {
              title: "Instant Access",
              desc: "No downloads required, just open and breathe.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <h4 className="font-bold text-tale-dark mb-2 text-sm uppercase tracking-wider">
                {feature.title}
              </h4>
              <p className="text-gray-500 font-light text-sm px-6">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebExperience;
