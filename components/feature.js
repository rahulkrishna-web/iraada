"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Feature = () => {
  return (
    <div className='py-24'>
        <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 font-spectral'>Tapping into the senses</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 px-5'>
        <div>
            <div className='flex flex-col items-center justify-center'>
        <Image
            alt="nextui logo"
            radius="sm"
            src="/see.gif"
            height={360}
            />
            <div className='text-center'>
            <h3 className='font-bold text-2xl text-[#f4dc7a]'>Sight</h3>
            </div>
            </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/hear.gif"
          height={360}
        />
        <div className='text-center'>
        <h3 className='font-bold text-2xl text-[#f17ab6]'>Hear</h3>
        </div>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/smell.gif"
          height={360}
        />
        <h3 className='font-bold text-2xl text-[#a6deed]'>Smell</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/touch.gif"
          height={360}
        />
        <h3 className='font-bold text-2xl text-[#f68690]'>Touch</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/taste.gif"
          height={360}
        />
        <h3 className='font-bold text-2xl text-[#bdb7fd]'>Taste</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col items-center justify-center'>
      <Image
          alt="nextui logo"
          radius="sm"
          src="/feel.gif"
          height={360}
        />
        <h3 className='font-bold text-2xl text-[#beb7fe]'>Feel</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
