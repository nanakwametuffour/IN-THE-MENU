import React from 'react'
import { DISHES } from '../constants/menu'
import DishCard from './DishCard'

export default function Dishes() {
  return (
    <section className=' container mx-auto py-16' id='dishes'>
      <h1 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl text-white">
         Our Dishes
      </h1>
       <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {DISHES.map((project, index)=>(
              <DishCard key={index} project={project}/>
          ))}
       </div>
    </section>
  )
}
