"use client"
import { Button, Image } from "@nextui-org/react";

export const LeadVideo = () =>{
  return(
    <section className="w-full">
      <div className="icons-bar">
        <div>Icon 1</div>
        <div>Icon 2</div>
        <div>Icon 3</div>
      </div>
      <Image className="hidden md:block w-full" radius="none" width={1366} alt="Iraada" src="/banner-desktop.webp" />
      <Image className="md:hidden" radius="none" width={600} alt="Iraada" src="/banner-mobile.webp" />
    </section>
  )
}
