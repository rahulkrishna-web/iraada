"use client"
import { title, subtitle } from "@/components/primitives";

export const Approach = () =>{
  return(
    <section id="approach" className="flex flex-col items-center justify-center gap-4 py-40 md:py-40">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>Approach</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
        Pause. Reset. Play
        </h2>
      </div>
    </section>
  )
}
