import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdArrowForward,
  MdMovie,
  MdEmail,
} from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";

const Contact = () => {
  const faqs = [
    {
      question: "How long does it take to receive a reply?",
      answer:
        "We usually respond within one business day. During weekends or holidays, replies may take a little longer.",
    },
    {
      question: "Can I report incorrect movie information?",
      answer:
        "Absolutely. If you notice incorrect details about a movie, TV show or person, send us the information and we'll review it.",
    },
    {
      question: "Can I suggest new features?",
      answer:
        "Yes. We love hearing ideas from our community. Your suggestions help us improve CineVerse and build a better experience.",
    },
    {
      question: "Is CineVerse free to use?",
      answer:
        "Yes. CineVerse is completely free and designed to help movie lovers discover films, television shows and talented creators from around the world.",
    },
  ];

  const navigate = useNavigate();
  const formRef = useRef(null);

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
  return (
    <div className="min-h-screen bg-[#222222]">
      <section className="relative overflow-hidden px-4 md:px-10 pt-7 pb-15">
        <div className="absolute left-1/2 top-30 -translate-x-1/2 h-[850px] w-[850px] rounded-full bg-[#C1121F]/8 blur-[170px] pointer-events-none" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#C1121F]/5 blur-[140px] pointer-events-none" />

        <MdEmail className="hidden lg:block absolute top-36 left-24 text-white/5 text-8xl -rotate-12 pointer-events-none" />

        <IoChatbubbleEllipses className="hidden lg:block absolute top-48 right-28 text-white/5 text-7xl rotate-12 pointer-events-none" />

        <FaStar className="hidden lg:block absolute bottom-28 left-40 text-white/5 text-6xl rotate-12 pointer-events-none" />

        <MdMovie className="hidden lg:block absolute bottom-28 right-40 text-white/5 text-7xl -rotate-12 pointer-events-none" />

        <button
          onClick={() => navigate("/")}
          className="group relative z-20 inline-flex items-center gap-1 text-zinc-400 transition-colors duration-300 hover:text-white cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <MdKeyboardArrowLeft size={20} />
          </span>

          <span className="text-base font-medium">Back</span>
        </button>

        <div className="relative z-10 mx-auto mt-6 md:mt-10 flex min-h-[60vh] md:min-h-[72vh] max-w-4xl flex-col items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Get In Touch
          </p>

          <h1 className="mt-4 md:mt-5 text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-white lg:text-6xl">
            Let's Start
            <br />
            The Conversation.
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-7 md:leading-9 text-zinc-300">
            Whether you have a question, feedback or simply want to say hello,
            we'd love to hear from you. Great conversations often begin with a
            shared love for great stories.
          </p>

          <button
            onClick={scrollToForm}
            className="group mt-8 md:mt-10 inline-flex items-center gap-2 rounded-xl bg-[#C1121F] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#a20f1a] hover:scale-105 hover:shadow-xl hover:shadow-[#C1121F]/30 active:scale-95 cursor-pointer"
          >
            Send a Message
            <MdArrowForward
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#222222]" />
      </section>
      <section ref={formRef} className="relative px-4 md:px-10 py-10 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-20 bg-[#C1121F]" />

              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
                Get In Touch
              </p>
            </div>

            <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-[1.15] text-white">
              We'd Love
              <br />
              To Hear From You.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-300">
              Whether you have feedback, questions or simply want to say hello,
              our inbox is always open. Every message helps us improve CineVerse
              and make discovering great stories even better.
            </p>
            <div className="mt-12 h-px w-full bg-zinc-800" />
            <div className="mt-15 space-y-2">
              <div className="group flex min-h-24 items-start gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-900/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MdEmail size={26} className="text-[#C1121F]" />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:support@cineverse.com"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    support@cineverse.com
                  </a>
                </div>
              </div>

              <div className="group flex min-h-24 items-start gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-900/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <IoChatbubbleEllipses size={26} className="text-[#C1121F]" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Response Time
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    We usually respond within one business day.
                  </p>
                </div>
              </div>

              <div className="group flex min-h-24 items-start gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-900/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MdMovie size={26} className="text-[#C1121F]" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    CineVerse
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Built for movie lovers around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#C1121F]/5 blur-3xl" />

            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-9 transition-all duration-300 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-black/20">
              <h3 className="text-xl md:text-3xl font-semibold text-white">
                Send Us A Message
              </h3>

              <p className="mt-3 text-zinc-400">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Name <span className="text-[#C1121F]">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-zinc-700 bg-[#222222] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-[#C1121F] focus:bg-zinc-900 focus:ring-2 focus:ring-[#C1121F]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Email <span className="text-[#C1121F]">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-zinc-700 bg-[#222222] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-[#C1121F] focus:bg-zinc-900 focus:ring-2 focus:ring-[#C1121F]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Subject <span className="text-[#C1121F]">*</span>
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full rounded-xl border border-zinc-700 bg-[#222222] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-[#C1121F] focus:bg-zinc-900 focus:ring-2 focus:ring-[#C1121F]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Message <span className="text-[#C1121F]">*</span>
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-zinc-700 bg-[#222222] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-[#C1121F] focus:bg-zinc-900 focus:ring-2 focus:ring-[#C1121F]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C1121F] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#a20f1a] hover:shadow-xl hover:shadow-[#C1121F]/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}

                  {!loading && (
                    <MdArrowForward
                      size={20}
                      className="transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
                    />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 md:px-10 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#C1121F]" />

              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
                Frequently Asked Questions
              </p>
            </div>

            <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-[1.15] text-white">
              Answers Before
              <br />
              You Even Ask.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-zinc-300">
              Here are some of the questions we receive most often. If you still
              need help, we're always happy to hear from you.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border bg-zinc-900/60 transition-all duration-300 hover:bg-zinc-900 ${
                  openFAQ === index
                    ? "border-[#C1121F]/40"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#C1121F]/10 text-[#C1121F] transition-transform duration-300 ${
                      openFAQ === index ? "rotate-45" : ""
                    }`}
                  >
                    <FiPlus size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden px-4 md:px-10 py-15">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="h-[500px] w-[500px] rounded-full bg-[#C1121F]/8 blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#C1121F]" />

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
              Thank You
            </p>

            <div className="h-px w-20 bg-[#C1121F]" />
          </div>

          <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-[1.15] text-white">
            Every Great Story
            <br />
            Begins With A Conversation.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
            Whether you're sharing feedback, reporting an issue, or simply saying hello, every message helps us improve CineVerse and create an even better experience for movie lovers everywhere.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-zinc-700" />

            <span className="text-xs uppercase tracking-[0.45em] text-zinc-500">
              CINEVERSE
            </span>

            <div className="h-px w-16 bg-zinc-700" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
