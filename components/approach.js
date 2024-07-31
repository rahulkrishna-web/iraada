"use client"
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

export const Approach = () =>{
  return(
    <section id="approach" className="py-12 bg-[#F7FAF8]">
      <div className="flex items-center justify-around container mx-auto gap-4 px-12">
        <div>
        <Image radius="none" width={450} alt="Iraada" src="/iraada-section2.png" />
        </div>
        <div className="">
        <p className='text-3xl md:text-5xl font-bold text-[#3c8572]'>
        PAUSE<br /> RESET<br /> PLAY
        </p>
        </div>
      </div>
    </section>
  )
}
