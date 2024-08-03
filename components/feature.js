"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import See from './see';
import Hear from './hear';
import Touch from './touch';

export const Feature = () => {
  return (
    <div className='py-24 text-[#3c8572]'>
        <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 font-seasons'>Tapping into the senses</h2>
      <div className='flex flex-wrap px-5 items-center justify-center'>
        <div className="basis-1/2">
        <See  />
        </div>
        <div className="basis-1/2">
        <Hear/>
        </div>
        <div className="basis-1/2">
        <Touch />
        </div>
        
      </div>
      </div>
    </div>
  );
};
