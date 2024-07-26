import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Dishes from './components/Dishes'
import About from './components/About'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
       <Dishes/>
       <About/>
    </div>
  )
}
