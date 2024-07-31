"use client"
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export const Sessions = () =>{
  return(
    <section className="flex flex-col gap-4 pt-12 pb-48 md:pt-36 md:pb-96 bg-[url('/iraada-workshop2.png')] bg-cover">
      <div className="container mx-auto text-[#3c8572]">
        <div className="px-12 md:px-24">
        <h2 className='text-2xl md:text-5xl font-bold font-seasons'>Pondicherry</h2>
        <p className="text-xl font-bold">12-14 Sep, 2024</p>
        </div>
      
      </div>
    </section>
  )
}
