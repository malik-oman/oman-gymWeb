import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Wcu from './components/Wcu'
import Mt from './components/Mt'
import Pricing from './components/Pricing'
import YourOpinions from './components/YourOpinions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Wcu/>
    <Mt/>
    <Pricing/>
    <YourOpinions/>
    <Contact/>
    <Footer/>

    <Toaster position='top-center' reverseOrder={false}/>
    </>
  )
}

export default App