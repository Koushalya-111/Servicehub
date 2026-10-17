import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@servicehub.com",
      description: "We usually reply within 24 hours.",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Monday - Saturday, 9 AM - 6 PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Hubli, Karnataka",
      description: "India",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed left-0 top-40 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none fixed right-0 top-96 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Contact ServiceHub
            </div>

            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Get In
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Have a question, suggestion, or need help? Our team is here to
              help you with your ServiceHub experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className=" text-2xl grid gap-6 md:grid-cols-3">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-violet-400/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-2 font-semibold text-cyan-300">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Send Us A Message
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              We Would Love To
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Whether you are a customer looking for a service or a professional
              interested in joining ServiceHub, feel free to contact us.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h3 className="font-bold">Need Quick Help?</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Send us your message and our support team will get back to
                    you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-2xl font-medium text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full text-sm rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-2xl font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl text-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-2xl font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl text-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-2xl font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl text-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full text-2xl items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-6 py-3.5 font-semibold shadow-xl shadow-violet-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-400/10 p-8 text-center shadow-2xl sm:p-12"
        >
          <Sparkles className="mx-auto text-violet-300" size={30} />

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Let's Build Better Services Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Your feedback helps us improve ServiceHub and create a better
            experience for everyone.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
