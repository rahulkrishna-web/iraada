"use client"
import { title, subtitle } from "@/components/primitives";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export const Faq = () =>{
  return(
    <section id="faq" className="flex flex-col items-center justify-center gap-4 py-24 bg-[#F7FAF8]">
      <div className="inline-block max-w-lg text-center justify-center px-5">
        <h2 className='text-3xl font-bold text-center mb-12 font-seasons'>FAQ</h2>
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
      <AccordionItem key="4" aria-label="Accordion 4" title="When is the last date to register?">
      31st July
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="What is the age group for the delegates?">
      Age Group is 18-36 JITO Youth Wing members only.
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="Is there transportation arranged from Chennai to the Venue?
">
      Yes, Shuttles will be arranged from Chennai to the Resort. Information will be passed to the selected participants by the Hospitality team.
      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" title="Are meals and refreshments provided? Will there be pre sunset dinner?
">
      Yes, Jain meals will be provided.<br />
      12th - Lunch, Hi-tea, Dinner<br />
      13th - Breakfast, Lunch, Dinner, Hi-tea<br />
      14th -  Breakfast, Lunch<br />
			Sunset Dinner - Yes?
      </AccordionItem>
      <AccordionItem key="8" aria-label="Accordion 8" title="Is there any dresscode for the event?
">
      No, wear whatever is comfortable.
      </AccordionItem>
      <AccordionItem key="9" aria-label="Accordion 9" title="Whom shall I get in touch for any additional information?
">
      Registration team
      </AccordionItem>
      <AccordionItem key="10" aria-label="Accordion 10" title="What is the Refund System after registrations? Can I transfer my registration?
">
      No Refunds or transfer of tickets.
      </AccordionItem>
    </Accordion>
      </div>
    </section>
  )
}
