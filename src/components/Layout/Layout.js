import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation'

export default function Layout ({ children }) {
  return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
  )
}
