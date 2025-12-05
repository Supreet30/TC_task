import React from 'react'

function Benefits() {
  return (
    <div className="bg-[#DEE9DE] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://www.transcurators.com/_next/image?url=https%3A%2F%2Ftranscuratorspublic.blob.core.windows.net%2Fpublic-folder%2Fwriting3.png&w=640&q=75"
            alt="Writer working"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Benefits Guaranteed from Our Expert Article Writers
          </h2>

          <p className="text-gray-700 mb-8 max-w-xl">
            Partner with TransCurators, the best article writing service providers, for several benefits which involve:
          </p>
          <ul className="space-y-4">

            {[
              "Our writers bring specialised knowledge to every piece, ensuring relevant and impactful content.",
              "We create articles that fascinate readers from start to finish, encouraging deeper connections with your audience.",
              "Articles are composed with SEO best practices, aiming for greater visibility and organic online reach.",
              "We prioritise deadlines, assuring your content is delivered timely without compromising quality.",
              "Detailed editing and proofreading methods to guarantee error-free, polished articles.",
              "Each article is approached exceptionally and corresponds to your unique goals and specifications."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 hover:translate-x-2 transition-all duration-200">
                <div className="badge badge-success badge-sm mt-1"></div>

                <p className="text-gray-800 text-sm leading-relaxed">
                  {item}
                </p>

              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Benefits
