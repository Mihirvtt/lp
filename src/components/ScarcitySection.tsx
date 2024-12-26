import { motion } from 'framer-motion'
import { Button } from "./ui/button"
import { Clock, Users } from 'lucide-react'

export default function ScarcitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited Time Offer</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary-400" />
              <p className="text-xl">Offer ends in 48 hours</p>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary-400" />
              <p className="text-xl">Only 50 spots remaining</p>
            </div>
          </div>
          <p className="text-xl mb-8 text-gray-300">
            Join now to lock in our special launch pricing forever!
          </p>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
            Secure Your Spot Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}