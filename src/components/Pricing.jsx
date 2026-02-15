
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const Plans = [
    {
      name: "Beginner Plan",
      monthly: "Rs 2,500",
      yearly: "Rs 25,000",
      description: "Ideal for beginners starting their fitness journey",
      features: [
        "Full Gym Access",
        "Basic Equipment Use",
        "Locker Facility",
        "Free Fitness Assessment"
      ]
    },
    {
      name: "Premium Plan",
      monthly: "Rs 5,000",
      yearly: "Rs 52,000",
      description: "Perfect for regular members who want guided training",
      features: [
        "All Beginner Features",
        "Personal Trainer",
        "Group Fitness Classes",
        "Diet Consultation"
      ]
    },
    {
      name: "Pro Plan",
      monthly: "Rs 8,500",
      yearly: "Rs 90,000",
      description: "Designed for advanced athletes and professionals",
      features: [
        "All Premium Features",
        "Customized Workout Plan",
        "Advanced Training Programs",
        "Steam & Sauna Access",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 md:px-8 lg:px-16">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Pricing Plans
        </h2>
        <p className="text-lg text-gray-400 mt-3">
          Choose the plan that fits you best
        </p>
      </div>

      {/* TOGGLE BUTTON */}
      <div className="flex justify-center gap-4 mb-14">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300
            ${
              !isYearly
                ? "bg-pink-600 text-white"
                : "bg-purple-700 text-gray-300"
            }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setIsYearly(true)}
          className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300
            ${
              isYearly
                ? "bg-pink-600 text-white"
                : "bg-purple-700 text-gray-300"
            }`}
        >
          Yearly
        </button>
      </div>

      {/* PRICING CARDS */}
      <div className="flex flex-wrap justify-center gap-8">
        {Plans.map((plan, index) => (
          <div
            key={index}
            className={`relative max-w-sm w-full rounded-2xl p-8
              transition-all duration-500 transform
              ${
                index === 1
                  ? "bg-gray-700 border-4 border-pink-500 scale-105 shadow-2xl"
                  : "bg-gray-800 border-2 border-gray-700"
              }
              hover:scale-105 hover:border-purple-500`}
          >
            {/* PLAN NAME */}
            <h3 className="text-2xl font-bold mb-3 text-white">
              {plan.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mb-6">{plan.description}</p>

            {/* PRICE */}
            <p className="text-4xl font-extrabold text-white mb-6">
              {isYearly ? plan.yearly : plan.monthly}
              <span className="text-base font-medium text-gray-400 ml-1">
                / {isYearly ? "Year" : "Month"}
              </span>
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <FaCheckCircle className="text-pink-500 text-lg" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <button
              className="w-full py-3 rounded-full font-semibold text-lg text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:from-purple-600 hover:to-pink-500
              transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
