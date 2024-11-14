import React from "react";

export const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
  onClick,
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  otherClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none h-12 md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 font-medium text-white backdrop-blur-3xl gap-2 text-lg sm:text-sm md:text-lg lg:text-lg ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
