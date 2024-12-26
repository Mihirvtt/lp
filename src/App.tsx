import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Button } from "./components/ui/button"
import { Menu, X, BarChart, IndianRupee, PieChart, MailCheck } from 'lucide-react'
import DynamicText from './components/DynamicText'
import FeatureCard from './components/FeatureCard'
import ComparisonChart from './components/ComparisonChart'
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import ScarcitySection from './components/ScarcitySection'
import Footer from './components/Footer'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowStickyCTA(latest > window.innerHeight)
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary-500">Pilot Seat</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-primary-400 transition-colors">Features</a>
            <a href="#comparison" className="hover:text-primary-400 transition-colors">Comparison</a>
            <a href="#faq" className="hover:text-primary-400 transition-colors">FAQ</a>
            <a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a>
          </nav>
          <Button className="hidden md:inline-flex" variant="outline" onClick={() => window.location.href='#demo'}>
            Book Demo
          </Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-gray-900 z-40 pt-20"
          >
            <nav className="flex flex-col items-center space-y-8 py-8">
              <a href="#features" className="text-2xl hover:text-primary-400 transition-colors">Features</a>
              <a href="#comparison" className="text-2xl hover:text-primary-400 transition-colors">Comparison</a>
              <a href="#faq" className="text-2xl hover:text-primary-400 transition-colors">FAQ</a>
              <a href="#pricing" className="text-2xl hover:text-primary-400 transition-colors">Pricing</a>
              <Button variant="outline" onClick={() => window.location.href='#demo'}>
                Book Demo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Clarity & Command over
                <br />
                your complete e-commerce
                <br />
                business
              </motion.h1>
              <motion.div
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="mb-4">
                  Pilot Seat gives you faster, smarter & better way to do eCommerce
                  Analysis & Operations{' '}
                  <DynamicText 
                    texts={['in real-time', 'in one place', 'at scale']} 
                    className="text-primary-300 font-semibold"
                  />
                </p>
              </motion.div>
              <motion.div 
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-500" onClick={() => window.location.href='#demo'}>
                  Book Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="space-y-16">
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-primary-400" />}
                title="Single source of truth"
                description="No more jumping multiple dashboards, Spreadsheets, Tabs"
                subDescription="Pilot seat gives you a central seat of your business with 90+ metrics across all e-commerce domains, you know what's happening, why and what to do about it."
                gifSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                isReversed={false}
              />
              <FeatureCard
                icon={<IndianRupee className="h-8 w-8 text-primary-400" />}
                title="Live P&L Statements"
                description="No more money chase"
                subDescription="Data has to work for you, not the other way around, get a complete visibility over each spend with real time - comprehensive P&L statements. identify exactly what's sucking in your margins & growth."
                gifSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                isReversed={true}
              />
              <FeatureCard
                icon={<PieChart className="h-8 w-8 text-primary-400" />}
                title="Simulator"
                description="Simulate scenarios"
                subDescription="Simulate your numbers and see how improving just one number completely changes your bottom lines."
                gifSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                isReversed={false}
              />
              <FeatureCard
                icon={<MailCheck className="h-8 w-8 text-primary-400" />}
                title="Automate Reports"
                description="From returns reconciliations to marketing performance, automate it all in your inbox."
                subDescription="Streamline your reporting process and get insights delivered directly to your inbox, saving time and ensuring you never miss critical information."
                gifSrc="https://images.unsplash.com/photo-1557568192-225f9cc9d189?auto=format&fit=crop&w=800&q=80"
                isReversed={true}
              />
            </div>
          </div>
        </section>

        <ComparisonChart />
        <FAQSection />
        <PricingSection />
        <ScarcitySection />

        <section id="demo" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Join thousands of eCommerce businesses using Pilot Seat to drive growth and efficiency.
              </p>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-500" onClick={() => alert('Demo booked!')}>
                Book Your Demo Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 py-4 z-50"
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              <p className="text-lg font-semibold">Ready to transform your eCommerce business?</p>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-500" onClick={() => window.location.href='#demo'}>
                Book Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}