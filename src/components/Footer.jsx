import React from 'react';

function Footer() {
  return (
    <footer className="bg-white px-4 py-10">
      <div className="bg-[#2f2f2f] text-white rounded-3xl px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <img src='https://www.transcurators.com/Trans_logo.svg' alt='tc-logo' className='w-60 aspect-w-16 aspect-h-9 invert' />
          </div>
          <div className="flex items-center gap-4">
            <a href='https://www.linkedin.com/company/transcurators/' target="_blank"><div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Font_Awesome_5_brands_linkedin-in.svg/1280px-Font_Awesome_5_brands_linkedin-in.svg.png" alt="linkedinlogo" className="w-6 h-6 object-contain invert" /></div></a>
            <a href='https://www.instagram.com/transcurators/?hl=en' target="_blank"><div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Instagram_simple_icon.svg" alt="iglogo" className="w-6 h-6 object-contain invert" /></div></a>
          </div>
        </div>
        <hr className="border-gray-400 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <div>
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='hover:text-green-800 transition-all duration-300'>→ About Us</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Contact Us</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Careers</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Blogs</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Case Study</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='hover:text-green-800 transition-all duration-300'>→ Content Writing Services</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Designing Services</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Video Animation Services</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ SOP Writing Services</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Translation & Localization</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Voiceover Services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='hover:text-green-800 transition-all duration-300'>→ Delhi</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Mumbai</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Bangalore</li>
              <li className='hover:text-green-800 transition-all duration-300'>→ Pune</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-snug mb-4">
              Engaging <span className="text-green-800">Content</span> <br />
              Crafted for <span className="text-green-800">Impact</span>
            </h3>

            <div className="text-gray-300 space-y-3 mt-4">
              <p className="flex items-center gap-2 hover:text-green-800 transition-all duration-300">✉ contact@transcurators.com</p>
              <p className="flex items-center gap-2 hover:text-green-800 transition-all duration-300">📞 +91 7678144482</p>
            </div>
            <div className="mt-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-black text-xs">
                <a href='https://www.mailmodo.com/resources/agencies/email-marketing/' target="_blank"><img src='https://res.cloudinary.com/mailmodo/image/upload/v1745311959/strapi/best_email_marketing_agency_dc5c4d4d16.png' className='h-20 w-20 hover:brightness-75' /></a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-400 my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p className="text-center md:text-left">
            Copyright ©2025 TransCurators - Quality Content Writing Company | Powered by TransCurators-Quality Content Writing Company
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-800 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-800 transition-all duration-300">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;