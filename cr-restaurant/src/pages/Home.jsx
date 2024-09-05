import React from 'react'
import Banner from '../component/Banner'
import Category from '../component/Category'
import OurPolicy from '../component/OurPolicy'
import Newsletter from '../component/Newsletter'

const Home = () => {
  return (
    <div>
     <Banner />
     <Category />
     <OurPolicy />
     {/* <Newsletter /> */}
    </div>
  )
}

export default Home