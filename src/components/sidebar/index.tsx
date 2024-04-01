"use client";

import { Separator } from "@/components/ui/separator";
import { menuOptions } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedTooltip } from "../global/AnimatedToolTip";
import { ModeToggle } from "../global/ModeToggle";
import WorkFlowBar from "./WorkFlowBar";
import GradientSpinningBorder from "../global/GradientSpinningBorder";

type Props = {};

const SideBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex w-24 items-center flex-col gap-2 py-4 px-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href="/" className="flex">
          <p className="text-xl font-bold">Fu</p>
          <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="fuzzie Log"
            className="shadow-sm"
          />
          <p className="text-xl font-bold">zie</p>
        </Link>
        <AnimatedTooltip
          items={menuOptions}
          pathname={pathname}
          isSidebar={true}
        />
        <GradientSpinningBorder>
          <WorkFlowBar />
        </GradientSpinningBorder>
      </div>
      <div className="flex items-center justify-center flex-col">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default SideBar;
