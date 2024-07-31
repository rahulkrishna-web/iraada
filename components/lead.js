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
    <section className="">
      <div>
      <Image width={600} className="w-screen md:hidden" radius="none" alt="Iraada" src="/banner-sm.png" />
      <Image width={1366} className="w-screen hidden md:block" radius="none" alt="Iraada" src="/banner-md.png" />
      </div>
    </section>
  )
}
