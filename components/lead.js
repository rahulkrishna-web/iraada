"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export const Lead = () =>{
  return(
    <section className="flex flex-col items-center justify-center gap-4 py-40 md:py-40">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>IRAADA</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
        Discover, appreciate and propel your iraada
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Apply for alignment
        </Link>
      </div>
    </section>
  )
}
