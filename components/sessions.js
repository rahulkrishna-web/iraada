"use client"
import { title, subtitle } from "@/components/primitives";

export const Sessions = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>Sessions</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
        Sep 12-14, Pondicherry
Thu-Sat (then do Auroville on Sunday?)

        </h2>
      </div>
    </section>
  )
}
