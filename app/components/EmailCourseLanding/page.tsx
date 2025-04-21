"use client";

import React from "react";
import EmailCaptureForm from "../EmailCaptureForm/page";

export default function SaaSFounderLanding() {
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

        <EmailCaptureForm />
      </div>
    </div>
  );
}
