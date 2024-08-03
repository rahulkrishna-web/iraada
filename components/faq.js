"use client"
import { title, subtitle } from "@/components/primitives";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export const Faq = () =>{
  return(
    <section id="faq" className="flex flex-col items-center justify-center gap-4 py-24 bg-[#F7FAF8] text-[#3c8572]">
      <div className="inline-block max-w-lg text-center justify-center px-5">
        <h2 className='text-3xl font-bold text-center mb-12 font-seasons '>FAQ</h2>
        <Accordion >
      <AccordionItem className="text-[#3c8572]" key="1" aria-label="Accordion 1" title="What is the event about, and why is it called IRAADA?">
        <p className="text-left">
        Iraada means intention. This three-day festival is designed to help you tap into the power of intention through a series of workshops and experiential learning sessions led by expert guides, facilitators, and mentors. Embracing a PAUSE. REST. PLAY approach, Iraada allows you to step away from the autopilot grind, engage in self-work, and return with renewed strength, clarity, and INTENTION.
      </p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="When and Where is the event taking place?">
      <p className="text-left">
      The festical will take place from September 12th to 14th, 2024 (Thursday to Saturday) at the K Resort in Pondicherry.
      </p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="What is the registration procedure and how much is the fee?">
      <p className="text-left">
      Step 1: Request for an invite.<br />
Step 2: Login, complete the application form, and submit it.<br />
Step 3: Our team will review your application and get in touch with you.<br />
Step 4: If accepted, you will be offered a seat at the Iraada festival. Payment of the delegate fee (Rs 15,999) must be made within 24 hours to reserve your seat.<br /><br />
Delegate fee is Rs 15,999/-

    </p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="When is the last date to register?">
      <p className="text-left">
      We encourage you to apply early. The venue has a range of facilities and accommodation that comes complimentary with the event pass; the earlier you confirm your seat, the better chance you have at an enhanced accommodation setting (across pool villas, cottages, deluxe and standard rooms) that is complimentary. <br /><br />

Curation is ongoing, and seats are being confirmed in parallel. Incase you have been wait-listed, you should hear from us by 10th August. ☺️

      </p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="What is the age group for the delegates?">
      <p className="text-left">
      The event is open to JITO Youth Wing members only, aged 18-36.
      </p>
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="Is there transportation arranged from Chennai to the Venue?
">
  <p className="text-left">
  Yes, Shuttles will be arranged from Chennai to the resort. Information will be passed to the connfirmed participants by the Hospitality team.
      </p>
      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" title="Are meals and refreshments provided? Will there be pre sunset dinner?
">
  <p className="text-left">
  Yes, Jain meals will be provided. The meal schedule is as follows:<br />
September 12th: Lunch, Hi-tea, Dinner<br />
September 13th: Breakfast, Lunch, Hi-tea, Dinner<br />
September 14th: Breakfast, Lunch<br />
Sunset Dinner will be arranged on request. This information will be collected from the confirmed participants.
      </p>
      </AccordionItem>
      <AccordionItem key="8" aria-label="Accordion 8" title="Is there any dresscode for the event?
"><p className="text-left">
      We encourage navigators (you) to come in clothing that allows you to be your best self. You will be engaging in a variety of activities across the three-day festival, details of which will be shared with the confirmed attendees closer to the event, so you may plan your wardrobe accordingly.
      </p>
      </AccordionItem>
      <AccordionItem key="9" aria-label="Accordion 9" title="Whom shall I get in touch for any additional information?
"><p className="text-left">
      The registration team will get in touch with you within 24hours after you request for an invite. <br />
Email your queries to Baatein@iraada.co.in<br />
For quick response to your queries you can get in touch with :<br />
Kavita Sancheti - +91 95435 11165<br />
Subham Bhandari - +91 80562 87147<br />
Tanvi Singhi - +91 96770 36712

      </p>
      </AccordionItem>
      <AccordionItem key="10" aria-label="Accordion 10" title="What is the Refund System after registrations? Can I transfer my registration?
"><p className="text-left">
      Cancellation: Cancellations are possible up to 40 days prior to the event date. After this period, no refunds will be offered.<br />
Ticket Transfer: Transfer of tickets will not be possible, as this is a highly curated event. The ticket is offered to the person who has applied and is not a purchasable ticket.

      </p>
      </AccordionItem>
    </Accordion>
      </div>
    </section>
  )
}
