"use client"
import { Image } from "@nextui-org/react";

export const Days = () =>{
  return(
    <section id="days" className="mt-24">
      {/* day1 */}
      <div>
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#e368f3] text-white uppercase text-bold text-xl md:text-4xl w-fit">Day 1</h3>
                </div>
            <div className="flex flex-col justify-center align-center text-center py-5">
                <p className="text-4xl text-[#84be7f]">Stepping into</p>
                <h4 className="text-6xl text-[#3d8672] text-bold">PAUSE</h4>
            </div>
            <div className="flex justify-center"><p className="bg-[#fef5b6] w-fit p-3 rounded-lg">⏰ : 60 to 90<br /> minutes per <br />session</p></div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/day1_ic1.png" />
                    <p className="text-center text-[#3d8672]">The 44 hour plan</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/day1_icn2.png" />
                    <p className="text-center text-[#3d8672]">Moving & Shaking</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/day1_icn3.png" />
                    <p className="text-center text-[#3d8672]">Lakeside dinner</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/day1_icn4.png" />
                    <p className="text-center text-[#3d8672]">Meaningful movie</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/day1_icn5.png" />
                    <p className="text-center text-[#3d8672]">No-winner games</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div>
                <Image className="-ml-16 md:-ml-20" src="/d1_fb.png" />
            </div>
            <div className="pr-2">
                <div className="flex gap-2 justify-center items-center pr-5">
                <Image src="/day1-fb_r1.png" />
                <p> Arranged by JITO</p>
                </div>
                <div className="bg-[#3d8672] text-white py-5 px-5 -mt-3">
                    <p>
                    Departures from Chennai - Till 12pm<br />
                    Reaches event venue - 3pm
                    </p>
                </div>
            </div>
        </div>
      </div>
      {/* day2 */}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="flex justify-between items-center">
                <h3 className="w-max h-max pl-24 py-5 pr-5 bg-[#ffc618] text-white uppercase text-bold text-xl md:text-4xl w-fit">Day 2</h3>
                <div className="block md:hidden">
                    <Image className="" src="/ic-hd-r1.png" />
                </div>
                </div>
            <div className="flex flex-col justify-center align-center text-center py-5">
                <p className="text-4xl text-[#ffc618]">Working on</p>
                <h4 className="text-6xl text-[#ea8463] text-bold">RESET</h4>
            </div>
            <div className="flex justify-end hidden md:flex">
                <Image className="" src="/ic-hd-r1.png" />
            </div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-i1.png" />
                    <p className="text-center text-[#ea8463]">Body Movement</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-i2.png" />
                    <p className="text-center text-[#ea8463]">Ice Plunge</p>
                </div>
            </div>
        </div>
      </div>
      {/* day2 - Morning */}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#3d8672] text-white uppercase text-bold text-xl md:text-4xl w-fit">Morning</h3>
                </div>
        </div>
        <div className="subSectionBody py-5">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im1.png" />
                    <p className="text-center text-[#3d8672]">Mapping the future</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im2.png" />
                    <p className="text-center text-[#3d8672]">Locating one’s purpose</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im3.png" />
                    <p className="text-center text-[#3d8672]">Building identities</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im4.png" />
                    <p className="text-center text-[#3d8672]">Growth at work</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im5.png" />
                    <p className="text-center text-[#3d8672]">Inspiration & Energy Management</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-im6.png" />
                    <p className="text-center text-[#3d8672]">Navigating Doubt, Worry & Fear</p>
                </div>
            </div>
        </div>
      </div>
      {/* day2 - Afternoon */}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#e368f3] text-white uppercase text-bold text-xl md:text-4xl w-fit">Afternoon</h3>
                </div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ia1.png" />
                    <p className="text-center text-[#e368f3]">Life lessons through Family Business</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ia2.png" />
                    <p className="text-center text-[#e368f3]">Getting comfortable with the uncomfortable</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ia3.png" />
                    <p className="text-center text-[#e368f3]">Doubt to Confidence</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ia4.png" />
                    <p className="text-center text-[#e368f3]">Negotiating matters</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ia5.png" />
                    <p className="text-center text-[#e368f3]">Mind as a muscle</p>
                </div>
            </div>
        </div>
      </div>
      {/* day2 - Evening*/}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#ffc618] text-white uppercase text-bold text-xl md:text-4xl w-fit">Evening</h3>
                </div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ie1.png" />
                    <p className="text-center text-[#3d8672]">Open Mic</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ie2.png" />
                    <p className="text-center text-[#3d8672]">Confidence & Collaboration</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-ie3.png" />
                    <p className="text-center text-[#3d8672]">Community</p>
                </div>
            </div>
        </div>
      </div>
      {/* day2 - Night*/}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#3d8672] text-white uppercase text-bold text-xl md:text-4xl w-fit">Night</h3>
                </div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-in1.png" />
                    <p className="text-center text-[#3d8672]">Repeat session</p>
                    <p className="text-center text-[#3d8672] italic text-sm">People’s Choice!</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d2-in2.png" />
                    <p className="text-center text-[#3d8672]">Scavenging your senses</p>
                    <p className="text-center text-[#3d8672] italic text-sm">on sign-up basis</p>
                </div>
            </div>
        </div>
      </div>
      {/* day3 */}
      <div className="py-12">
        <div className="subSectionHead grid grid-cols-1 md:grid-cols-3	items-center justify-between">
            <div className="">
                <h3 className="pl-24 py-5 pr-5 bg-[#ea8463] text-white uppercase text-bold text-xl md:text-4xl w-fit">Day 3</h3>
            </div>
            <div className="flex flex-col justify-center align-center text-center py-5">
                <p className="text-4xl text-[#ea8463]">PLAYING</p>
                <h4 className="text-6xl text-[#ffc618] text-bold">FIELD</h4>
            </div>
        </div>
        <div className="subSectionBody py-10">
            <div className="itemGrid flex justify-center flex-wrap p-3 md:w-1/2	md:m-auto">
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d3-i1.png" />
                    <p className="text-center text-[#ea8463]">Ice Plunge</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d3-i2.png" />
                    <p className="text-center text-[#ea8463]">Consolidating your Iraada</p>
                </div>
                <div className="basis-1/3 pb-4 flex flex-col items-center">
                    <Image src="/d3-i3.png" />
                    <p className="text-center text-[#ea8463]">Micro Actions</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div>
                
            </div>
            <div className="pr-2">
                <div className="flex gap-2 justify-center items-center pr-5">
                <Image src="/day1-fb_r1.png" />
                <p> Arranged by JITO</p>
                </div>
                <div className="bg-[#3d8672] text-white py-5 px-5 -mt-3">
                    <p>
                    Departures from Chennai - Till 12pm<br />
                    Reaches event venue - 3pm
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}