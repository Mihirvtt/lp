import { motion } from 'framer-motion'
import DynamicText from './DynamicText'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  subDescription?: string
  dynamicTexts?: string[]
  gifSrc: string
  isReversed: boolean
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  subDescription, 
  dynamicTexts, 
  gifSrc, 
  isReversed 
}: FeatureCardProps) {
  return (
    <motion.div 
      className={`bg-gray-700 p-8 rounded-lg border border-gray-600 flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-12`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 flex flex-col items-start">
        <div className="flex items-center mb-6">
          <div className="bg-primary-700 p-3 rounded-full">{icon}</div>
          <h3 className="text-2xl font-bold ml-4">{title}</h3>
        </div>
        <p className="text-xl mb-4 font-semibold text-primary-300">
          {description}
          {dynamicTexts && (
            <DynamicText texts={dynamicTexts} className="text-primary-400 ml-2" />
          )}
        </p>
        {subDescription && (
          <p className="text-gray-300 text-lg leading-relaxed">{subDescription}</p>
        )}
      </div>
      <div className="md:w-1/2">
        <motion.img 
          src={gifSrc} 
          alt={`${title} preview`} 
          className="w-full h-auto rounded-md shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}