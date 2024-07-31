"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const Pricing = () => {
  return (
    <div className='py-24'>
        <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-4 font-seasons'>Paisa Kitna Lagenga?</h2>
        <p className='px-5 md:max-w-2xl	md:mx-auto'>
        Access to all transformative workshops across 3 days is at 20000 INR i.e. 6666/- per day towards design of the event, curation of the workshops, hospitality for facilitators and speakers
<br /><br />
Accommodation will be allotted on a sharing basis in cottages and rooms, spread across the 30 acres of expanse at the beautiful <Link href='https://www.kresort.in/'>K Resort</Link> near Pondicherry.It comes with jain food on all three days, and is made available on a complimentary basis for navigators/ attendees at iraada.

        </p>
      </div>
    </div>
  );
};
