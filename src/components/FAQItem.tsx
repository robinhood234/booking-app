"use client"
import React, {useState} from 'react'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);


  return (
     <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-inter text-lg">{question}</span>
        <span className="text-xl cursor-pointer">{open ? "−" : "+"}</span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>

  )
}

export default FAQItem