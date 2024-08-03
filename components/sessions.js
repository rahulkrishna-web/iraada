"use client"
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, Image } from "@nextui-org/react";

export const Sessions = () =>{
  return(
    <section className="">
      <Image className="w-screen hidden md:block" radius="none" fill alt="Iraada" src="/pondi-desktop.webp" />
      <Image className="w-screen md:hidden" radius="none" fill alt="Iraada" src="/pondi-mobile.webp" />
    </section>
  )
}
