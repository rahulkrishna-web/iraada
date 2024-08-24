"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import See from './see';
import Hear from './hear';
import Touch from './touch';

export const Feature = () => {
  return (
    <div className='py-12 text-[#3c8572] bg-[#216a5a]'>
        <div className='container mx-auto flex flex-col justify-items-center items-center'>
        <Image width={300} className="" radius="none" fill alt="Iraada" src="iraada-kya-h.png" />
        <p className='text-[#fef5b6] text-2xl px-5 md:max-w-2xl	md:mx-auto text-center'>
        With iraada we aim to tap into the <br />
        <span class="text-[#f7faf8] font-bold">Power of intention</span><br />
        by exploring through our senses
        </p>
      <div className='flex flex-wrap px-5 justify-center'>
        <div className="basis-1/3 pt-52">
        <See  />
        </div>
        <div className="basis-1/3">
        <Hear/>
        </div>
        <div className="basis-1/3 pt-52">
        <Touch />
        </div>
        
      </div>
      </div>
    </div>
  );
};
