import React from 'react'
import { CUSINES } from '../constants/menu'

export default function Expertise() {
  return (
    <section id='expertise'>
    <h2 className='text-white my-8 text-3xl tracking-tighter lg:text-4xl text-center'>Our Expertise</h2>
     <div className="container mx-auto px-4">
        {CUSINES.map((cuisine, index)=>(
           <div key={index} className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2">
              <div className="flex-shrink-0 pr-8 text-2xl text-yellow-50">{cuisine.number}</div>
               <div className="w-1/3 flex-shrink-0">
                  <img className='h-auto rounded-3xl' src={cuisine.image} alt={cuisine.title} />
               </div>
                <div className="pl-8">
                    <h3 className='text-yellow-500 uppercase tracking-tighter'>

                    {cuisine.title}
                    </h3>
                    <p className='mt-4 text-lg tracking-tighter text-yellow-50'>
                        {cuisine.description}
                    </p>
                </div>
           </div> 
        ))}
     </div>
    </section>
  )
}
