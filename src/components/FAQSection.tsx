import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import React, { forwardRef } from 'react'

const faqs = [
  {
    question: "What makes Pilot Seat different from other eCommerce analytics tools?",
    answer: "Pilot Seat offers a comprehensive, all-in-one solution that combines real-time data analysis, predictive insights, and automated reporting. Unlike other tools, we provide a holistic view of your entire eCommerce operation, from marketing performance to inventory management, all in one intuitive platform."
  },
  {
    question: "How does Pilot Seat integrate with my existing eCommerce platforms?",
    answer: "Pilot Seat seamlessly integrates with all major eCommerce platforms and marketplaces. Our robust API connections ensure that your data is synced in real-time, providing you with the most up-to-date insights without any manual input required."
  },
  {
    question: "Is Pilot Seat suitable for small businesses or only for large enterprises?",
    answer: "Pilot Seat is designed to cater to eCommerce businesses of all sizes. Whether you're a small startup or a large enterprise, our scalable solution can be tailored to meet your specific needs and grow with your business."
  },
  {
    question: "How secure is my data with Pilot Seat?",
    answer: "We take data security very seriously. Pilot Seat employs bank-level encryption and adheres to the highest industry standards for data protection. Your sensitive business information is always kept confidential and secure."
  },
  {
    question: "Can Pilot Seat help me make better business decisions?",
    answer: "Pilot Seat's advanced analytics and AI-powered insights help you identify trends, spot opportunities, and make data-driven decisions. Our intuitive dashboards and customizable reports provide actionable insights that can significantly impact your bottom line."
  },
]

const DisclosureButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => (
    <Disclosure.Button ref={ref} {...props}>
      {children}
    </Disclosure.Button>
  )
)

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="mt-4">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white bg-purple-800 rounded-lg hover:bg-purple-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-purple-300`}
                    />
                  </DisclosureButton>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}