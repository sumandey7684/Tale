import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  Leaf,
  Moon,
  Wind,
  Brain,
  Waves,
  Play,
  MoreHorizontal,
  Sun,
  TreePine,
  ArrowRight,
  Heart,
  Search,
} from "lucide-react";

const colors = {
  bg: "bg-[#F5F5F2]",
  dark: "text-[#1C2321]",
  darkBg: "bg-[#1C2321]",
  accent: "text-[#5E8C61]",
  accentBg: "bg-[#5E8C61]",
  accentLight: "bg-[#E9EFE9]",
  white: "bg-white",
};

const CompactMoodBtn = ({ icon: Icon, label, selected }: any) => (
  <button
    className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
      selected
        ? "bg-[#1C2321] text-white border-[#1C2321]"
        : "bg-white border-gray-100 text-gray-400 hover:border-[#5E8C61] hover:text-[#5E8C61]"
    }`}
  >
    <Icon size={14} />
    <span className="text-[10px] font-bold uppercase tracking-wider">
      {label}
    </span>
  </button>
);

const MiniCard = ({ icon: Icon, label, count, color }: any) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col justify-between h-28 group cursor-pointer hover:border-[#5E8C61]/30 transition-colors"
  >
    <div className="flex justify-between items-start">
      <div className={`p-2 rounded-full bg-opacity-10 ${color.bg}`}>
        <Icon size={16} className={color.text} />
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Play size={12} className="text-[#1C2321]" />
      </div>
    </div>
    <div>
      <h4 className="text-sm font-bold text-[#1C2321]">{label}</h4>
      <p className="text-[10px] text-gray-400 font-medium">{count} sessions</p>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div
      className={`h-full ${colors.bg} p-4 md:p-6 font-sans text-[#1C2321] selection:bg-[#5E8C61] selection:text-white`}
    >
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-serif text-[#1C2321]">Hello, Sarah</h1>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Tuesday, 4 Feb
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-white rounded-full px-1 py-1 border border-gray-100 shadow-sm">
            {[LayoutDashboard, Calendar, BarChart3].map((Icon, i) => (
              <button
                key={i}
                className={`p-2 rounded-full ${i === 0 ? "bg-[#1C2321] text-white" : "text-gray-400 hover:text-[#1C2321]"}`}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
          <button className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#1C2321]">
            <Settings size={14} />
          </button>
          <div className="w-9 h-9 rounded-full bg-[#5E8C61] text-white flex items-center justify-center text-xs font-serif">
            S
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-4">
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs font-serif italic text-gray-400 mr-2 shrink-0">
              I am feeling...
            </span>
            <CompactMoodBtn icon={Moon} label="Calm" selected={true} />
            <CompactMoodBtn icon={Brain} label="Focus" />
            <CompactMoodBtn icon={Waves} label="Tired" />
            <CompactMoodBtn icon={Heart} label="Grateful" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1C2321] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between md:col-span-2 min-h-[220px]"
            >
              <div className="relative z-10 flex justify-between items-start">
                <div className="max-w-xs">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-[#5E8C61] mb-3">
                    <Leaf size={10} />
                    <span>Recommended</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-2">
                    Deep Breath{" "}
                    <span className="italic text-gray-500 font-normal">
                      Release
                    </span>
                  </h2>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                    Lower cortisol levels in just 8 minutes.
                  </p>
                </div>

                <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <Wind size={24} className="text-[#5E8C61]" />
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-6">
                <button className="bg-white text-[#1C2321] px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#5E8C61] hover:text-white transition-colors">
                  <Play size={12} fill="currentColor" /> Start
                </button>
                <span className="text-[10px] text-gray-500 font-medium">
                  +2.4k others here
                </span>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5E8C61]/10 rounded-full blur-[60px] pointer-events-none -mr-10 -mt-10" />
            </motion.div>

            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <MiniCard
                icon={Brain}
                label="Focus"
                count={24}
                color={{ bg: "bg-orange-100", text: "text-orange-600" }}
              />
              <MiniCard
                icon={TreePine}
                label="Nature"
                count={42}
                color={{ bg: "bg-[#E9EFE9]", text: "text-[#5E8C61]" }}
              />
              <MiniCard
                icon={Waves}
                label="Sleep"
                count={18}
                color={{ bg: "bg-blue-50", text: "text-blue-500" }}
              />
              <button className="bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-[#5E8C61] hover:text-[#5E8C61] transition-colors h-28">
                <Search size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex-1 min-h-[220px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-lg text-[#1C2321]">Growth</h3>
              <div className="flex gap-1">
                <span className="text-[10px] font-bold bg-[#E9EFE9] text-[#5E8C61] px-2 py-0.5 rounded-full">
                  +15%
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-1 h-28">
              {[40, 65, 30, 90, 55, 75, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 flex-1 group h-full"
                >
                  <div className="w-full h-full relative flex items-end justify-center">
                    <div className="w-1.5 md:w-2 bg-[#F5F5F2] rounded-full h-full absolute inset-0 mx-auto" />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className={`w-1.5 md:w-2 relative z-10 ${i === 3 ? "bg-[#5E8C61]" : "bg-[#1C2321]/10 group-hover:bg-[#5E8C61]/50"} transition-colors rounded-full`}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-gray-300">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1C2321] p-5 rounded-3xl text-white shadow-xl shadow-[#1C2321]/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-lg">Recent</h3>
              <ArrowRight size={14} className="opacity-50" />
            </div>

            <div className="space-y-3">
              {[
                { title: "Morning Clarity", time: "2h ago", icon: Sun },
                { title: "Deep Sleep 101", time: "Yesterday", icon: Moon },
                { title: "Rain Sounds", time: "Yesterday", icon: Waves },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#5E8C61]">
                    <item.icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate group-hover:text-[#5E8C61] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[9px] text-white/40 uppercase tracking-wider">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
