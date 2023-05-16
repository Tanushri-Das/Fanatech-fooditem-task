import React from 'react'
import Banner from '../Banner/Banner'
import Delivery from '../Delivery/Delivery'
import Header from '../../Shared/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='background'>
            <Header/>
            <Banner/>
        </div>
        
        {/* <Delivery/> */}
    </div>
  )
}

export default Home