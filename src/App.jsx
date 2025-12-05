import React from 'react';
import Navbar from './components/Navbar';//tbd
import Apply from './components/Apply';
import Contactbanner from './components/Contactbanner';
import Faq from './components/Faq';
import Ordernowbtn from './components/Ordernowbtn';
import Rangeofservices from './components/Rangeofservices';
import Speciality from './components/Speciality';
import Ourprocess from './components/Ourprocess';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Article from './components/Article';
import Container1 from './components/Container1';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Container1 />
      <Article />
      <Benefits />{/*changes*/}
      <Ordernowbtn />
      <Ourprocess />
      <Speciality />
      <Rangeofservices />{/*changes*/}
      <Contactbanner />
      <Faq />{/*changes*/}
      <Apply />
      <Footer />
      </div>
  )
}

export default App;