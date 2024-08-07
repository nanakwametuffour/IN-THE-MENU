import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Header/>
      <Hero/>
       <Dishes/>
       <About/>
       <Mission/>
       <Expertise/>
       <Review/>
      <Contact/>
      <Footer/>
    </main>
  )
}
