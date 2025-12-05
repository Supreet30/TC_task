import React from 'react'

function Rangeofservices() {
  return (
    <div className="bg-[#D9E9DD] flex flex-col items-center py-16 px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">Explore Our Range of Creative Content Writing Services</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-semibold mb-4">Professional Writing Services</h2>
                <p className="text-gray-600 text-sm mb-6">Use our premium content writing services for job interviews and advertising.</p>
                <ul className="space-y-2 text-sm font-medium text-gray-800 list-disc pl-5">
                    <li>COVER LETTER</li>
                    <li>LETTER OF INTENT</li>
                    <li>RESUME</li>
                    <li>LINKEDIN PROFILE</li>
                </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-semibold mb-4">Academic Writing Services</h2>
                <p className="text-gray-600 text-sm mb-6">Make the most of our top-notch content writing services for all your academic needs.</p>
                <ul className="space-y-2 text-sm font-medium text-gray-800 list-disc pl-5">
                    <li>LETTER OF RECOMMENDATION</li>
                    <li>LETTER OF MOTIVATION</li>
                    <li>ESSAY</li>
                    <li>PERSONAL STATEMENT</li>
                    <li>STATEMENT OF PURPOSE</li>
                </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4">Business Writing Services</h2>
            <p className="text-gray-600 text-sm mb-6">Let your business ascend to new heights with our quality content writing services.</p>
            <ul className="space-y-2 text-sm font-medium text-gray-800 list-disc pl-5">
                <li>WEB CONTENT</li>
                <li>ARTICLE</li>
                <li>ADVERTISING COPY</li>
                <li>COMPANY PROFILE</li>
                <li>BLOG</li>
                <li>PRESS RELEASE</li>
                <li>CASE STUDY</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Rangeofservices;