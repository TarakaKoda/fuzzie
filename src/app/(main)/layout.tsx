import InfoBar from "@/components/infobar";
import SideBar from "@/components/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideBar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default layout;
