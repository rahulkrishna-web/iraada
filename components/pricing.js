"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Pricing = () => {
  return (
    <div className="bg-[url('/iraada-bg2.png')] bg-cover">
        <div className='flex flex-col items-center justify-center	 mx-auto h-dvh'>
        <h2 className='text-3xl py-3 font-bold text-center mb-4 font-seasons bg-[#f7faf8] w-full text-[#3d8473]'>Paisa Kitna Lagenga?</h2>
        <p className='text-lg md:text-2xl px-5 md:max-w-2xl	md:mx-auto text-white text-center'>
        Access to all transformative workshops across 3 days is at ₹ 9,999/- towards design of the event, curation of the workshops, hospitality for facilitators and speakers

        </p>
      </div>
    </div>
  );
};
