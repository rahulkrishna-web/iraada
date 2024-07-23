"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import clsx from "clsx";
import { playfair } from "@/config/fonts";
import { Button } from "@nextui-org/react";

export const Lead = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40 h-screen bg-[#f1d97a] bg-cover bg-[url('/bg-lead-md.gif')]">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={clsx(
          'text-5xl font-bold text-center text-[#fff] font-playfair',
          playfair.variable,
        )} >IRAADA</h1>
        <p className='text-xl text-center text-[#fff]'>
        Discover, appreciate and propel your iraada
        </p>
      </div>

      <div className="flex gap-3">
      <Button color="primary" size="lg" className="text-white">
        Apply For Alignment
        </Button>
      </div>
    </section>
  )
}
