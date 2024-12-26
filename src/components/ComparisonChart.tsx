import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

const comparisonData = [
  { feature: 'Data Dependency', spreadsheet: 'Human and mood dependent', pilotSeat: '24×7 uptime' },
  { feature: 'Error Proneness', spreadsheet: 'Prone to human errors', pilotSeat: 'No chance of error' },
  { feature: 'Time Efficiency', spreadsheet: 'Time consuming', pilotSeat: 'Rapid insights' },
  { feature: 'Real-time Updates', spreadsheet: 'Not live time', pilotSeat: 'Real-time data' },
  { feature: 'Automation', spreadsheet: 'Manual updates', pilotSeat: 'Fully automated' },
  { feature: 'Analytical Capabilities', spreadsheet: 'Limited analysis', pilotSeat: 'Advanced analytics' },
  { feature: 'Data Integration', spreadsheet: 'Data silos', pilotSeat: 'Unified data ecosystem' },
  { feature: 'Price', spreadsheet: 'Free but costs all of the above', pilotSeat: 'Nominal – scroll to know more' },
]

export default function ComparisonChart() {
  return (
    <section id="comparison" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Spreadsheets vs Pilot Seat</h2>
        <div className="overflow-x-auto">
          <motion.table 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <thead>
              <tr className="text-left">
                <th className="p-4 bg-gray-800">Feature</th>
                <th className="p-4 bg-gray-800">Spreadsheets</th>
                <th className="p-4 bg-gray-800">Pilot Seat</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <motion.tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <td className="p-4">{item.feature}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <X className="text-red-500 mr-2" />
                      <span>{item.spreadsheet}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-2" />
                      <span>{item.pilotSeat}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  )
}