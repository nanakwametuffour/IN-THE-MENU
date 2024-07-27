import React from 'react'
import { CONTACT } from '../constants/menu'

export default function Contact() {
  return (
    <section className='container mx-auto py-14' id='contact'>
        <h2 className="text-white mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
        <div className="text-neutral-400">
            {CONTACT.map((details, index)=>(
            <p key={details.key} className='my-20 border-b-2 border-dotted border-neutral-700 pb-11 text-center text-2xl tracking-tighter lg:text-3xl p-3'>
                {details.value}
            </p>
            ))}
        </div>
    </section>
  )
}
