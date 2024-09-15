import { ArrowLeft, ArrowRight } from 'lucide-react'
import razvan from '../assets/razvan.png'

export default function CardMany() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl">
      <div className="space-y-6">
        <p className="text-xl font-semibold leading-relaxed">
          Titan Leap provided us with the talented engineers necessary to achieve our ambitious objectives. Their account manager was proactive in addressing any concerns, ensuring our expectations were consistently met.
        </p>
        <div className="flex items-center space-x-4">
          <img
            src={razvan}
            alt="Profile picture"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Sir Manny</h3>
            <p className="text-sm text-gray-600">CEO, Futurelabs</p>
          </div>
        </div>
        <div className="pt4">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">Futurelabs</p>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-6">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <ArrowRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
