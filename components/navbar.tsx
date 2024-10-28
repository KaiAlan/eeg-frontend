"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { NavConfig } from "@/config/nav";
import { Category } from "@/config/category";
import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { Input } from "./ui/input";
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
import Sidebar from "./sidebar";
import { SearchBox } from "./search";
import Cart from "./cart";
// import useChatPanelStore from "@/stores/chat-panel";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import logo from './motxion-logo.svg'

const Navbar = () => {

  // const {isChatOpen} = useChatPanelStore()
  
  const router = useRouter();
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return;
  }
  return (
    <nav className={cn("w-full backdrop-blur-lg font-josefinSans font-normal fixed top-0 left-0 right-0 bg-primary z-50")}>
      <div className="max-w-[1512px] w-full flex justify-between items-center gap-6 py-4 pt-6 mx-auto text-lg text-typeface-2 px-8">
        <div className="flex justify-start items-center gap-10">
          <Link
            href="/"
            className="text-white font-semibold uppercase "
          >
            <Image 
              src='/eeg-logo.png'
              alt='logo'
              width={0}
              height={0}
              className="w-32 h-12"
            />
            {/* EEG */}
          </Link>
          
        </div>
        <div className="flex justify-end items-center gap-6 h-10 w-full">
          {/* <div className="w-full h-full flex justify-end items-center"> */}
            {/* <Input
              type="text"
              className="h-full w-2/3 rounded-lg bg-white border-muted border-r-0 text-lg rounded-r-none"
            />
            <Button
              variant="menu"
              className="bg-white h-full rounded-lg rounded-l-none hover:border-white hover:bg-primary border-muted border-l-0"
              onClick={() => console.log('kdfsd')}
            >
              <img
                src="/icons/search.svg"
                alt="Logo"
                className="w-8 z-[70] font-bold text-white"
              />
            </Button> */}
            <SearchBox />
          {/* </div> */}
          <div className="flex justify-start items-end gap-1 cursor-pointer font-bold pr-6">
          <Link
            href="/account"
          >
            <div className="flex justify-start items-end gap-1">
              <span className="flex flex-col justify-start text-white leading-4 pb-1">
                <span className="text-[10px]">Hello,</span>
                <span>John</span>
              </span>
              <img
              src="/icons/person.svg"
              alt="Logo"
              className="w-7 z-[70] font-bold text-white"
            />
            </div>
            
          </Link>
          </div>
          <div className="flex justify-start items-end gap-1 cursor-pointer font-bold pr-6">
          <Link
            href="/"
            className=" cursor-not-allowed"
          >
            <div className="flex justify-start items-end gap-1">
              <span className="flex flex-col justify-start text-white leading-4 pb-1">
                <span className="text-[10px]">YOUR</span>
                <span>ORDERS</span>
              </span>
              <img
                src="/icons/work-outline.svg"
                alt="Logo"
                className="w-8 z-[70] font-bold text-white"
              />
            </div>
            
          </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
            <div className="flex justify-start items-end gap-1 cursor-pointer font-bold">
              <span className="flex flex-col justify-start text-white leading-4 pb-1">
                <span className="text-[10px]">YOUR</span>
                <span className="font-bold">CART</span>
              </span>
              <img
                src="/icons/shopping-cart.svg"
                alt="Logo"
                className="w-8 z-[70] font-bold text-white"
              />
            </div>
            </SheetTrigger>
              <Cart />
            </Sheet>
        </div>
      </div>
      <div className="w-full h-12 bg-primary">
        <div className="max-w-[1512px] w-full h-full flex justify-start items-center gap-4 px-8 mx-auto overflow-hidden">
          {/* <Button variant='menu' className="px-4">
              <img src="/icons/menu-open.svg" alt="Logo" className="w-8 z-[70] text-white font-bold" /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="menu" className="px-4 pl-0">
                <img
                  src="/icons/menu-open.svg"
                  alt="Logo"
                  className="w-8 z-[70] text-white font-bold"
                />
                All
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className="overflow-y-scroll">
              <Sidebar />
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
