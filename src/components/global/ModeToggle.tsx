"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredIndex(1)}
      onMouseLeave={() => setHoveredIndex(null)}>
      {hoveredIndex === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
            whiteSpace: "nowrap",
          }}
          className="absolute bg-white -top-12 -left-2/4 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md dark:bg-black z-80 shadow-xl px-4 py-2">
          <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
          <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
          <div className="font-bold dark:text-white hidden dark:block relative text-xs">
            Dark Mode
          </div>
          <div className="font-bold dark:text-white dark:hidden relative text-xs">
            Light Mode
          </div>
        </motion.div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="relative"
          onMouseMove={handleMouseMove}>
          <div className="overflow-hidden p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50 !m-0 object-top rounded-full h-12 w-12 transition duration-500 border-1 border dark:border-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D200FF_0%,#393BB2_50%,#D200FF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <Button
              variant="outline"
              size="icon"
              className="flex rounded-full items-center justify-center relative w-full h-full">
              <Image
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                src="/modeToggleIcons/sun.png"
                width={15}
                height={15}
                alt="sun icon"
              />
              <Image
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                src="/modeToggleIcons/moon.png"
                width={15}
                height={15}
                alt="moon icon"
              />

              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => {
              setTheme("light");
              setHoveredIndex(null);
            }}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("dark");
              setHoveredIndex(null);
            }}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("system");
              setHoveredIndex(null);
            }}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
