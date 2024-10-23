"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilterSellerCheckbox } from "./filter/seller";
import { Card, CardContent } from "./ui/card";

// import { cn } from "@/lib/utils";
// import { Slider } from "@/components/ui/slider";
import OpenRequestDialog from "./open-request-dialog";
import React, { useState } from "react";

const FilterSidebar = ({
  sellers,
}: // maxPrice,
// onPriceChange,
{
  sellers: {
    id: string;
    label: string;
  }[];
  // maxPrice: number;
  // onPriceChange: (value: number[]) => void;
}) => {
  const [postalCode, setPostalCode] = useState("");
  // const [sliderValue, setSliderValue] = React.useState<number[]>([maxPrice]);
  // // const [filterdSellers, setFilteredSellers] = React.useState()

  // const handleValueChange = (value: number[]) => {
  //   onPriceChange(value);
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(postalCode); // You can handle the submission as needed
  };

  return (
    <div className="w-full flex flex-col justify-start items-start space-y-1 gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full rounded-full border-muted-foreground font-medium"
          >
            {postalCode ? `Postal code: ${postalCode}` : 'Add Location'}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose your location</DialogTitle>
            <DialogDescription>Enter a valid postal code.</DialogDescription>
          </DialogHeader>
          {/* <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="location" className="sr-only">
                Postal code
              </Label>
              <Input id="link" />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3 bg-primary text-white font-semibold"
            >
              <span className="sr-only">Apply</span>
              Apply
            </Button>
          </div> */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="postal-code" className="sr-only">
                Postal code
              </Label>
              <Input
                id="postal-code"
                value={postalCode}
                onChange={handleInputChange}
                placeholder="Enter postal code"
              />
            </div>
            <DialogClose asChild>
            <Button
              type="submit"
              size="sm"
              className="px-3 bg-primary text-white font-semibold"
            >
              <span className="sr-only">Apply</span>
              Apply
            </Button>
            </DialogClose>
          </form>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              {/* <Button type="button" variant="secondary" className="">
                Close
              </Button> */}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Card className="rounded-sm">
        <CardContent className="pt-6">
          <FilterSellerCheckbox sellers={sellers} />
        </CardContent>
      </Card>

      {/* <div className="w-full flex flex-col justify-start items-start gap-2">
        <h1>Price range</h1>
        <div className="w-full flex justify-start items-start gap-2 text-muted-foreground relative">
          <Slider
            defaultValue={[maxPrice]}
            max={maxPrice}
            step={1}
            onValueChange={handleValueChange}
            className={cn("w-full mb-6")}
          />
          <span className="absolute top-2 left-0">$0</span>
          <span className="absolute top-2 right-0">${maxPrice}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Current Price Range: 0-{sliderValue[0]}
        </p>
      </div> */}

      <OpenRequestDialog />
    </div>
  );
};

export default FilterSidebar;
