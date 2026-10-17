import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 shadow-2xl shadow-violet-900/20 backdrop-blur-xl">
      {/* ================= NAVBAR ================= */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-violet-500/40 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
              ServiceHub
            </h1>

            <p className="text-[10px] font-medium tracking-[0.25em] text-slate-400">
              SMART SERVICES
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            className="rounded-xl px-4 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="rounded-xl px-4 py-2.5 font-medium text-slate-300 transition hover:bg-white/10 hover:text-violet-300"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="rounded-xl px-4 py-2.5 font-medium text-slate-300 transition hover:bg-white/10 hover:text-fuchsia-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="rounded-xl px-4 py-2.5 font-medium text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
          >
            Contact
          </Link>
        </div>

        {/* ================= AUTH BUTTONS ================= */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl border border-violet-400/30 bg-white/5 px-5 py-2.5 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/10"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 p-3 text-white shadow-lg shadow-fuchsia-500/30 transition duration-300 hover:scale-105 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-cyan-300"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-white/10 hover:text-violet-300"
            >
              Services
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-white/10 hover:text-fuchsia-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
            >
              Contact
            </Link>

            {/* Mobile Auth */}
            <div className="mt-3 flex gap-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl border border-violet-400/30 bg-white/5 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-500/10"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-violet-500/20"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
