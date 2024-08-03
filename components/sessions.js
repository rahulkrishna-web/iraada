"use client"
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, Image } from "@nextui-org/react";

export const Sessions = () =>{
  return(
    <section className="flex">
      <Image className="hidden md:block" radius="none" fill alt="Iraada" src="/pondi-desktop.gif" />
      <Image className="md:hidden" radius="none" fill alt="Iraada" src="/pondi-mobile.gif" />
    </section>
  )
}
