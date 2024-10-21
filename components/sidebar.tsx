"use client";

import { Button } from "./ui/button";
// import { useRouter } from "next/navigation";
// import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";
// import { NavConfig } from "@/config/nav";
import OpenRequestCard from "./open-request-dialog";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(Category.length).fill(false)
  );
  // const pathname = usePathname();

  const handleOpenChange = (index: number) => {
    setIsOpen((prevState) => {
      // Create a copy of the current state
      const newState = [...prevState];
      // Toggle the value at the specific index
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full flex flex-col justify-start items-start space-y-1 gap-4">
      <div className="w-full flex flex-col justify-start items-start space-y-1 text-[#686E6F]">
        <Button variant='default' className=" w-full font-medium text-white">Open a product request</Button>
        {/* <h1 className=" text-black text-lg font-medium">Trending</h1> */}
        {/* <div className="flex flex-col justify-start items-start pl-2 gap-2">
          <span>Best Seller</span>
          <span>Best Deals</span>
          <span>New in Store</span>
        </div> */}
      </div>
      <Separator />
      <div className="w-full flex flex-col justify-start items-start space-y-1 text-[#686E6F]">
        <h1 className=" text-black text-lg font-medium">Category</h1>
        {Category.sort().map((category, index) => (
          <Collapsible
            key={index}
            open={isOpen[index]}
            onOpenChange={() => handleOpenChange(index)}
            className="w-full"
          >
            {category.subCategory.length > 0 && (
              <div className="flex items-center justify-between font-josefinSans">
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex justify-between gap-2 pl-2 py-4 hover:bg-muted/50"
                  >
                    <h4 className="text-base font-medium">{category.name}</h4>
                    <ChevronRightIcon
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen[index] ? "rotate-90 ease-in-out" : ""
                      )}
                    />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
            )}
            <CollapsibleContent className="flex flex-col space-y-[2px] text-typeface-2">
              {category.subCategory.sort().map((navItem, idx) => {
                // let val = category.items.length + idx
                return (
                  <Link
                    key={idx}
                    href={`/category/${navItem}`}
                    // aria-disabled={navItem.disabled}
                    // onMouseEnter={() => console.log(val)}
                    className={cn(
                      "rounded-sm py-1 pl-2 text-sm font-normal font-openSans border-b-2 border-muted/50 hover:bg-muted/50"
                    )}
                  >
                    {/* <button disabled={navItem.disabled}> */}
                    {navItem}
                    {/* </button> */}
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
      <Separator />
      <div className="w-full flex flex-col justify-start items-start space-y-1 text-[#686E6F]">
        <h1 className=" text-black text-lg font-medium">Help and Settings</h1>
        <div className="flex flex-col justify-start items-start pl-2 gap-2">
          <span>Your Account</span>
          <span>Customer Services</span>
          <span>Sign In</span>
        </div>
      </div>
      <Separator />
      <OpenRequestCard />
    </div>
  );
};

export default Sidebar;

const Category = [
  {
    name: "Construction Materials",
    subCategory: [
      "Steel Pipes",
      "Cement Bags",
      "Iron Rods",
      "PVC Pipes",
      "Aluminum Sheets",
      "Asphalt",
      "Concrete Mixers",
      "Scaffolding",
    ],
  },
  {
    name: "Industrial Supplies",
    subCategory: [
      "Industrial Lubricants",
      "Chemicals",
      "Welding Equipment",
      "Industrial Paint",
      "Adhesives",
      "Power Tools",
      "Industrial Fans",
      "Cooling Systems",
    ],
  },
  {
    name: "Electrical Components",
    subCategory: [
      "Copper Wires",
      "Brass Fittings",
      "Motors",
      "Ball Bearings",
      "Gears",
    ],
  },
  {
    name: "Energy Resources",
    subCategory: [
      "Crude Oil",
      "Coal",
      "Solar Panels",
      "Wind Turbines",
      "Fuel Tanks",
    ],
  },
  {
    name: "Machinery & Equipment",
    subCategory: [
      "Generators",
      "Drilling Machines",
      "Air Compressors",
      "Excavators",
      "Cranes",
      "Bulldozers",
    ],
  },
  {
    name: "Safety Gear",
    subCategory: ["Safety Helmets", "Safety Boots", "Rubber Sheets"],
  },
  {
    name: "Transportation & Logistics",
    subCategory: ["Hydraulic Lifts", "Pipelines", "Pumps"],
  },
  {
    name: "Metal Products",
    subCategory: ["Steel Bars", "Iron Ore", "Fiber Glass"],
  },
  {
    name: "Plastic & Composites",
    subCategory: ["Plastic Pellets", "Glass Panels"],
  },
];
