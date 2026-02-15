import React from 'react'
import { FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa6'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

// Dummy Reviews Data (English, 11 opinions)
const reviewsData = [
  {
    name: "Awais Ismail",
    text: "Best gym in town! Trainers are really supportive and the environment is fantastic.",
    stars: 5,
    color: "text-blue-500"
  },
  {
    name: "Khuram Sultan",
    text: "High quality equipment, only evenings get a bit crowded.",
    stars: 4,
    color: "text-red-400"
  },
  {
    name: "Ali Khan",
    text: "Clean gym with proper guidance for beginners.",
    stars: 5,
    color: "text-purple-500"
  },
  {
    name: "Humair Tariq",
    text: "Membership is slightly expensive but worth every penny.",
    stars: 4.5,
    color: "text-pink-500"
  },
  {
    name: "Omiii",
    text: "Motivating environment and female trainers available.",
    stars: 5,
    color: "text-gray-400"
  },
  {
    name: "Sara Noor",
    text: "Loved the personal training sessions. Very professional staff.",
    stars: 5,
    color: "text-yellow-400"
  },
  {
    name: "Zain Ali",
    text: "Spacious gym with modern equipment. Parking is convenient.",
    stars: 4,
    color: "text-green-400"
  },
  {
    name: "Fatima Sheikh",
    text: "Great for weight loss programs and cardio sessions.",
    stars: 4.5,
    color: "text-pink-300"
  },
  {
    name: "Omer Farooq",
    text: "Friendly atmosphere and excellent coaching staff.",
    stars: 5,
    color: "text-indigo-400"
  },
  {
    name: "Ayesha Malik",
    text: "Clean and hygienic, proper COVID safety measures.",
    stars: 4,
    color: "text-teal-400"
  },
  {
    name: "Haris Raza",
    text: "Amazing group classes and flexible timings.",
    stars: 4.5,
    color: "text-orange-400"
  }
]

// Review Card Component
const ReviewCard = ({ review }) => {
  const fullStars = Math.floor(review.stars)
  const hasHalfStar = review.stars % 1 !== 0

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <FaQuoteLeft className={`${review.color} text-3xl`} />
      <h3 className="text-xl font-semibold text-white mt-4">{review.name}</h3>

      <div className="flex items-center mt-2 mb-4 text-yellow-400 text-xl">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
      </div>

      <p className="text-gray-400 text-sm italic">{review.text}</p>
      <FaQuoteRight className={`${review.color} text-3xl self-end mt-4`} />
    </div>
  )
}

// Main Opinions Section
const YourOpinions = () => {
  return (
    <div id="opinions" className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Community Opinions
        </h2>
        <p className="text-gray-400 text-lg mt-2">What people think about us</p>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviewsData.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

  
    </div>
  )
}

export default YourOpinions
