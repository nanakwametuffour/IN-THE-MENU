import React from "react";
import { REVIEW } from "../constants/menu";
import xaviour from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import customer4 from "../assets/customer4.jpeg";
export default function Review() {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12 ">
      <div className="flex flex-col">
        <p className="mb-10 p-5 flex  text-3xl text-yellow-50 font-light leading-normal tracking-tighter lg:mx-auto lg:mt-40 lg:-text-[3.5rem]">
           {REVIEW.content}  
        </p>
         <div className="flex items-center justify-center gap-6">
             <img className="rounded-full border" src={xaviour} width={80} height={80} alt={REVIEW.name} />
              <div className="tracking-tighter">
                <h6 className="text-yellow-50">{REVIEW.name}</h6>
                 <p className="text-sm text-gray-400">{REVIEW.profession}</p>
              </div>
         </div>
      </div>
        <div className="mt-14 flex flex-wrap  items-center justify-center gap-3  md:flex-wrap p-3 ">
             {[customer1, customer2,customer3,].map((customer, index)=>(
                <img key={index} src={customer} alt="customer" className="h-[300px] w-[400px]   rounded-br-3xl rounded-tl-3xl object-cover mb-4" />
             ))}
        </div>
    </section>
  );
}
