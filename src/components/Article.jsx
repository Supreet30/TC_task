import React from 'react';

function Article() {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-16">
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 border-2 border-[#9dc9ab] rounded-2xl bg-white px-6 py-8 md:px-10 md:py-12 shadow-sm z-20 lg:relative lg:-mr-[15%]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">Publish Your Articles and Reach a Vast Audience</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">If you're looking for quality article writing service providers, TransCurators is the one. Our article writing services in India offer precisely made content that amplifies your brand story, inspires your audience, and fosters meaningful connections.</p>
      </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
          <img src="https://www.transcurators.com/_next/image?url=https%3A%2F%2Ftranscuratorspublic.blob.core.windows.net%2Fpublic-folder%2Fnotebook.jpg&w=1080&q=75" alt="Writer working" className="rounded-3xl w-full max-w-md md:max-w-lg h-[320px] md:h-[420px] object-cover shadow-lg" />
        </div>
      </div>
    </div>
  )
};

export default Article;