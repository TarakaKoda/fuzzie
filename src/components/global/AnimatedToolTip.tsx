"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

export const AnimatedTooltip = ({
  items,
  pathname,
  isSidebar,
}: {
  items: {
    id: number;
    name: string;
    image: string;
    activeImage: string;
    href: string;
  }[];
  pathname?: string;
  isSidebar?: boolean;
}) => {
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
    <ul className={`flex ${isSidebar ? "flex-col gap-1" : "gap-4"}`}>
      {items.map((item, idx) => (
        <li
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          {hoveredIndex === item.id && (
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
              className={`absolute bg-white  -left-2/4 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md dark:bg-black z-80 shadow-xl px-4 py-2 ${
                isSidebar ? "-top-10" : "top-10"
              }`}>
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold dark:text-white relative text-xs">
                {item.name}
              </div>
            </motion.div>
          )}

          <div
            className={`flex overflow-hidden p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50 !m-0 object-top rounded-full h-12 w-12 relative transition duration-500 border-1 border dark:border-none`}
            onMouseMove={handleMouseMove}>
            {(pathname === item.href || !isSidebar)&& (
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D200FF_0%,#393BB2_50%,#D200FF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            )}
            <Link
              href={item.href}
              className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 py-4 px-2.5 text-sm font-medium text-white backdrop-blur-3xl">
              {pathname ? (
                <Image
                  src={pathname === item.href ? item.activeImage : item.image}
                  width={20}
                  height={20}
                  alt={item.name}
                />
              ) : (
                <Image
                  src={item.activeImage}
                  width={20}
                  height={20}
                  alt={item.name}
                />
              )}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
