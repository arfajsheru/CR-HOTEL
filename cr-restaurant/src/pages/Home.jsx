import React, { useEffect } from 'react'
import Banner from '../component/Banner'
import Category from '../component/Category'
import OurPolicy from '../component/OurPolicy'
import Newsletter from '../component/Newsletter'
import BestSellar from '../component/BestSellar'


const Home = () => {
  
  useEffect(() => {
    window.scroll(0,0);
  },[])
  

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