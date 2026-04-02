import { motion } from "framer-motion";
import { Cloud, Smartphone, Laptop, Check, Tablet, Watch } from "lucide-react";

const ConnectionLine = ({
  rotation,
  length = "50%",
}: {
  rotation: number;
  length?: string;
}) => (
  <div
    className="absolute top-1/2 left-1/2 h-px origin-left bg-linear-to-r from-tale-accent/30 to-transparent"
    style={{
      width: length,
      transform: `rotate(${rotation}deg)`,
    }}
  >
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: "100%", opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-tale-accent shadow-[0_0_8px_rgba(94,140,97,0.6)]"
    />
  </div>
);

const DeviceCard = ({ icon: Icon, label, className, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex flex-col items-center gap-2 w-24 md:w-28 ${className}`}
  >
    <div className="bg-tale-accent/10 p-2 rounded-xl text-tale-dark">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <span className="text-xs font-medium text-gray-600">{label}</span>

    <div className="absolute -top-2 -right-2 bg-tale-accent text-white p-1 rounded-full shadow-sm">
      <Check size={10} strokeWidth={3} />
    </div>
  </motion.div>
);

const Continuity = () => {
  return (
    <section className="py-32 bg-linear-to-b from-calm-green/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-calm-green border border-tale-accent/20 text-tale-dark text-xs font-bold uppercase tracking-wider mb-6">
            <Cloud size={12} className="text-tale-accent" />
            <span>Tale Cloud™</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-tale-dark mb-6 leading-[1.1]">
            Your Sanctuary, <br />
            <span className="text-tale-accent italic">Always in Sync.</span>
          </h2>
          <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed max-w-lg">
            Start a guided session on your morning commute, journal your
            thoughts at lunch, and drift off to sleep with a soundscape at home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Real-time Sync",
                desc: "Instantly available across devices",
              },
              { title: "Offline Mode", desc: "Download sessions for travel" },
              { title: "E2E Encryption", desc: "Your data is yours alone" },
              { title: "Progress Tracking", desc: "Seamless stats continuity" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 h-2 w-2 rounded-full bg-teal-800/60 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-tale-dark">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-calm-green/60 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tale-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
            <div className="absolute inset-0">
              <ConnectionLine rotation={-90} />
              <ConnectionLine rotation={0} />
              <ConnectionLine rotation={90} />
              <ConnectionLine rotation={180} />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-20 w-32 h-32 bg-white rounded-full shadow-[0_0_50px_rgba(94,140,97,0.2)] flex items-center justify-center border border-calm-green"
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-tale-accent/20 to-transparent rounded-full animate-ping opacity-20"
                style={{ animationDuration: "3s" }}
              />
              <Cloud size={48} className="text-tale-accent drop-shadow-sm" />
            </motion.div>

            <DeviceCard
              icon={Smartphone}
              label="Mobile"
              className="top-0 left-1/2 -translate-x-1/2 -translate-y-8"
              delay={0.2}
            />
            <DeviceCard
              icon={Laptop}
              label="Desktop"
              className="top-1/2 -right-4 -translate-y-1/2 translate-x-8"
              delay={0.4}
            />
            <DeviceCard
              icon={Tablet}
              label="Tablet"
              className="bottom-0 left-1/2 -translate-x-1/2 translate-y-8"
              delay={0.6}
            />
            <DeviceCard
              icon={Watch}
              label="Watch"
              className="top-1/2 -left-4 -translate-y-1/2 -translate-x-8"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Continuity;
