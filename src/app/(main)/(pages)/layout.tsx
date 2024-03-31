import React from "react";

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {props.children}
    </div>
  );
};

export default layout;
