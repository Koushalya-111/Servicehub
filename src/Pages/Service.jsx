import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  MapPin,
  ArrowRight,
  SlidersHorizontal,
  Sparkles,
  Wrench,
  Zap,
  Droplets,
  Wind,
  Scissors,
  Hammer,
  Home,
  Paintbrush,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Cleaning", icon: Sparkles },
  { name: "Plumbing", icon: Droplets },
  { name: "Electrical", icon: Zap },
  { name: "AC Repair", icon: Wind },
  { name: "Salon", icon: Scissors },
  { name: "Carpenter", icon: Hammer },
  { name: "Painting", icon: Paintbrush },
];

const services = [
  {
    id: 1,
    title: "Home Deep Cleaning",
    category: "Cleaning",
    description:
      "Complete home cleaning by trained and verified professionals.",
    price: 799,
    rating: 4.9,
    reviews: 1240,
    location: "Available near you",
    icon: Sparkles,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Bathroom Cleaning",
    category: "Cleaning",
    description:
      "Professional bathroom cleaning with premium cleaning products.",
    price: 499,
    rating: 4.8,
    reviews: 890,
    location: "Available near you",
    icon: Sparkles,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 3,
    title: "Plumbing Repair",
    category: "Plumbing",
    description:
      "Fix leaking taps, pipes, sinks, flushes and other plumbing issues.",
    price: 399,
    rating: 4.8,
    reviews: 756,
    location: "Available near you",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 4,
    title: "Electrician Service",
    category: "Electrical",
    description: "Expert electrical repair and installation for your home.",
    price: 349,
    rating: 4.7,
    reviews: 680,
    location: "Available near you",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    title: "AC Service & Repair",
    category: "AC Repair",
    description:
      "AC cleaning, servicing and repair by experienced technicians.",
    price: 599,
    rating: 4.9,
    reviews: 1120,
    location: "Available near you",
    icon: Wind,
    gradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 6,
    title: "Salon at Home",
    category: "Salon",
    description: "Professional beauty and grooming services at your doorstep.",
    price: 699,
    rating: 4.8,
    reviews: 980,
    location: "Available near you",
    icon: Scissors,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 7,
    title: "Carpenter Service",
    category: "Carpenter",
    description:
      "Furniture repair, fitting, installation and custom carpentry.",
    price: 449,
    rating: 4.7,
    reviews: 540,
    location: "Available near you",
    icon: Hammer,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 8,
    title: "Home Painting",
    category: "Painting",
    description:
      "Transform your home with professional interior and exterior painting.",
    price: 1299,
    rating: 4.9,
    reviews: 430,
    location: "Available near you",
    icon: Paintbrush,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 9,
    title: "Full Home Repair",
    category: "Home Repair",
    description:
      "Multiple home maintenance and repair services under one booking.",
    price: 999,
    rating: 4.9,
    reviews: 620,
    location: "Available near you",
    icon: Home,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 10,
    title: "Appliance Repair",
    category: "Home Repair",
    description: "Professional repair services for common home appliances.",
    price: 549,
    rating: 4.7,
    reviews: 510,
    location: "Available near you",
    icon: Wrench,
    gradient: "from-slate-500 to-violet-500",
  },
];

const Service = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const categoryMatch =
        activeCategory === "All" || service.category === activeCategory;

      const searchMatch =
        service.title.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase()) ||
        service.description.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed left-0 top-20 -z-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none fixed right-0 top-96 -z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Trusted Services Near You
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Find the Right
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Service for You
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Discover trusted professionals for your home, personal and
              everyday service needs.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
              <Search className="shrink-0 text-cyan-300" size={21} />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cleaning, plumbing, salon..."
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-7 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105">
              <Search size={18} />
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative mx-auto max-w-7xl px-6 py-14">
        {/* Category Heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Categories
            </p>

            <h2 className="mt-2 text-3xl font-bold">Explore Our Services</h2>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/10">
            <SlidersHorizontal size={17} />
            Filter
          </button>
        </div>

        {/* Categories */}
        <div className="mb-14 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group flex min-w-fit items-center gap-2 rounded-2xl border px-5 py-3 font-medium transition duration-300 ${
                  isActive
                    ? "border-violet-400/40 bg-gradient-to-r from-violet-600/30 to-fuchsia-500/20 text-white shadow-lg shadow-violet-500/10"
                    : "border-white/10 bg-white/5 text-slate-400 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-500 group-hover:text-cyan-300"
                  }
                />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Result Header */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {activeCategory === "All"
                ? "Popular Services"
                : `${activeCategory} Services`}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredServices.length} services available
            </p>
          </div>

          <div className="hidden text-sm text-slate-500 sm:block">
            Best rated professionals
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 group-hover:border-violet-400/30 group-hover:shadow-violet-900/20">
                    {/* Glow */}
                    <div
                      className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl transition group-hover:opacity-25`}
                    />

                    {/* Icon */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <Icon size={27} className="text-white" />
                      </div>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                        Available
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
                        {service.category}
                      </p>

                      <h3 className="mt-2 text-xl font-bold transition group-hover:text-cyan-300">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                        {service.description}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-5 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-semibold">{service.rating}</span>
                      </div>

                      <span className="text-sm text-slate-500">
                        ({service.reviews.toLocaleString()})
                      </span>
                    </div>

                    {/* Location */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={16} className="text-cyan-400" />
                      {service.location}
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <div>
                        <p className="text-xs text-slate-500">Starting from</p>
                        <p className="text-xl font-bold">₹{service.price}</p>
                      </div>

                      <Link
                        to="/booking"
                        className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold transition duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-500"
                      >
                        Book
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center">
            <Search className="mx-auto text-slate-500" size={45} />

            <h3 className="mt-5 text-2xl font-bold">No services found</h3>

            <p className="mt-2 text-slate-500">
              Try searching with another service name or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 px-5 py-3 font-semibold"
            >
              View All Services
            </button>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-400/10 p-8 text-center shadow-2xl shadow-violet-950/20 sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg">
            <Sparkles size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Can't find the service you need?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Tell us what you need and we'll help you find the right
            professional.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-7 py-3.5 font-semibold shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;
