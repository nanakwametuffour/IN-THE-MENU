import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import DishCard from './components/DishCard'
import Dishes from './components/Dishes'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
       <Dishes/>
    </div>
  )
}
