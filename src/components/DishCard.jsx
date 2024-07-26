import React from 'react'

export default function DishCard({project}) {
  return (
    <div className='p-1'>
    <img className='rounded-3xl p-2' src={project.image} alt={project.title} />
        <div className="p-4">
            <h4 className='mb-2 text-2xl font-semibold tracking-tighter text-yellow-600'>
                {project.title}
            </h4>
             <p className="text-small text-white">
                {project.description}
             </p>
        </div>
    </div>
  )
}
