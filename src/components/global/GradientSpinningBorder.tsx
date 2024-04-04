import React from "react";

type Props = {
  children: React.ReactNode;
  rounded?: string;
};

const GradientSpinningBorder = (props: Props) => {
  return (
    <div
      className={`flex overflow-hidden p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50 !m-0 object-top  relative transition duration-500 border-1 border dark:border-none ${
        props.rounded ? props.rounded : "rounded-full"
      }`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D200FF_0%,#393BB2_50%,#D200FF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      {props.children}
    </div>
  );
};

export default GradientSpinningBorder;
