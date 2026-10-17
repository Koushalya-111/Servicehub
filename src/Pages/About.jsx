import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Star,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description:
        "We help customers connect with trusted and reliable service professionals.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      icon: Zap,
      title: "Quick & Easy Booking",
      description:
        "Find the service you need and book it with just a few simple clicks.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Star,
      title: "Quality Services",
      description:
        "Choose highly-rated professionals based on customer reviews and ratings.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description:
        "Our goal is to make everyday service booking simple, convenient and reliable.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    {
      number: "1,200+",
      label: "Service Providers",
    },
    {
      number: "25K+",
      label: "Happy Customers",
    },
    {
      number: "50+",
      label: "Service Categories",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none fixed left-0 top-40 -z-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none fixed right-0 top-96 -z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* ================= HERO ================= */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                <Sparkles size={16} />
                About ServiceHub
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Making Everyday
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Services Simple
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                ServiceHub is a smart platform that helps people discover
                trusted professionals for their everyday service needs.
              </p>

              <p className="mt-4 max-w-xl text-2xl text-slate-500">
                From home cleaning and plumbing to electrical work, AC repair,
                salon services and more, ServiceHub brings multiple services
                together in one convenient platform.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-4 py-3 font-semibold shadow-xl shadow-violet-900/20 transition duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative flex justify-center"
            >
              {/* Glow */}
              <div className="absolute h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-xl"
              >
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-violet-500/30">
                    <Sparkles size={32} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold">ServiceHub</h2>

                    <p className="text-xs tracking-[0.2em] text-slate-500">
                      SMART SERVICES
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    "Your service. Your choice. Just one click away."
                  </p>
                </div>

                {/* Mini Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="text-emerald-400" size={24} />
                    <p className="mt-2 text-sm font-semibold">Trusted</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Zap className="text-cyan-400" size={24} />
                    <p className="mt-2 text-sm font-semibold">Fast</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Star className="text-yellow-400" size={24} />
                    <p className="mt-2 text-sm font-semibold">Rated</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Users className="text-fuchsia-400" size={24} />
                    <p className="mt-2 text-sm font-semibold">Reliable</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY SERVICEHUB ================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Everything You Need,
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                In One Place
              </span>
            </h2>

            <p className="mt-5 text-2xl text-slate-400">
              We are building a simple and reliable way for customers to find
              the right professionals whenever they need help.
            </p>
          </motion.div>

          {/* Features */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:border-violet-400/30"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold transition group-hover:text-cyan-300">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Connecting People With
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                The Right Professionals
              </span>
            </h2>

            <p className="mt-6 text-3xl text-slate-400">
              Finding a reliable professional should not be difficult.
              ServiceHub aims to make the entire process easier — from
              discovering a service to booking a professional.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-emerald-400" size={20} />
                <span className="text-slate-300 text-3xl">
                  Simple and convenient service discovery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-emerald-400" size={20} />
                <span className="text-slate-300 text-3xl">
                  Trusted and highly-rated professionals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-emerald-400" size={20} />
                <span className="text-slate-300 text-3xl">
                  Quick and easy booking experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-emerald-400" size={20} />
                <span className="text-slate-300 text-3xl">
                  Multiple everyday services in one platform
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-400/10 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg">
              <HeartHandshake size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">Built For Everyday Life</h3>

            <p className="mt-4 text-2xl text-slate-400">
              Whether you need a cleaner, plumber, electrician, technician,
              painter or salon professional, ServiceHub is designed to make
              finding help easier.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-500">Our vision</p>

              <p className="mt-2 text-lg font-semibold text-white">
                "Making professional services accessible, simple and convenient
                for everyone."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-white/10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-400/10 p-8 text-center shadow-2xl shadow-violet-950/20 sm:p-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg">
            <Sparkles size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Ready to Find Your Service?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Explore our services and find the right professional for your needs.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-7 py-3.5 font-semibold shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
