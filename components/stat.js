"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Stat = () => {
  return (
    <div className='py-12 bg-[#aad7e6]'>
        <div className='container mx-auto'>
        <div className='grid gap-2 grid-cols-3'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>120</h3>
                <p>Navigators</p>
            </div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>10</h3>
                <p>Guides</p>
            </div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>1</h3>
                <p className='font-bold'>Iraada</p>
                <p>to become our best selves</p>
            </div>
        </div>
      </div>
    </div>
  );
};
