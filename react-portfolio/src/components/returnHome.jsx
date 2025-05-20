import React from 'react'

function ReturnHome() {
  return (
    <div className="flex justify-center">
      <a
        href="/"
        className="inline-block bg-blue-300 text-[#FEFBF4] py-1 md:py-2 px-6 md:px-8 rounded-full mb-4 md:mb-6 hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200 text-sm md:text-base"
      >
        戻る
      </a>
    </div>
  )
}

export default ReturnHome
