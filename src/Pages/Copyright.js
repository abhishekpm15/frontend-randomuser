import React from 'react'
import Header from '../components/Header'
import MiddleComponent from '../components/MiddleComponent'

const Copyright = () => {
  return (
    <div>
    <Header />
    <div className="bg-gray-900 h-[250px]">
      <MiddleComponent
        heading="COPYRIGHT"
        para="All the fun legal stuff. Yay."
      />
    </div>
  </div>  )
}

export default Copyright