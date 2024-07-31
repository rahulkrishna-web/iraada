"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import CountUp from 'react-countup';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Stat = () => {
  return (
    <div className='py-12'>
        <div className='container mx-auto'>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-3 px-5 items-start'>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
              <div className='text-3xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  <CountUp enableScrollSpy start={0} end={120} />+
                  </div>
              </div>
                <p className='text-2xl font-bold text-[#216A5A] font-seasons'>Navigators</p>
            </div>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
            <div className='text-5xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  <CountUp enableScrollSpy start={0} end={10} />
                  </div>
              </div>
                <p className='text-2xl font-bold text-[#216A5A] font-seasons'>Guides</p>
            </div>
            <div className='text-center flex flex-col gap-2 justify-center items-center mb-5'>
              <div className='text-5xl font-bold text-[#a8ca8f] bg-[#E268F2] w-24 h-24 rounded-full flex items-center justify-center'>
                  <div className='text-[#ffffff]'>
                  1
                  </div>
              </div>
                <p className='text-2xl font-bold text-[#216A5A] font-seasons'>Iraada</p>
                <p className='text-[#216A5A]'>to become our best selves</p>
            </div>
        </div>
      </div>
    </div>
  );
};
