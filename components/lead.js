"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/react";

export const Lead = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40 h-screen">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className='text-5xl font-bold text-center text-[#aad7e6]'>IRAADA</h1>
        <p className='text-xl text-center'>
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
