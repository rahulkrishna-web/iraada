"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const WhoFor = () => {
  return (
    <div className='md:py-24 bg-[#F7FAF8] text-[#3c8572]'>
        <div className='md:px-5'>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 items-center'>
            <div className=''>
                <Image src='/who-for.png' alt='who for' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className="bg-[#f9f4ba] px-5 py-5">
                <h3 className='text-xl font-bold'>People of all genders </h3>
                <p>who want to become their better selves, lead with more clarity, build mental & emotional strength and grow into confident decision makers.

</p></div>
                <Image className='mx-auto' width={200} src='/ages.png' alt='who for' />
            </div>
        </div>
        
      </div>
    </div>
  );
};
