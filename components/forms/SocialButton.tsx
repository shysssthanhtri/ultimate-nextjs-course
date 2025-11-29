"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type SocialButtonProps = React.ComponentProps<typeof Button> & {
  iconSrc: string;
  iconAlt: string;
  label: string;
  invertIcon?: boolean;
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  iconSrc,
  iconAlt,
  label,
  invertIcon,
  className,
  ...props
}) => {
  return (
    <Button
      className={`background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 ${className ?? ""}`}
      {...props}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
        className={`${invertIcon ? "invert-colors" : ""} mr-2.5 object-contain`}
      />
      <span>{label}</span>
    </Button>
  );
};
