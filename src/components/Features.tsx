import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  MessageCircle,
  MessageSquare,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "../lib/utils";

const Spotlight = ({
  className,
  size = 300,
}: {
  className?: string;
  size?: number;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 z-10 overflow-hidden rounded-[inherit] bg-transparent transition-all duration-300",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(165, 180, 252, 0.15), transparent 80%)`,
        }}
      />
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  delay,
  children,
}: {
  icon: any;
  title: string;
  description: string;
  className?: string;
  delay: number;
  children?: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative group overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl",
      className,
    )}
  >
    <Spotlight />

    <div className="relative z-20 flex flex-col h-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-calm-green/50 p-3 text-tale-dark transition-colors group-hover:bg-tale-dark group-hover:text-white">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <ArrowUpRight
          className="text-gray-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tale-accent"
          size={20}
        />
      </div>

      <h3 className="mb-2 text-xl font-bold font-serif text-tale-dark">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 font-sans mb-4 flex-1">
        {description}
      </p>

      {children}
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-32 bg-gray-50/50 relative px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-tale-dark mb-6"
          >
            Everything You Need <br />
            <span className="text-gray-400 italic">To Find Your Center.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-light"
          >
            Holistic tools designed to support your mental well-being from every
            angle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 auto-rows-[minmax(250px,auto)]">
          <FeatureCard
            icon={MessageCircle}
            title="AI Companion"
            description="Our AI is trained to provide immediate, non-judgmental support 24/7."
            className="md:col-span-2 md:row-span-2 bg-linear-to-br from-white to-calm-green"
            delay={0}
          >
            <div className="mt-6 w-full rounded-2xl bg-white border border-gray-100 shadow-sm relative overflow-hidden group-hover:shadow-md transition-all flex flex-col">
              <div className="bg-calm-green/50 p-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tale-accent rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-gray-500">
                    Tale Assistant is online
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">Just now</span>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-linear-to-tr from-tale-accent to-tale-accent/60 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    AI
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-700 max-w-[85%] shadow-sm">
                    I noticed your heart rate is slightly elevated. Would you
                    like to try a quick breathing exercise?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-tale-dark flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    You
                  </div>
                  <div className="bg-tale-dark text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-[85%] shadow-sm">
                    Yes, please. I'm feeling a bit anxious about my
                    presentation.
                  </div>
                </div>
                <div className="flex gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-linear-to-tr from-tale-accent to-tale-accent/60 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    AI
                  </div>
                  <div className="flex gap-1 items-center bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 h-10 w-16">
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Heart}
            title="Guided Breaths"
            description="Visual and haptic breathing guides to lower cortisol."
            className="md:col-span-1 md:row-span-2 bg-white"
            delay={0.1}
          >
            <div className="mt-auto flex flex-col items-center justify-center py-6 gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border border-tale-accent/20 rounded-full animate-[ping_4s_ease-in-out_infinite]" />
                <div className="absolute inset-4 border border-tale-accent/40 rounded-full animate-[ping_4s_ease-in-out_infinite] delay-300" />

                <div className="w-20 h-20 rounded-full bg-calm-green flex items-center justify-center relative z-10 text-tale-accent font-serif text-sm shadow-inner transition-all duration-4000 ease-in-out animate-[pulse_4s_ease-in-out_infinite]">
                  Inhale
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-serif text-tale-dark">4m</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                    Session
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-serif text-tale-dark">-15%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                    Heart Rate
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Clock}
            title="Clinically Proven"
            description="Techniques validated by over 50+ peer-reviewed studies."
            className="md:col-span-1 border-tale-accent/10"
            delay={0.2}
          >
            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://randomuser.me/api/portraits/men/${30 + i}.jpg')`,
                    }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500">
                <span className="font-bold text-tale-dark">12+ PhDs</span> on
                our advisory board.
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Shield}
            title="Private & Secure"
            description="End-to-end encryption for all your journals and data."
            className="md:col-span-1"
            delay={0.3}
          >
            <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit">
              <Shield size={14} fill="currentColor" />
              <span className="text-xs font-medium">AES-256 Encrypted</span>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={MessageSquare}
            title="Emergency Support"
            description="One-tap connection to crisis hotlines and family."
            className="md:col-span-1"
            delay={0.4}
          >
            <div className="mt-4 flex gap-2">
              <div className="h-2 w-full bg-red-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-red-400 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-gray-400">Response Time</span>
              <span className="text-[10px] font-bold text-red-400 font-mono">
                &lt; 30s
              </span>
            </div>
          </FeatureCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden rounded-5xl bg-tale-dark px-8 py-12 text-center md:px-16"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-3xl font-serif text-white mb-2">
                Ready to find your calm?
              </h3>
              <p className="text-white/60 font-light">
                Join over 10,000+ users on their journey.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-tale-dark px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-tale-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
