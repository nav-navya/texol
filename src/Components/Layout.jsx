import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="p-4"> 
        <Outlet /> 
      </div>
    </div>
  )
}

export default Layout
