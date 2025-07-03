import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does ClimaTrip recommend destinations?',
    answer: 'We match your preferred weather conditions with real-time forecasts across various destinations.'
  },
  {
    question: 'Can I book accommodations directly?',
    answer: 'Currently, we redirect you to trusted partners for booking. Integration is in progress!'
  },
  {
    question: 'Is the weather data reliable?',
    answer: 'Yes! We use trusted weather APIs for real-time and forecasted data updates.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                onClick={() => toggle(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
