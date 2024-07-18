import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Divider} from "@nextui-org/divider";
import { Lead } from "@/components/lead"
import { Approach } from "@/components/approach";
import { Sessions } from "@/components/sessions";

export default function Home() {
  return (
    <>
    <Lead />
    <Divider />
    <Approach />
    <Divider />
    <Sessions />
    </>
  );
}
