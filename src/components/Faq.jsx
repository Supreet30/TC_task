import React from 'react';
import faqs from '../data/faqs.json';

function Faqs() {
  return (<div className='justify-center items-center bg-white'>
    <div className='w-full flex flex-col justify-center items-center px-6 2xl:px-[450px]'>
    <h3 className='mt-10 mb-12 text-4xl'>Frequently Asked <span style={{ color: '#326B3F' }}>Questions</span></h3>
    <div className="w-full flex flex-wrap -mx-4">
      {faqs.map(faq => (
        <div key={faq.id} className="w-full md:w-1/2 px-4 mb-4">
          <div tabIndex={0} className="collapse collapse-plus bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="collapse-title font-semibold">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-[#326B3F]">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}

export default Faqs;
