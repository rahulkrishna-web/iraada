"use client"
import { Image } from "@nextui-org/react";

export const Speakers = () =>{
  return(
    <section className="w-full bg-[#fef5b6]">
        <div className="flex justify-center p-3 bg-[#fec718]">
            <h2 className="text-xl md:text-4xl text-bold text-white font-[800]">SPEAKERS</h2>
        </div>
      <div className="flex justify-center py-12 flex-wrap md:w-2/3 md:m-auto">
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp1.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">Samdish Dalal</h3>
            <p className="text-sm text-[#f08a15]">Professor<br />
            SP Jain School of Management </p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp2.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">DR. VIMALA SESHADRI</h3>
            <p className="text-sm text-[#f08a15]">NLP Facilitator</p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp3.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">Shikha S.</h3>
            <p className="text-sm text-[#f08a15]">Mindfulness Coach</p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp4.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">Shwetha Sivaraman</h3>
            <p className="text-sm text-[#f08a15]">Self Mastery Coach &
            Author</p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp5.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">RUCHITA RAICHA</h3>
            <p className="text-sm text-[#f08a15]">Growth Facilitator</p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp6.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">VISHAL KUMAR</h3>
            <p className="text-sm text-[#f08a15]">CEO, Waste Warriors</p>
            </div>
        </div>
        <div className="text-center basis-1/3">
            <div className="p-3">
            <Image src="/sp7.png" />
            <h3 className="mt-2 text-bold text-[#3c8573] font-[600]">JANET ORLENE</h3>
            <p className="text-sm text-[#f08a15]">Empathy Architect</p>
            </div>
        </div>
      </div>
    </section>
  )
}
