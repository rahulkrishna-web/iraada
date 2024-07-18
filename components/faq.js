"use client"
import { title, subtitle } from "@/components/primitives";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export const Faq = () =>{
  return(
    <section id="faq" className="flex flex-col items-center justify-center gap-4 py-40 md:py-40">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>FAQ</h1>
        <br />
        <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="What is the event about, and why is it called IRAADA?">
      Iraada means intention. This event is to help you pause your everyday life, reflect it with out workshops, Spots, and community with the right Iraada, Intention and to get back to your life and play, but with intentions.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="When and Where is the event taking place?">
      September 12-14, K resort, Pondicherry (Thu-Sat)
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="What is the registration procedure and how much is the fee?">
      Apply for allignment Fill & applicationDesigners at Iraada review your profile and check for alignment with our program. If accepted, you are offered a seat at the Iraada festival. you pay in 24 hours to reserve your seat. 
<br />
Delegate fee is Rs 20,000/-

      </AccordionItem>
    </Accordion>
      </div>
    </section>
  )
}
