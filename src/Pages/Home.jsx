import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Star,
  ShieldCheck,
  Zap,
  Wrench,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        {/* Background Glow */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:py-28">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-300 backdrop-blur-md">
              <Zap size={16} />
              Fast & Trusted Local Services
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Your Service.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Just One Click Away.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Find trusted professionals for cleaning, plumbing, electrical,
              repair and many more services near you.
            </p>

            {/* ================= SEARCH BOX ================= */}
            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                <Search className="text-cyan-300" size={20} />

                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105">
                Search
              </button>
            </div>

            {/* ================= TRUST ================= */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" size={18} />
                Verified Professionals
              </div>

              <div className="flex items-center gap-2">
                <Star className="text-yellow-400" size={18} />
                Top Rated Services
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotateY: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

            {/* ================= MAIN 3D CARD ================= */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-80 w-72 rotate-[-4deg] rounded-[2rem] border border-white/20 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20 p-5 shadow-2xl shadow-violet-900/40 backdrop-blur-xl"
            >
              <div className="flex h-full flex-col justify-between">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Wrench size={28} className="text-cyan-300" />
                  </div>

                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                    Available
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <p className="text-sm text-slate-400">Popular Service</p>

                  <h2 className="mt-2 text-3xl font-bold">Home Repair</h2>

                  <div className="mt-4 flex items-center gap-2">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold">4.9</span>

                    <span className="text-slate-400">(2.4k reviews)</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20">
                  <span>Book Service</span>

                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* ================= FLOATING CARD 1 ================= */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-16 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Available Providers</p>

              <p className="text-xl font-bold text-cyan-300">1,200+</p>
            </motion.div>

            {/* ================= FLOATING CARD 2 ================= */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-16 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Happy Customers</p>

              <p className="text-xl font-bold text-fuchsia-300">25K+</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK FEATURES ================= */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <ShieldCheck className="text-violet-400" size={28} />

            <h3 className="mt-3 font-bold">Verified Experts</h3>

            <p className="mt-2 text-sm text-slate-400">
              Trusted professionals for your service needs.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <Zap className="text-cyan-400" size={28} />

            <h3 className="mt-3 font-bold">Quick Booking</h3>

            <p className="mt-2 text-sm text-slate-400">
              Book your required service in just a few clicks.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <Star className="text-yellow-400" size={28} />

            <h3 className="mt-3 font-bold">Top Rated</h3>

            <p className="mt-2 text-sm text-slate-400">
              Choose highly-rated professionals with confidence.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <Wrench className="text-fuchsia-400" size={28} />

            <h3 className="mt-3 font-bold">Many Services</h3>

            <p className="mt-2 text-sm text-slate-400">
              One platform for all your everyday services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
