"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const EventOverview = () => {
  return (
    <div className='py-24 bg-slate-100'>
        <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Why Iraada now?</h2>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-4 px-5'>
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
          <h3>Holistic growth</h3>
          <p>(and not unidirectional)</p>
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
        <h3>Leading with Intention</h3>
        <p>(and not on auto-pilot)</p>
        </div>
        </div>
        </div>
        <div>
        <div className='flex flex-col gap-4 text-center items-center justify-center'>
      <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={80}
        />
        <h3>Practicing the Purpose</h3>
        </div>
        </div>
        <div>
        <div className='flex flex-col gap-4 items-center justify-center text-center'>
      <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={80}
        />
        <h3>Nurturing joy in the Collective</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
