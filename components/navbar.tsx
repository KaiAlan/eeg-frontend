"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavConfig } from "@/config/nav";
import { Category } from "@/config/category";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import logo from './motxion-logo.svg'

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return;
  }
  return (
    <nav className="w-full backdrop-blur-lg font-josefinSans font-normal fixed top-0 left-0 right-0 bg-background z-50">
      <div className="max-w-[1512px] w-full flex justify-between items-center gap-6 py-4 pt-6 mx-auto text-lg text-typeface-2 px-8">
        <div className="flex justify-start items-center gap-10">
          <Link
            href="/"
            className="text-primary font-semibold uppercase h-full"
          >
            {/* <img src="/motxion-logo.svg" alt="Logo" className="w-8 z-[70] font-bold" /> */}
            Logo
          </Link>
          {NavConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex justify-start items-center gap-0.5 font-medium uppercase text-black"
              )}
            >
              {item.title}
              <img
                src="/icons/expand-more.svg"
                alt="Logo"
                className="w-8 font-bold"
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center gap-6 h-12 w-full">
          <div className="w-full h-full flex justify-end items-center">
            <Input
              type="text"
              className="h-full w-2/3 rounded-3xl shadow-md bg-white border-muted border-r-0 text-lg rounded-r-none"
            />
            <Button
              variant="menu"
              className="bg-white h-full rounded-3xl rounded-l-none shadow-md hover:border-white hover:bg-primary border-muted border-l-0"
            >
              <img
                src="/icons/search.svg"
                alt="Logo"
                className="w-8 z-[70] font-bold text-white"
              />
            </Button>
          </div>
          <Link
            href="/auth/login"
            className={
              pathname === "/"
                ? "text-primary font-bold"
                : "text-typeface-1 font-bold"
            }
          >
            <img
              src="/icons/person-outline.svg"
              alt="Logo"
              className="w-8 z-[70] font-bold"
            />
          </Link>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-primary font-bold"
                : "text-typeface-1 font-bold"
            }
          >
            <img
              src="/icons/work-outline.svg"
              alt="Logo"
              className="w-8 z-[70] font-bold"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-12 bg-primary">
        <div className="max-w-[1512px] w-full h-full flex justify-start items-center gap-4 px-8 mx-auto overflow-hidden">
          {/* <Button variant='menu' className="px-4">
              <img src="/icons/menu-open.svg" alt="Logo" className="w-8 z-[70] text-white font-bold" /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="menu" className="px-4">
                <img
                  src="/icons/menu-open.svg"
                  alt="Logo"
                  className="w-8 z-[70] text-white font-bold"
                />
                All
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
              {/* Content  */}
              {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
            </SheetContent>
          </Sheet>

          {Category.map((catalog, index) => {
            return (
              <Button
                key={index}
                variant="menu"
                className="px-2"
                onClick={() => router.push(`/category/${catalog.name}`)}
              >
                {catalog.name}
              </Button>
            );
          })}
        </div>
      </div>
      {/* <Separator /> */}
    </nav>
  );
};

export default Navbar;
