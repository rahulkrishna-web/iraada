"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const WhyIraada = () => {
  return (
    <div className='py-24 text-white bg-gradient-to-b from-[#a3e296]'>
        <div className='container mx-auto'>
        <h2 className='text-5xl text-center font-bold px-5 md:max-w-2xl md:mx-auto mb-4 font-seasons text-[#436f52]'>Why Iraada is for you?</h2>
        <p className='px-5 md:max-w-md text-bold	md:mx-auto text-center text-[#436f52]' >
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
