import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className="inline-flex mb-3 gap-1 onscroll">
  <hr className="border-2 outline-none w-10 md:w-16 border-custom hr-animate " />
  <p className="text-gray-500 font-medium text-animate">
    {text1} <span className="text-gray-700 font-bold">{text2}</span>
  </p>
  <hr className="border-2 outline-none w-10  md:w-16 border-custom mt-6 sm:mt-8 lg:mt-9 hr-animate" />
</div>

  )
}

export default Title