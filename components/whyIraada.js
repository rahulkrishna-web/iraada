"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const WhyIraada = () => {
  return (
    <div className='py-24 bg-[#3c8572] text-white'>
        <div className='container mx-auto'>
        <h2 className='text-3xl font-bold px-5 md:max-w-2xl md:mx-auto mb-4 font-seasons'>Why Iraada is for you?</h2>
        <p className='px-5 md:max-w-2xl	md:mx-auto'>
        Struggling to juggle multiple roles—
creator, entrepreneur, side hustler,
or explorer—and still seeking your
true path?<br /><br />



Is your creative energy craving a
new direction or a vibrant stage to
truly shine?<br /><br />



Excited to meet inspiring people but
unsure how to spark those
meaningful connections?<br /><br />



Tired of conferences that
overpromise but underdeliver on
real, impactful experiences?<br /><br />



Iraada is here to guide you in
discovering and igniting your true
intention.
        </p>
      </div>
    </div>
  );
};
