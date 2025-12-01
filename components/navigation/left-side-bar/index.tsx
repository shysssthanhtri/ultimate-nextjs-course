import React from "react";
import { NavLinks } from "@/components/navigation/navbar/NavLinks";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 max-sm: sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[256px] dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none" asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image src="/icons/account.svg" alt="login" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none" asChild>
          <Link href={ROUTES.SIGN_UP}>
            <Image src="/icons/sign-up.svg" alt="login" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
