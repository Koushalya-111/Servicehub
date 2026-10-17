import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-xl sm:p-9"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-violet-500/30">
            <Sparkles size={30} />
          </div>

          <h1 className="mt-5 text-3xl font-extrabold">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to your ServiceHub account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-2xl font-medium text-slate-300">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4  top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl text-sm border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-2xl font-medium text-slate-300">
              Password
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full text-sm rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-violet-300 transition hover:text-cyan-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full text-3xl items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-6 py-3.5 font-semibold shadow-xl shadow-violet-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-7 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-violet-300 transition hover:text-cyan-300"
          >
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
