import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Leaf, Moon, Sun, CheckCircle2 } from "lucide-react";

const TimelineItem = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -50 : 50, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div
      ref={itemRef}
      className={`flex items-center justify-between w-full mb-24 md:mb-32 relative ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-tale-accent rounded-full z-20 ring-4 ring-tale-accent/20" />

      <motion.div
        style={{ opacity, x, scale }}
        className={`w-[42%] ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
      >
        <div
          className={`flex flex-col ${index % 2 === 0 ? "items-end" : "items-start"}`}
        >
          <span className="text-tale-accent font-serif italic text-lg mb-2">
            Step 0{index + 1}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-tale-dark mb-4">
            {title}
          </h3>
          <p className="text-gray-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className={`w-[42%] flex ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 relative overflow-hidden group">
          <div className="absolute inset-0 bg-calm-green/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Icon
            size={32}
            strokeWidth={1.5}
            className="text-tale-dark relative z-10"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-calm-neutral relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-tale-dark mb-6"
          >
            A Gentle Journey <br />
            <span className="text-gray-400 italic">Back to Balance.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto font-light"
          >
            We don't believe in quick fixes. We believe in a sustainable path to
            peace, one step at a time.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:block hidden" />

          <motion.div
            style={{ height }}
            className="absolute left-1/2 top-0 w-0.5 bg-tale-accent -translate-x-1/2 md:block hidden origin-top z-10"
          />

          <div className="relative z-10 hidden md:block">
            <TimelineItem
              index={0}
              icon={Sparkles}
              title="Settle In"
              description="Start by finding a quiet space. Our app helps you tune out the noise and tune into yourself with gentle ambient sounds."
            />
            <TimelineItem
              index={1}
              icon={Leaf}
              title="Release"
              description="Guided breathing exercises help you physically let go of tension. Feel your shoulders drop and your jaw unclench."
            />
            <TimelineItem
              index={2}
              icon={Moon}
              title="Reflect"
              description="Journal your thoughts in our encrypted diary. Externalizing your worries is the first step to conquering them."
            />
            <TimelineItem
              index={3}
              icon={Sun}
              title="Renew"
              description="Finish with a sense of clarity. Set a small, achievable intention for the rest of your day."
            />
          </div>

          <div className="md:hidden space-y-12">
            {[
              {
                icon: Sparkles,
                title: "Settle In",
                desc: "Start by finding a quiet space. Tune out the noise.",
              },
              {
                icon: Leaf,
                title: "Release",
                desc: "Guided breathing to physically let go of tension.",
              },
              {
                icon: Moon,
                title: "Reflect",
                desc: "Journal your thoughts in our encrypted diary.",
              },
              {
                icon: Sun,
                title: "Renew",
                desc: "Finish with a sense of clarity and purpose.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-tale-accent/20 flex items-center justify-center text-tale-dark z-10">
                    <item.icon size={18} />
                  </div>
                  {i !== 3 && <div className="w-0.5 flex-1 bg-gray-100 my-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold font-serif text-tale-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-tale-dark rounded-full flex items-center justify-center text-white relative z-20 shadow-xl"
          >
            <CheckCircle2 size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
