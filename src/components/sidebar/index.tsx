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
import { Separator } from "@/components/ui/separator";

import { AnimatedTooltip } from "../global/AnimatedToolTip";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../global/ModeToggle";

type Props = {};

const SideBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-4 py-6 px-2">
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
        <AnimatedTooltip items={menuOptions} pathname={pathname} />
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative p-2 dark:bg-[#353346]/70 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={15} />
            <div className="border-l-2 border-x-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[50%] -bottom-[30px]" />
          </div>
          <div className="relative p-2 dark:bg-[#353346]/70 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={15} />
            <div className="border-l-2 border-x-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[50%] -bottom-[30px]" />
          </div>
          <div className="relative p-2 dark:bg-[#353346]/70 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database className="dark:text-white" size={15} />
            <div className="border-l-2 border-x-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[50%] -bottom-[30px]" />
          </div>
          <div className="relative p-2 dark:bg-[#353346]/70 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={15} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default SideBar;
