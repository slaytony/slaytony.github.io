import React from 'react'
import Navbar from './Navbar'

import '../css/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
            <Navbar />
            
            <div className='content'>
                { children }
            </div>
            
    </div>
  )
}
