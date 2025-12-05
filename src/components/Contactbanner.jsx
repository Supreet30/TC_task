import React from 'react';

function Contactbanner() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-15" style={{ backgroundColor: '#D9E9DD' }}>
  <h3 className="text-4xl mb-8 text-gray-900">Let’s Discuss Your Article Writing Needs – Get Started Now!</h3>
  <button
    className="px-8 py-4 rounded-lg font-medium transition-transform duration-200 transform hover:scale-105"
    style={{ backgroundColor: '#ffffffff' }}
  >
    Contact us
  </button>
</div>
  )
}

export default Contactbanner;
