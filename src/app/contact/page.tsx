'use client';

import {Vortex} from "../components/ui/vortex";

function ContactPage() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center justify-center w-full h-full px-4 md:px-10"
      >
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/20">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Have a question or want to work with us? Fill out the form below and we’ll get back to you.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </Vortex>
    </div>
  );
}

export default ContactPage;
