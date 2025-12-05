import React from 'react'

function Container1() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative w-full min-h-[90vh] bg-[#bfdcc6] rounded-[40px] overflow-hidden flex items-start">
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-24 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mt-50 mb-8">
            <span className="text-white">Article Writing</span> <br />
            <span className="text-white">Services </span>
            <span className="text-green-800">Hire Best</span> <br />
            <span className="text-green-800">Article Writers</span>
          </h1>
          <button className="group flex items-center gap-3 bg-white rounded-full px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition">
            Contact us today for a free consultation!
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2f5f3a] text-white group-hover:translate-x-1 transition">➜</span>
          </button>
          <p className="mt-10 text-lg text-gray-600 max-w-md">
            Hire Experienced Writers from Leading Article Writing Services
          </p>
        </div>
        <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px]">
          <div className="absolute inset-0 rounded-full bg-[#9ec9ab] opacity-20"></div>
          <div className="absolute inset-[8%] rounded-full bg-[#9ec9ab] opacity-25"></div>
          <div className="absolute inset-[16%] rounded-full bg-[#9ec9ab] opacity-30"></div>
          <div className="absolute inset-[24%] rounded-full bg-[#9ec9ab] opacity-40"></div>
          <div className="absolute inset-[32%] rounded-full bg-[#7fb58f] opacity-60"></div>
        </div>
      </div>
    </div>
  )
}

export default Container1
