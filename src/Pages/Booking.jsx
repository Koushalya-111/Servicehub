import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  Phone,
  ArrowLeft,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    address: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed left-0 top-20 -z-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Back */}
        <Link
          to="/services"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
        >
          <ArrowLeft size={17} />
          Back to Services
        </Link>

        {!booked ? (
          <>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                <Sparkles size={16} />
                Easy & Quick Booking
              </div>

              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Book Your
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-slate-400">
                Fill in your details and choose a convenient date and time.
              </p>
            </motion.div>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <form onSubmit={handleSubmit}>
                {/* Name + Phone */}
                <div className="grid gap-5 md:grid-cols-2 text-lg">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-xl font-medium text-slate-300">
                      Your Name
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <User className="text-violet-400" size={19} />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-xl font-medium text-slate-300">
                      Phone Number
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <Phone className="text-cyan-400" size={19} />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-xl font-medium text-slate-300">
                      Select Date
                    </label>

                    <div className="flex items-center gap-3 text-lg  rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <CalendarDays className="text-fuchsia-400" size={19} />

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent text-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="mb-2 block text-lg font-medium text-slate-300">
                      Select Time
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <Clock className="text-cyan-400" size={19} />

                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full text-lg bg-slate-900 text-white outline-none"
                      >
                        <option value="">Choose time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mt-5">
                  <label className="mb-2 block text-xl font-medium text-slate-300">
                    Service Address
                  </label>

                  <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <MapPin
                      className="mt-1 shrink-0  text-emerald-400"
                      size={19}
                    />

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      required
                      rows="4"
                      className="w-full resize-none text-lg bg-transparent text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 text-2xl to-cyan-400 px-6 py-4 font-bold shadow-xl shadow-violet-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.01]"
                >
                  Confirm Booking
                  <CheckCircle size={19} />
                </button>
              </form>
            </motion.div>
          </>
        ) : (
          /* Success */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-2xl rounded-3xl border border-emerald-400/20 bg-white/[0.04] p-10 text-center shadow-2xl backdrop-blur-xl"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10">
              <CheckCircle size={48} className="text-emerald-400" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold">
              Booking Confirmed!
            </h2>

            <p className="mt-4 text-slate-400">
              Thank you,{" "}
              <span className="font-semibold text-white">{formData.name}</span>.
              Your service booking request has been submitted successfully.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-sm text-slate-400">Booking Details</p>

              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="text-slate-500">Date:</span> {formData.date}
                </p>

                <p>
                  <span className="text-slate-500">Time:</span> {formData.time}
                </p>

                <p>
                  <span className="text-slate-500">Address:</span>{" "}
                  {formData.address}
                </p>
              </div>
            </div>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 px-6 py-3 font-semibold transition hover:scale-105"
            >
              Explore More Services
              <ArrowLeft size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Booking;
