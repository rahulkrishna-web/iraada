"use client"
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

export const Approach = () =>{
  return(
    <section id="approach" className="">
      <Image className="w-screen hidden md:block" radius="none" fill alt="Iraada" src="/prp-desktop.webp" />
      <Image className="w-screen md:hidden" radius="none" fill alt="Iraada" src="/prp-mobile.webp" />
    </section>
  )
}
