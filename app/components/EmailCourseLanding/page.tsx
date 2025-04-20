"use client";

import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function SaaSFounderLanding() {
  const [email, setEmail] = useState(" ");
  const handleSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
        setEmail(" ");
      } else {
        const errorData = await response.json();
        alert(
          "Subscription failed: " + (errorData.error || "Please try again.")
        );
      }
    } catch (error) {
      console.log(` ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          This blueprint has everything you need to become the founder your
          product deserves.
        </h1>

        <ul className="text-lg text-gray-700 mb-8 space-y-2 text-left list-disc list-inside">
          <li>Execute with more strategic clarity</li>
          <li>Lead your team with grounded confidence</li>
          <li>Build emotional intelligence that scales with you</li>
        </ul>

        <h2 className="text-2xl font-bold text-shadow-blue-800 text-gray-700 mb-6">
          Are you done second-guessing if you&apos;re building the “right
          thing”?
        </h2>

        <p className="text-base text-gray-700 mb-6">
          We’re <strong>Kiran</strong> and <strong>Sweta</strong> — ghostwriters
          who’ve worked with multiple SaaS companies to craft growth-driving
          content. After seeing countless founders burn out or stall because of
          misaligned messaging, we realized: the real bottleneck isn’t
          marketing. It’s clarity.
        </p>

        <p className="text-base text-gray-700 mb-8">
          So we created this free 5-day email course to help you think sharper,
          communicate better, and grow with conviction — not chaos.
        </p>

        <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-8">
          “This free email course gave me more clarity than $1,000 coaching
          programs I’ve taken.”
        </blockquote>

        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Send Me The Lessons</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Join 500+ SaaS founders getting lessons that challenge assumptions and
          unlock momentum.
        </p>
      </div>
    </div>
  );
}
