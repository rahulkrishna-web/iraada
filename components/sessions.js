"use client"
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Card, CardBody, Image } from "@nextui-org/react";

export const Sessions = () =>{
  return(
    <section className="">
      <Image className="w-screen hidden md:block" radius="none" fill alt="Iraada" src="/pondi-desktop.webp" />
      <Image className="w-screen md:hidden" radius="none" fill alt="Iraada" src="/pondi-mobile.webp" />
      <div className="md:flex md:justify-end	gap-2 px-2 md:px-12 py-12 text-center">
        <p className="p-2 bg-[#f7faf8] text-[#216a5a]">Accommodation will be allotted on a sharing basis in cottages and rooms,<br /> spread across the 30 acres of expanse at the beautiful <Link href='https://www.kresort.in/'>K Resort</Link> near<br /> Pondicherry.It comes with jain food on all three days, and is made available on<br /> a complimentary basis for navigators/ attendees at iraada.</p>
        <div className="flex justify-center items-center">
          <div>
          <Link className="p-2 bg-[#216a5a] text-[#fef5b6] rounded block" href="#">View Property</Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}
