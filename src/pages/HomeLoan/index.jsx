import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Homeloanform from 'components/Homeloanform'

const HomeLoan = () => {
  return (
    // home laona and personal laon have so much in common so i have made only one component with personalform 
    // that is used in both pages
    <div>
      <Navbar />
      <Homeloanform />
      <Footer />
    </div>
  )
}

export default HomeLoan
