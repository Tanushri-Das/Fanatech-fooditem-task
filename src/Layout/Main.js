import React from 'react'
import Header from '../Page/Shared/Header/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Outlet/>
        
    </div>
  )
}

export default Main