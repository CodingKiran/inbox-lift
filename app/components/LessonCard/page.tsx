"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Lesson {
  title: string;
  content: string;
}


const Lesson = [
  {
    title: "Day 1 - Your Startup Is Too Product-Centric",
    content:
      "You built a great tool, but no one's using it the way you imagined.\n\nDeep down, you focused on the features you could build, not the ones people begged for. Most SaaS founders unconsciously treat product development like art — but unless it's solving a felt, urgent pain, it's not worth building.\n\nToday's insight: Flip your thinking. Solve before you build.",
  },
  {
    title: "Day 2 - You're Talking to Peers, Not Customers",
    content:
      "Your homepage sounds impressive to other founders, but your ICP doesn't get it.\n\nYou're unknowingly writing for Twitter followers, not the buyer struggling with a workflow.\n\nToday's insight: Validate language with real users, not your co-founder circle.",
  },
  {
    title: "Day 3 - You're Outsourcing Trust",
    content:
      "You hired a great agency, but your prospects still don't trust you.\n\nWhy? Because you've never shown your thinking. Founders underestimate how powerful founder-led content is.\n\nToday's insight: People buy clarity and conviction. Write. Record. Share. Regularly.",
  },
  {
    title: "Day 4 - You're Measuring the Wrong Metrics",
    content:
      "You're obsessed with activation rates and MRR, but you've ignored the key metric: time-to-value.\n\nYour users struggle for days before finding any benefit. That's not a feature problem — it's a communication one.\n\nToday's insight: Reduce friction to first success.",
  },
  {
    title: "Day 5 - You're Scaling Before You Stick",
    content:
      "You're spending on ads, SEO, and content.\n\nBut your churn is still high. Deep down, the problem isn't reach — it's retention. Most SaaS products don't have a stickiness issue.\n\nThey have a forgettability issue.\n\nToday's insight: Make your product unforgettable — in value, not just in UI.",
  },
];



const LessonCard = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <div className="my-6">
      {Lesson.map((lesson, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow mb-4"
        >
          <div
            onClick={() => toggleExpand(i)}
            className="px-6 py-4 flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-lg font-medium text-gray-900">{lesson.title}</h3>
            <button className="text-gray-500 hover:text-blue-600 transition-colors">
              {expandedIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {expandedIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-left">
                    {lesson.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default LessonCard;
