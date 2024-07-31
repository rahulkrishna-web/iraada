"use client"
import { Link } from '@nextui-org/link';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaMagnifyingGlass, FaTicket, FaWallet } from 'react-icons/fa6';

export const Cta = () => {
  return (
    <div className='py-24 bg-[#F7FAF8] text-[#3c8572]'>
        <div className='container mx-auto'>
        <div className='text-center fixed bottom-0 left-0 z-30 flex justify-center items-center w-full py-2 bg-white/30 backdrop-blur-sm'>
        <Button href='https://mates.extraa.in/csv/iraada_festival_survey' as={Link} target="_blank" color="primary" size="lg" className='mx-auto'>
        Request for invite
        </Button>
        </div>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-3 px-5'>
            <div className='text-center flex flex-col gap-4 items-center'>
                <Image width={200} radius="none" alt="Iraada" src="/iraada-cta-1.png" />
                <p className='text-base'>Let’s get to know you better!

Tell us about your Iraada</p>
            </div>
            <div className='text-center flex flex-col gap-4 items-center'>
            <Image width={200} radius="none" alt="Iraada" src="/iraada-cta-2.png" />
                <p className='text-base'>The Iraadewaale then get
                back to you in 48 hours</p>
            </div>
            <div className='text-center flex flex-col gap-4 items-center'>
            <Image width={200} radius="none" alt="Iraada" src="/iraada-cta-3.png" />
                <p className='text-base'>On selection, block your
                seat in 24 hours!</p>
            </div>
        </div>
      </div>
    </div>
  );
};
