"use client"
import { Button, Image } from "@nextui-org/react";

export const LeadVideo = () =>{
  return(
    <section className="w-full">
      <Image className="hidden md:block w-full" radius="none" width={1366} alt="Iraada" src="/banner-desktop.gif" />
      <Image className="md:hidden" radius="none" width={600} alt="Iraada" src="/banner-mobile.gif" />
    </section>
  )
}
