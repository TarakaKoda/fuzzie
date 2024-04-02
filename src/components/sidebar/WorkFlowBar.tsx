import { LucideMousePointerClick, GitBranch, Database } from "lucide-react";
import React from "react";

const WorkFlowBar = () => {
  return (
    <div className="flex relative items-center flex-col  gap-9 bg-white dark:bg-black py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
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
  );
};

export default WorkFlowBar;
