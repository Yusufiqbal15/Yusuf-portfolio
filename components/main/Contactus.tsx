"use client";
import React, { useState } from "react";

const Contactus = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative z-20"
    >
      {/* If you have a background video or overlay, make sure it has pointer-events-none and z-0 */}
      {/* Example:
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video ... />
      </div>
      */}

      <div className="w-full max-w-xl bg-[#181028cc] rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-[#7042f861] z-20 relative">
        <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 text-center">
          Get in Touch
        </h1>
        {submitted ? (
          <div className="text-center text-xl text-yellow-400 font-semibold py-12">
            Thank you for reaching out! <br /> I&apos;ll get back to you soon ❤️.
          </div>
        ) : (
          <>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Have a question, proposal, or just want to say hi? Fill out the form
              below and I&apos;ll get back to you soon!
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#030014] border border-[#7042f861] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#030014] border border-[#7042f861] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#030014] border border-[#7042f861] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-semibold p-3 rounded-lg hover:from-yellow-500 hover:to-purple-700 transition duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contactus;
