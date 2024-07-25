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
    <section className="flex flex-col items-center gap-4 py-24 md:py-24 h-screen bg-brandGreen bg-cover bg-[url('/leadbg.gif')]">
      <div className="max-w-lg text-center flex flex-col items-center justify-center">
        <Image width={250} alt="Iraada" src="/iraada-logo.png" />
        <p className='text-xl text-center text-[#fff] font-spectral'>
        Discover, appreciate and propel your iraada
        </p>
      </div>

      <div className="flex gap-3">
      <Button color="primary" size="lg" variant="shadow">
        Apply For Alignment
        </Button>
      </div>
    </section>
  )
}
