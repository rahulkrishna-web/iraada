"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Feature = () => {
  return (
    <div className='py-24'>
        <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Tapping into the senses</h2>
      <div className='grid gap-4 grid-cols-3 px-5'>
        <div>
            <div className='flex flex-col gap-4 items-center justify-center'>
        <Image
            alt="nextui logo"
            height={80}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={80}
            />
            <div className='text-center'>
            <h3 className='font-bold'>Sight</h3>
            </div>
            </div>
        </div>
        <div>
        <div className='flex flex-col gap-4 items-center justify-center'>
      <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={80}
        />
        <div className='text-center'>
        <h3 className='font-bold'>Hear</h3>
        </div>
        </div>
        </div>
        <div>
        <div className='flex flex-col gap-4 items-center justify-center'>
      <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={80}
        />
        <h3 className='font-bold'>Touch</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
