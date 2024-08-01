"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';


export const Stat2 = () => {
  return (
    <div className='py-12'>
        <div className='container mx-auto'>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-3 px-5 items-start'>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
                <div className='text-5xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  <CountUp enableScrollSpy start={0} end={8} />+
                  </div>
                </div>
                <h4 className='text-2xl font-bold text-[#216A5A] font-seasons'>Workshops</h4>
                <p className='text-[#216A5A]'>Introspection, Design, Action Plan</p>
            </div>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
              <div className='text-5xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  <CountUp enableScrollSpy start={0} end={15} />
                  </div>
                </div>
                <h4 className='text-2xl font-bold text-[#216A5A] font-seasons'>Experiences</h4>
                <p className='text-[#216A5A]'>to pause, reflect, play and laugh< br /> (at oneself also)</p>
            </div>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
            <div className='text-5xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  1
                  </div>
                </div>
                <h4 className='text-2xl font-bold text-[#216A5A] font-seasons'>Community</h4>
                <p className='text-[#216A5A]'>of growth & support</p>
            </div>
        </div>
      </div>
    </div>
  );
};
