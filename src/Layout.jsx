import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout