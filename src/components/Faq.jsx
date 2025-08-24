import React, { useState } from "react";

const faqsData = [
  {
    question: "Lightning-Fast Performance",
    answer: "Built with speed — minimal load times and optimized rendering.",
  },
  {
    question: "Fully Customizable Components",
    answer:
      "Easily adjust styles, structure, and behavior to match your project needs.",
  },
  {
    question: "Responsive by Default",
    answer:
      "Every component are responsive by default — no extra CSS required.",
  },
  {
    question: "Tailwind CSS Powered",
    answer:
      "Built using Tailwind utility classes — no extra CSS or frameworks required.",
  },
  {
    question: "Dark Mode Support",
    answer:
      "All components come ready with light and dark theme support out of the box.",
  },
];

const Faq = () => {
  // CORRECTED: useState hook is now inside the component function.
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center text-center text-slate-800 px-3 mt-10">
      <p className="text-base font-medium text-slate-600">FAQ</p>
      <h1 className="text-3xl md:text-4xl font-semibold mt-2">
        Frequently Asked Questions
      </h1>
      <p className="text-sm text-slate-500 mt-4 max-w-sm">
        Proactively answering FAQs boosts user confidence and cuts down on
        support tickets.
      </p>
      <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
        {faqsData.map((faq, index) => (
          <div key={index} className="flex flex-col items-start w-full">
            <div
              className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-pink-50 to-white border border-indigo-100 p-4 rounded"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-sm">{faq.question}</h2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
