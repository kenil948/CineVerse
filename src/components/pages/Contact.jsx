import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdArrowForward,
  MdMovie,
  MdEmail,
  MdAccessTime,
  MdHandshake,
  MdReportProblem,
} from "react-icons/md";
import { IoChatbubbleEllipses, IoSparkles } from "react-icons/io5";
import { PiTelevisionFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef(null);

  const [openFAQ, setOpenFAQ] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!subject.trim()) {
      toast.error("Please enter a subject.");
      return false;
    }

    if (!message.trim()) {
      toast.error("Please write your message.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1200);
  };

  const faqs = [
    {
      question: "Where does CineVerse get its movie data?",
      answer:
        "CineVerse uses TMDB (The Movie Database) API to provide movie, television, cast, crew, and entertainment metadata.",
    },
    {
      question: "Can I watch movies directly on CineVerse?",
      answer:
        "No. CineVerse helps users discover movies, TV shows, actors, and trailers.",
    },
    {
      question: "Is CineVerse free to use?",
      answer: "Yes. CineVerse is completely free for everyone.",
    },
    {
      question: "How often is content updated?",
      answer: "Content is updated in real time through TMDB integration.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#18181b] text-white selection:bg-[#C1121F] selection:text-white">
      {/* Container Wrapper */}
      <div className="px-4 md:px-10 py-7 max-w-7xl mx-auto">
        {/* ================================================== */}
        {/* SECTION 1 — NAVIGATION (BACK BUTTON) */}
        {/* ================================================== */}
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate(location.state?.from || "/");
            }
          }}
          className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-6 cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <MdKeyboardArrowLeft size={20} />
          </span>
          <span className="text-base font-medium">Back</span>
        </button>

        {/* ================================================== */}
        {/* SECTION 2 — HERO */}
        {/* ================================================== */}
        <section className="relative py-8 md:py-16 overflow-hidden text-center">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[350px] md:h-[450px] bg-[#C1121F]/10 blur-[180px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C1121F]/15 border border-[#C1121F]/30 text-[#C1121F] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
              <IoSparkles size={16} />
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Let's Talk About Great Stories.
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Whether you have feedback, feature ideas, bug reports, partnership
              opportunities, or simply want to connect, we'd love to hear from
              you.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <button
                onClick={scrollToForm}
                className="group flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] text-white font-semibold text-base transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Send a Message</span>
                <MdArrowForward
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Additional Hero Chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-xs font-medium">
                Feedback
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-xs font-medium">
                Feature Requests
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-xs font-medium">
                Bug Reports
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-xs font-medium">
                Partnerships
              </span>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 3 — CONTACT INFORMATION */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <MdEmail size={24} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  support@cineverse.com
                </h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Reach us directly for questions and feedback.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <MdAccessTime size={24} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Response Time
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Within 24 Hours
                </h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  We aim to respond quickly to all inquiries.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <MdMovie size={24} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  CineVerse
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Built For Movie Lovers Worldwide
                </h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Helping users discover amazing stories every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 4 — CONTACT FORM */}
        {/* ================================================== */}
        <section ref={formRef} className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="max-w-3xl mx-auto rounded-3xl bg-[#27272a]/40 border border-white/5 p-6 sm:p-10 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">
              <div className="h-px w-6 bg-[#C1121F]" />
              <span>CONTACT FORM</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Send Us A Message
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base">
              We'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                    Full Name <span className="text-[#C1121F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#18181b] border border-white/10 rounded-xl text-white focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] outline-none px-4 py-3 text-sm placeholder:text-zinc-600 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                    Email Address <span className="text-[#C1121F]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-[#18181b] border border-white/10 rounded-xl text-white focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] outline-none px-4 py-3 text-sm placeholder:text-zinc-600 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                  Subject <span className="text-[#C1121F]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full bg-[#18181b] border border-white/10 rounded-xl text-white focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] outline-none px-4 py-3 text-sm placeholder:text-zinc-600 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                  Message <span className="text-[#C1121F]">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-[#18181b] border border-white/10 rounded-xl text-white focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] outline-none px-4 py-3 text-sm placeholder:text-zinc-600 resize-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#C1121F] hover:bg-[#a50f1a] text-white font-semibold text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && (
                  <MdArrowForward
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 5 — FAQ */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
                <div className="h-px w-6 bg-[#C1121F]" />
                <span>FAQ</span>
                <div className="h-px w-6 bg-[#C1121F]" />
              </div>
              <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#C1121F]/5 border-[#C1121F]/40"
                        : "bg-[#27272a]/40 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer gap-4"
                    >
                      <span className="font-semibold text-white text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-[#C1121F]" : ""
                        }`}
                      >
                        <FiPlus size={18} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 border-t border-white/5"
                          : "grid-rows-[0fr] opacity-0 border-t border-transparent"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 py-4 text-zinc-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 6 — WHY REACH OUT? */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
              <div className="h-px w-6 bg-[#C1121F]" />
              <span>WHY REACH OUT?</span>
              <div className="h-px w-6 bg-[#C1121F]" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white">
              We're Always Listening.
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base">
              Every message helps us improve CineVerse and create a better
              experience for movie lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                <IoChatbubbleEllipses size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Feedback Matters</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Your suggestions help shape future CineVerse updates.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                <MdReportProblem size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Report Issues</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Found a bug or incorrect information? We'll investigate.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl bg-[#27272a]/40 border border-white/5 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                <MdHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">
                Partnership Opportunities
              </h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Interested in collaboration or integration opportunities? Let's
                connect.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 7 — FINAL CTA */}
        {/* ================================================== */}
        <section className="relative py-14 md:py-20 my-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#C1121F]/10 to-transparent border border-white/10 text-center px-6 sm:px-12">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#C1121F]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
              <IoSparkles size={16} />
              <span>START DISCOVERING</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Your Next Favorite Story Is Waiting.
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed">
              Explore thousands of movies, TV shows, actors, creators, and trailers
              from around the world.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/movies")}
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] text-white font-semibold text-base transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <MdMovie size={20} />
                <span>Explore Movies</span>
              </button>

              <button
                onClick={() => navigate("/tv-shows")}
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-base border border-zinc-700/60 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <PiTelevisionFill size={20} />
                <span>Browse TV Shows</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
