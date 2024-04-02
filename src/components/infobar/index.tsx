import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import GradientSpinningBorder from "../global/GradientSpinningBorder";
import { AnimatedTooltip } from "../global/AnimatedToolTip";
import { infoBarOptions } from "@/lib/constant";

const InfoBar = () => {
  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
      <GradientSpinningBorder>
        <span className="flex relative items-center bg-white dark:bg-black px-4 rounded-full">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
          />
        </span>
      </GradientSpinningBorder>
      <AnimatedTooltip items={infoBarOptions}/>
    </div>
  );
};

export default InfoBar;
