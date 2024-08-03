"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import clsx from "clsx";
import { playfair } from "@/config/fonts";
import { Button, Image } from "@nextui-org/react";

export const LeadVideo = () =>{
  return(
    <section className="">
      <video className="w-full hidden md:flex" width="320" height="240" autoPlay playsInline muted loop>
      <source src="/banner-desktop.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <video className="w-full md:hidden" width="320" height="240" controls>
      <source src="/banner-mobile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </section>
  )
}
