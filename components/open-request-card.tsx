import {
  Card,
    CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { recommendedProducts } from "@/data/product";

const OpenRequestCard = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Card className="w-full">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>This is a Open Request Card</CardTitle>
              <CardDescription>
                Need A 10-20 mm Stainless Steel Bars, For Manufacturing
              </CardDescription>
            </div>
            <Badge className="rounded-full w-24 flex justify-center items-start ">
              In progress
            </Badge>
          </CardHeader>
          <CardFooter className="flex flex-row justify-start items-center gap-8">
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/chat-bubble-outline.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>43</span>
            </span>
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/update.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>10 days left</span>
            </span>
            <span className="flex gap-1 items-center text-[#686E6F]">
              <span className="relative flex items-center justify-between gap-2">
                <span className="w-[200px] h-2 bg-muted  rounded-full" />
                <span className="w-[90px] h-2 bg-primary absolute rounded-l-full" />
                <span className="right-0">44%</span>
              </span>
            </span>
          </CardFooter>
        </Card>
      </SheetTrigger>
      <SheetContent side="right" className="min-w-[600px] w-full overflow-y-scroll">
        <SheetClose className="flex flex-row justify-start items-center gap-1 text-[#686E6F] pb-2">
          <ChevronLeftIcon />
          <span>Keep Shoping</span>
        </SheetClose>
        <Separator />
        <SheetHeader className="pt-4">
          <SheetTitle className="text-2xl font-medium leading-6">
            This is Buyer Request Deatils
          </SheetTitle>
          <SheetDescription className="pt-0">
          Need A 10-20 mm Stainless Steel Bars, For Manufacturing
          </SheetDescription>
          <div className="flex flex-row justify-start items-center gap-8">
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/chat-bubble-outline.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>43</span>
            </span>
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/update.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>10 days left</span>
            </span>
            <span className="flex gap-1 items-center text-[#686E6F]">
              <span className="relative flex items-center justify-between gap-2">
                <span className="w-[200px] h-2 bg-muted  rounded-full" />
                <span className="w-[90px] h-2 bg-primary absolute rounded-l-full" />
                <span className="right-0">44%</span>
              </span>
            </span>
          </div>
        </SheetHeader>
        <div className='w-full flex flex-col justify-start items-start space-y-1 gap-4 pt-10'>
          <div className='w-full flex flex-col justify-start items-start  gap-1 text-[#686E6F] text-sm'>
            <p><span className="text-black text-base">Product Category: </span>Steel</p>
            <p><span className="text-black text-base">Product Quantity: </span>376 pound</p>
            <p><span className="text-black text-base">Product Description: </span>We are seeking 367 pounds of high-quality stainless steel, specifically Grade 304, to be used in the manufacturing of food processing equipment.<br/>The material should come in sheets measuring 4 feet by 2 feet, with a thickness of 0.25 inches. We require a cold-rolled finish that meets ASTM A240 specifications.<br/>It is essential that the steel is accompanied by a material certification to ensure compliance with our quality standards. Proper packaging to prevent any damage during transit is also necessary.</p>
          </div>
        </div>
        {/* <div className="flex flex-col pt-6">
          <h1 className="text-xl">Products Found</h1>
        </div> */}
              <section className="flex flex-col justify-start items-start gap-4 w-full pt-6">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full text-xl font-medium capitalize">Products Found</h1>
        </div>
        {/* <div className="flex items-center gap-2"> */}
        {/* <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('left')} >
            <img src="/icons/arrow-back.svg"  alt='dasd' className="w-10"/>
          </Button> */}
        <div  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll scroll-smooth pb-4">
          {recommendedProducts.map((item, index) => {
            return (
              <Card key={index} className=" max-w-[300px] min-w-[200px] rounded-sm">
                <CardContent className="flex flex-col gap-1 pt-6">
                  <Image src={item.image} alt={item.name} width={150} height={150} />
                  <span className="text-sm text-wrap line-clamp-2">
                    {item.name}
                  </span>
                  <div className="w-full flex justify-start items-center gap-1">
                    <Image
                      src="/icons/verified-user.svg"
                      alt="verified badge"
                      width={15}
                      height={15}
                    />
                    <span className="text-sm text-primary">
                      {item.seller}
                    </span>
                  </div>
                  {/* <span className="text-sm font-extralight">City, State</span> */}
                  <span className="text-sm font-semibold">{item.price}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* <Button variant='default' className="w-12 h-12 rounded-full absolute right-10 z-[100]" onClick={() => scroll('right')} >
            <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-10"/>
          </Button>
        </div> */}
        {/* <div className="w-full flex gap-8 justify-end px-20">
          <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('left')} >
            <img src="/icons/arrow-back.svg"  alt='dasd' className="w-10"/>
          </Button>
          <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('right')} >
            <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-10"/>
          </Button>
        </div> */}
        <div className="flex justify-start items-center gap-1">
        <Image src='/product/steel-3.png' alt='product/steel-3.png' width={100} height={100} className="border border-muted" />
        <Image src='/product/steel-2.png' alt='product/steel-2.png' width={100} height={100} className="border border-muted" />
        <Image src='/product/steel-4.png' alt='product/steel-4.png' width={100} height={100} className="border border-muted" />
        <Button variant='link'>+ 13 more product.</Button>
        </div>
      </section>
      </SheetContent>
    </Sheet>
  );
};

export default OpenRequestCard;
