"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Feature = () => {
  return (
    <div className='py-24 text-[#3c8572]'>
        <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 font-seasons'>Tapping into the senses</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 px-5'>
        <div>
            <div className='flex flex-col items-center justify-center'>
        <Image
            alt="nextui logo"
            radius="sm"
            src="/see.gif"
            width={360}
            />
            <div className='text-center'>
            <h3 className='font-bold text-2xl font-seasons'>Sight</h3>
            </div>
            </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/hear.gif"
          width={360}
        />
        <div className='text-center'>
        <h3 className='font-bold text-2xl font-seasons'>Hear</h3>
        </div>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/smell.gif"
          width={360}
        />
        <h3 className='font-bold text-2xl font-seasons'>Smell</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/touch.gif"
          width={360}
        />
        <h3 className='font-bold text-2xl font-seasons'>Touch</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/taste.gif"
          width={360}
        />
        <h3 className='font-bold text-2xl font-seasons'>Taste</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/feel.gif"
          width={360}
        />
        <h3 className='font-bold text-2xl font-seasons'>Feel</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
