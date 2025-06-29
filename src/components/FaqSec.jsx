import { useState } from "react";
import { Plus } from "lucide-react";
import faqs from "../constants/faqs";
import SecHeader from "./SecHeader";

export default function FaqSec() {
  const [expandedFAQ, setExpandedFAQ] = useState("enrollment");

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-white rounded-lg p-24">
      <div className="flex gap-32">
        <SecHeader
          title="Frequently Asked Questions"
          description="Still you have any questions? Contact our Team via support@skillbridge.com"
        />

        <div className="flex flex-col gap-7 w-[1200px]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className=" border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-12 py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-900 font-medium">
                  {faq.question}
                </span>
                <div className="w-12 h-12 flex items-center justify-center bg-orange95">
                  <Plus
                    className={`w-5 h-5  text-gray-600 transition-transform duration-200 ease-in-out ${
                      expandedFAQ === faq.id ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedFAQ === faq.id
                    ? "mt-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-12 pb-4">
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
