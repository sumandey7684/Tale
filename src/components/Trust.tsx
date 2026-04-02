import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Marquee = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
  return (
    <div className="flex overflow-hidden relative w-full mask-linear-fade">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-12 md:gap-24 whitespace-nowrap min-w-max px-6 md:px-12"
      >
        {children}
        {children}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-calm-neutral to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-calm-neutral to-transparent z-10" />
    </div>
  );
};

const TestimonialCard = ({ quote, author, role, image, rating = 5 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group transition-all hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="absolute -top-4 -left-2 bg-tale-accent text-white p-2 rounded-xl rounded-bl-sm">
      <Quote size={20} fill="currentColor" />
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
      ))}
    </div>
    <p className="text-gray-600 font-serif italic mb-6 leading-relaxed text-lg">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <img src={image} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-bold text-tale-dark">{author}</div>
        <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
          {role}
        </div>
      </div>
    </div>
  </motion.div>
);

const Trust = () => {
  const LOGOS = [
    "Mindful",
    "The Times",
    "Wellness",
    "ScienceDaily",
    "TechCrunch",
    "Healthline",
    "Vogue",
  ];

  return (
    <section className="py-32 bg-calm-neutral relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12"
        >
          Trusted by leading experts
        </motion.p>

        <Marquee>
          {LOGOS.map((name, i) => (
            <span
              key={i}
              className="text-3xl md:text-4xl font-serif font-bold text-gray-300 mx-8"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 md:col-span-2 flex flex-col justify-center text-left mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-serif text-tale-dark mb-6">
            Stories of <br />{" "}
            <span className="text-tale-accent italic">Change.</span>
          </h2>
          <p className="text-gray-500 font-light mb-8">
            Real people, real results. See how meaningful moments of calm have
            transformed lives around the world.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/women/${40 + i}.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-bold text-tale-dark">
              2,000+ Reviews
            </span>
          </div>
        </div>

        <TestimonialCard
          quote="I never thought an app could replace my anxiety medication, but the breathing exercises here have been a lifeline."
          author="Elena Bowers"
          role="Art Director"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <TestimonialCard
          quote="This isn't just meditation. It's a complete toolkit for your mind. The design alone calms me down."
          author="Marcus Chen"
          role="Software Engineer"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
      </div>
    </section>
  );
};

export default Trust;
