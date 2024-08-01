"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import WaveText from './waveText';

export const WhoFor = () => {
  return (
    <div className='text-[#3c8572]'>
        <div className=''>
        <div className='flex flex-col items-center '>
            <div className=''>
                <Image src='/who-for.png' alt='who for' />
            </div>
            <div className='bg-[#c0ee9b] text-[#F7FAF8] px-20 py-20 w-full'>
            <h3 className='text-3xl font-bold text-center text-[#436f52] mb-2'>People of all genders </h3>
            <p className='md:max-w-md text-center mx-auto text-[#e368f4]'>who want to become their better selves, lead with more clarity, build mental & emotional strength and grow into confident decision makers.

</p></div>
<Image className='mx-auto' width={200} src='/ages.png' alt='who for' />
<div className='bg-[#a3e296]'>
<Image className='w-full' radius="none"  src='/people.png' alt='people' />
</div>
        </div>
        
      </div>
    </div>
  );
};
