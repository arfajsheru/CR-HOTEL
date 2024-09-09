import React from 'react'
import Banner from '../component/Banner'
import Category from '../component/Category'
import OurPolicy from '../component/OurPolicy'
import Newsletter from '../component/Newsletter'
import BestSellar from '../component/BestSellar'

const Home = () => {
  return (
    <div>
     <Banner />
     <Category />
     <BestSellar />
     <OurPolicy />
     {/* <Newsletter /> */}
    </div>
  )
}

export default Home