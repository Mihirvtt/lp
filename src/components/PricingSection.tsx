import { Check } from 'lucide-react'
import { Button } from "./ui/button"
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: "Starter",
    price: "₹7,999/month",
    features: [
      "Up to 1,000 orders/month",
      "Basic analytics dashboard",
      "Email support",
      "Data integration with 2 platforms"
    ]
  },
  {
    name: "Growth",
    price: "₹24,999/month",
    features: [
      "Up to 10,000 orders/month",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "Data integration with 5 platforms",
      "Custom dashboard creation"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited orders",
      "Full suite of analytics & AI insights",
      "24/7 dedicated support",
      "Unlimited platform integrations",
      "Custom feature development",
      "On-site training & setup"
    ]
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">Get Started</Button>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Early Bird Offer!</h3>
          <p className="text-xl mb-6">Sign up now and get 20% off for the first 3 months!</p>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white" onClick={() => alert('Early bird offer claimed!')}>
            Claim Offer
          </Button>
        </motion.div>
      </div>
    </section>
  )
}