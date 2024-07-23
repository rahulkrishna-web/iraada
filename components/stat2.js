"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Stat2 = () => {
  return (
    <div className='py-12 bg-[#f1d97a]'>
        <div className='container mx-auto'>
        <div className='grid gap-2 grid-cols-3 px-5'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>8+</h3>
                <h4 className='font-bold'>Workshops</h4>
                <p>Introspection, Design, Action Plan</p>
            </div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>4+</h3>
                <h4 className='font-bold'>Spots</h4>
                <p>to pause, reflect, play and laugh (at oneself also)</p>
            </div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>1</h3>
                <h4 className='font-bold'>Community</h4>
                <p>of growth & support</p>
            </div>
        </div>
      </div>
    </div>
  );
};
