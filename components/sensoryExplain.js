"use client"
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader, Divider, Grid, Image, Text } from '@nextui-org/react';
import { FaLightbulb, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export const SensoryExplain = () => {
  return (
    <div className="bg-[url('/iraada-bg.png')] text-[#3c8572] px-2">
        <div className='container flex items-center	justify-items-center h-dvh w-full mx-auto'>
        <p className='text-2xl px-5 md:max-w-lg	md:mx-auto text-center bg-white py-14 px-14'>
        The sensory exploration is designed to spark <br />
        <span className="text-[#e368f4] font-bold">Creative problem solving</span><br />
        ( Personal & Professional ) & <br />
        <span className="text-[#eb8564] font-bold">Blue - sky Thinking</span>
        </p>
      </div>
    </div>
  );
};
