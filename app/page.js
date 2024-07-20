import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Divider} from "@nextui-org/divider";
import { Lead } from "@/components/lead"
import { Approach } from "@/components/approach";
import { Sessions } from "@/components/sessions";
import { Faq } from "@/components/faq";
import { EventOverview } from "@/components/eventOverview";
import { Pricing } from "../components/pricing";
import { Stat } from "../components/stat";
import { Cta } from "../components/cta";
import { Stat2 } from "../components/stat2";
import { Feature } from "../components/feature";

export default function Home() {
  return (
    <>
    <Lead />
    <Divider />
    <Approach />
    <Sessions />
    <Divider />
    <Feature />
    <Stat2 />
    <Cta />
    <Stat />
    <Pricing />
    <EventOverview />
    <Divider />
    <Faq />
    </>
  );
}
