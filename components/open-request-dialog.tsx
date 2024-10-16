

import { Button } from "@/components/ui/button";
import {
  Dialog,
//   DialogClose,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import Link from "next/link";

const OpenRequestDialog = () => {
  return (
    <Dialog>
      <Card className="bg-primary text-white text-lg font-semibold text-center rounded-md">
        <CardContent className="pt-6 gap-4">
          <p>Didn&apos;t find what you were looking for?</p>
          <DialogTrigger asChild>
            <Button
              variant="default"
              className="mt-4 py-6 px-6 bg-black rounded-full font-semibold hover:bg-black/80"
            >
              REQUEST HERE
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <DialogContent className="sm:max-w-[1000px] px-[200px]">
        <DialogHeader className="w-full flex justify-center items-center">
          <DialogTitle className="text-2xl font-[600]">Open A New Product Request</DialogTitle>
          <DialogDescription>
          Fill up this form with the required fileds to open a new product request.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full items-center gap-6 space-x-2 pt-6">
          <div className="w-full grid flex-1 gap-2">
            <Label htmlFor="link" className="text-md">
            Product Category
            </Label>
            <Input
              id="link"
              placeholder="Steel Pipes"
              
            />
          </div>
          <div className="w-full grid flex-1 gap-2">
            <Label htmlFor="link" className="text-md">
            Describe Product Specification
            </Label>
            <Textarea
              id="link"
              placeholder="We are seeking high-quality stainless steel, specifically Grade 304, to be used in the manufacturing of food processing equipment."
              className="min-h-40"
              
            />
          </div>
          <div className="w-full grid flex-1 gap-2">
            <Label htmlFor="link" className=" text-md">
            How much quantity required?
            </Label>
            <Input
              id="link"
              placeholder="367 Pound"
              
            />
          </div>
          <Link href='/product-request'>
          <Button type="submit" size="lg" className="px-3 text-lg py-4">
            <span className="sr-only">Continue</span>
            Continue
          </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OpenRequestDialog;
