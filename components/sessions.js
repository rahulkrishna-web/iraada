"use client"
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export const Sessions = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40">
      <div className="inline-block max-w-lg text-center justify-center">
      <h2 className='text-4xl font-bold text-center mb-12'>Sessions</h2>
        <div>
          <Card className="bg-[#aad7e6]">
            <CardBody className="flex flex-col gap-2 text-center px-12">
              <div className="flex gap-10">
                <div className="text-left">
                <h2 className="text-xl font-bold">Sep 12-14</h2>
                <p>Thu-Sat</p>
                </div>
                <div>
                <h2 className="text-xl font-bold">Pondicherry</h2>
                </div>
              </div>
</CardBody>
        </Card>
        </div>
      </div>
    </section>
  )
}
