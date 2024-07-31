"use client"
import { Link } from '@nextui-org/link';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaMagnifyingGlass, FaTicket, FaWallet } from 'react-icons/fa6';

export const Cta = () => {
  return (
    <div className='py-24 bg-[#F7FAF8]'>
        <div className='container mx-auto'>
        <div className='text-center fixed bottom-0 left-0 z-30 flex justify-center items-center w-full py-2 bg-white/30 backdrop-blur-sm'>
        <Button href='https://mates.extraa.in/csv/irrada_survey' as={Link} target="_blank" color="primary" size="lg" className='mx-auto'>
        Request for invite
        </Button>
        </div>
        <div className='grid gap-10 grid-cols-2 md:grid-cols-4 px-5'>
            <div className='text-center flex flex-col gap-4 items-center'>
                <FaWpforms size={30} />
                <p className='text-base'>1. Fill & application</p>
            </div>
            <div className='text-center flex flex-col gap-4 items-center'>
            <FaMagnifyingGlass size={30} />
                <p className='text-base'>2. Designers at Iraada review your profile and check for alignment with our program</p>
            </div>
            <div className='text-center flex flex-col gap-4 items-center'>
            <FaTicket size={30} />
                <p className='text-base'>3. If accepted, you are offered a seat at the Iraada festival</p>
            </div>
            <div className='text-center flex flex-col gap-4 items-center'>
            <FaWallet size={30} />
                <p className='text-base'>4. You pay in 24 hours to reserve your seat.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
