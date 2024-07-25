"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import clsx from "clsx";
import { playfair } from "@/config/fonts";
import { Button, Image } from "@nextui-org/react";

export const Lead = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40 h-screen bg-[#f1d97a] bg-cover bg-[url('/bg-lead-md.gif')]">
      <div className="max-w-lg text-center flex flex-col items-center justify-center">
        <Image width={250} alt="Iraada" src="/iraada-logo.png" />
        <p className='text-xl text-center text-[#fff]'>
        Discover, appreciate and propel your iraada
        </p>
      </div>

      <div className="flex gap-3">
      <Button color="primary" size="lg">
        Apply For Alignment
        </Button>
      </div>
    </section>
  )
}
