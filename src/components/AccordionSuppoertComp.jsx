"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";

const faqs = [
  {
    id: "answer-1",
    question: "What types of hosting plans do you offer?",
    answer:
      "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans."
  },
  {
    id: "answer-2",
    question: "What is the uptime guarantee for your hosting services?",
    answer: "We guarantee an uptime of 99.9% for all our hosting services."
  },
  {
    id: "answer-3",
    question: "Do you provide website migration assistance?",
    answer: "Yes, we offer free website migration assistance for new customers."
  },
  {
    id: "answer-4",
    question: "What security measures do you have in place?",
    answer:
      "We employ advanced security measures including firewalls, DDoS protection, and regular security audits."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="">
      <section className="w-full md:max-w-3xl mx-auto px-0 py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-1 md:py-5">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-purple-700 "
            style={{ fontFamily: "DM Sans" }}
          >
            Frequently asked questions
          </h2>
          <p
            className="text-lg font-medium text-slate-700/70"
            style={{ fontFamily: "Noto Sans" }}
          >
            Questions related to web hosting
          </p>
        </div>
        <div className="w-full px-2 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl  bg-white">
            {faqs.map((item, index) =>
              <Accordion
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggle(index)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
