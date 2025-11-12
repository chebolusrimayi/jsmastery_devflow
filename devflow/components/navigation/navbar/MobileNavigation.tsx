"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button aria-label="Open menu" className="sm:hidden">
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors"
          priority
        />
      </button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu" className="sm:hidden">
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"
            className="invert-colors"
            priority
          />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <Link href="/" className="flex items-center gap-2 mb-6">
          <Image src="/images/site-logo.svg" width={28} height={28} alt="Logo" />
          <p className="h2-bold font-space-grotesk text-dark-1000 dark:text-light-1000">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <nav className="no-scrollbar flex h-[calc(100vh-120px)] flex-col justify-between overflow-y-auto">
          <section className="flex flex-col gap-6 pt-2">
           <p>Nav Links</p>
          </section>

          <div className="flex flex-col gap-3 mt-6">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN} className="w-full">
                <Button className="small-medium min-h-[41px] w-full rounded-lg px-4 py-3 border-2 border-white bg-transparent text-white hover:bg-orange-500 hover:text-white hover:border-orange-500">
                  Sign in
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP} className="w-full">
                <Button className="small-medium bg-orange-500 hover:bg-orange-600 min-h-[41px] w-full rounded-lg px-4 py-3 text-white">
                  Sign up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
