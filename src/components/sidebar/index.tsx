"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constant";
import { AnimatedTooltip } from "../global/AnimatedToolTip";

type Props = {};

const SideBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link href="/" className="flex">
          <p className="text-3xl font-bold">Fu</p>
          <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="fuzzie Log"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold">zie</p>
        </Link>
        <AnimatedTooltip items={menuOptions} pathname={pathname} />
      </div>
    </nav>
  );
};

export default SideBar;
