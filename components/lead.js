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
      <Image fill className="w-screen md:hidden" radius="none" alt="Iraada" src="/banner-mobile.gif" />
      <Image fill className="w-screen hidden md:block" radius="none" alt="Iraada" src="/banner-desktop.gif" />
      </div>
    </section>
  )
}
