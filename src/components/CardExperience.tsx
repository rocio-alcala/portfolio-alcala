import React from "react";
import { CgEditBlackPoint } from "react-icons/cg";

interface CardExperienceProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

export default function CardExperience({
  name,
  description,
  startDate,
  endDate,
}: CardExperienceProps) {
  return (
    <div className="relative flex w-full items-center justify-start gap-11 p-5">
      <div className="absolute left-[31px] top-0 -z-10 h-full w-[2px] bg-primary-text-light dark:bg-primary-text-dark"></div>
      <div className="h-fit w-fit whitespace-nowrap bg-background-light dark:bg-background-dark">
        <CgEditBlackPoint size={25} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-5">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
