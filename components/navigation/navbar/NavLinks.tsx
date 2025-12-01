"use client";

import React from "react";
import { sidebarLinks } from "@/constants/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

interface Props {
  isMobile?: boolean;
}

export const NavLinks = ({ isMobile }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
        const LinkComponent = (
          <Link
            href={item.href}
            key={item.label}
            className={cn(
              isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p className={cn(isActive ? "base-bold" : "base-medium", !isMobile && "max-lg:hidden")}>{item.label}</p>
          </Link>
        );

        if (!isMobile) return LinkComponent;

        return (
          <SheetClose asChild key={item.label}>
            {LinkComponent}
          </SheetClose>
        );
      })}
    </>
  );
};
