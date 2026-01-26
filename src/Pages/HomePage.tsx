// import React from 'react'
import Homegroup from '../Components/Homegroup'
import Homeproduct from '../Components/Homeproduct'
import Footer from '../Layout/Footer'
// import MobileNav from '../Layout/MobileNav'
import Navbar from '../Layout/Navbar'

const HomePage = () => {
    return (
        <div className='relative'>
        {/* <MobileNav/> */}
        <Navbar />
        <Homegroup/>
        <Homeproduct/>
        <div className='mt-6'>
        <Footer/>
        </div>
      </div>
  )
}

export default HomePage