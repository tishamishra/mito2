'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is Mitolyn suitable for?",
      answer: "Mitolyn is designed for adults who want to naturally boost energy, support metabolism, and maintain overall wellness. Mitolyn's plant-based formulation makes it suitable for most adults seeking metabolic support. Mitolyn should not be used by individuals who are pregnant, nursing, under medical supervision, or taking medication without first consulting a healthcare provider."
    },
    {
      question: "Does Mitolyn cause any side effects?",
      answer: "Mitolyn is formulated with clean, plant-derived ingredients and is generally well tolerated. Mitolyn's natural composition minimizes the risk of adverse reactions. Some users may notice mild digestive adjustments or temporary energy shifts as the body adapts. Mitolyn recommends discontinuing use and consulting your physician if any discomfort occurs."
    },
    {
      question: "How long does it take to see results with Mitolyn?",
      answer: "Mitolyn's effects vary depending on the individual, but many users begin noticing improved energy, mood, and focus within the first few weeks. Mitolyn works best when used consistently while maintaining a balanced diet and healthy lifestyle. Mitolyn's cumulative benefits become more pronounced with continued use over time."
    },
    {
      question: "Can Mitolyn be used long-term?",
      answer: "Mitolyn's stimulant-free, botanical formulation is crafted for safe, long-term daily use. Mitolyn's natural ingredients support sustainable metabolic health without dependency concerns. Mitolyn recommends checking in with your healthcare professional for personalized advice on extended use."
    },
    {
      question: "Is there a Mitolyn special offer available?",
      answer: "Mitolyn can be purchased at special discounted rates directly from the official website for a limited time. Mitolyn offers bundle pricing and promotional savings while supplies last. Mitolyn's current pricing represents significant value for this best-selling metabolic support formula."
    },
    {
      question: "Where can I buy Mitolyn safely?",
      answer: "Mitolyn is available directly from the official Mitolyn website or verified partners to ensure authenticity and access exclusive deals. Mitolyn's official channels guarantee genuine products, bundle savings, and fast, secure shipping. Mitolyn recommends purchasing only from authorized sources to ensure product quality and customer support."
    }
  ];

  return (
    <>
      <section className="header3 cid-uwypPCiL9D py-10 text-center" id="mitolyn-faq" style={{ background: '#ffffff' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Frequently Asked Questions</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="content17 cid-uwypPCiL9D py-12" id="content17-faq" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-md-10">
              <div id="bootstrap-accordion_36" className="panel-group accordionStyles accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card mb-3 rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="card-header bg-white">
                      <button
                        type="button"
                        className="panel-title w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <h6 className="font-bold text-lg md:text-xl" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{faq.question}</strong>
                        </h6>
                        <span className="text-gray-600 text-2xl font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="panel-collapse">
                        <div className="panel-body p-5 bg-white border-t border-gray-100">
                          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

