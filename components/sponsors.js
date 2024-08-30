"use client"
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

export const Sponsors = () =>{
  return(
    <section id="approach" className="">
      <div>
        <h2 className="text-6xl text-center text-[#3d8672] text-bold uppercase">Thank you</h2>
        <p className="text-3xl text-center text-[#ea8463] uppercase">to our esteemed sponsors</p>
      </div>
      <div className="flex justify-center py-12">
        <h3 className="w-max text-3xl bg-[#3d8672] text-white p-3 text-center">PRESENTING SPONSOR</h3>
      </div>
      <div className="flex justify-center">
        <Image src="/refex.png" />
      </div>
      <div className="flex justify-center py-12">
        <h3 className="w-max text-3xl bg-[#3d8672] text-white p-3 uppercase">Powered by</h3>
      </div>
      <div className="flex justify-center">
        <Image src="/jineshwar.png" />
      </div>
      <div className="flex justify-center py-12">
        <h3 className="w-max text-xl bg-[#3d8672] text-white p-3 uppercase">gold SPONSORs</h3>
      </div>
      <div className="flex justify-center">
        <div>
            <Image src="/gs-1.png" />
        </div>
        <div>
            <Image src="/gs-2.png" />
        </div>
        <div>
            <Image src="/gs-3.png" />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <h3 className="w-max text-xl bg-[#3d8672] text-white p-3 uppercase">ASSOCIATE SPONSOR</h3>
      </div>
      <div className="flex justify-center">
        <div>
            <Image src="/mahavir.png" />
        </div>
      </div>
      <div className="flex justify-center">
        <div>
            <Image src="/ir-ap1.png" />
            <p className="uppercase text-center text-[#3d8672] text-bold">Creative partner</p>
        </div>
        <div>
            <Image src="/ir-ap2.png" />
            <p className="uppercase text-center text-[#3d8672] text-bold">LUXURY TRAVEL PARTNER</p>
        </div>
        <div>
            <Image src="/ir-ap3.png" />
            <p className="uppercase text-center text-[#3d8672] text-bold">VISUAL DESIGN</p>
        </div>
      </div>
    </section>
  )
}
