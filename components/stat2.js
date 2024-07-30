"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';


export const Stat2 = () => {
  return (
    <div className='py-12'>
        <div className='container mx-auto'>
        <div className='grid gap-2 grid-cols-3 px-5'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold text-[#a8ca8f]'><CountUp enableScrollSpy start={0} end={8} />+</h3>
                <h4 className='text-2xl font-bold text-[#a8ca8f] font-seasons'>Workshops</h4>
                <p>Introspection, Design, Action Plan</p>
            </div>
            <div className='text-center'>
                <h3 className='text-5xl font-bold text-[#a8ca8f]'><CountUp enableScrollSpy start={0} end={4} />+</h3>
                <h4 className='text-2xl font-bold text-[#a8ca8f] font-seasons'>Spots</h4>
                <p>to pause, reflect, play and laugh (at oneself also)</p>
            </div>
            <div className='text-center'>
                <h3 className='text-5xl font-bold text-[#a8ca8f]'>1</h3>
                <h4 className='text-2xl font-bold text-[#a8ca8f] font-seasons'>Community</h4>
                <p>of growth & support</p>
            </div>
        </div>
      </div>
    </div>
  );
};
