import {
  Card,
  // CardContent,
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
// import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { OpenRequestSchemaType } from "@/schemas/open-request";
// import { Item } from "@radix-ui/react-dropdown-menu";
// import { recommendedProducts } from "@/data/product";

const OpenRequestCard = ({request}: {request: OpenRequestSchemaType}) => {

  const formatDateWithTimezone = (isoDate: string) => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",  // Adds the timezone abbreviation
    };
    return date.toLocaleString("en-GB", options).replace(',', '');
  };


  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Card className="w-full">
          <CardHeader className="fw-full flex flex-row justify-between items-start pb-2">
            <div className="w-[80%]">
              <CardTitle>Request for: {request.productCategory}</CardTitle>
              <CardDescription className=" line-clamp-1">
                {request.productSpecification}
              </CardDescription>
            </div>
            <Badge className="rounded-full w-24 flex justify-center items-start ">
              {request.status}
            </Badge>
          </CardHeader>
          <CardFooter className="flex flex-row justify-start items-center gap-8 pt-0">
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/chat-bubble-outline.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>0</span>
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
            {/* <span className="flex gap-1 items-center text-[#686E6F]">
              <span className="relative flex items-center justify-between gap-2">
                <span className="w-[200px] h-2 bg-muted  rounded-full" />
                <span className="w-[90px] h-2 bg-primary absolute rounded-l-full" />
                <span className="right-0">44%</span>
              </span>
            </span> */}
          </CardFooter>
        </Card>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="min-w-[600px] w-full overflow-y-scroll"
      >
        <SheetClose className="flex flex-row justify-start items-center gap-1 text-[#686E6F] pb-2">
          <ChevronLeftIcon />
          <span>Keep Shoping</span>
        </SheetClose>
        <Separator />
        <SheetHeader className="pt-4">
          <SheetTitle className="text-2xl font-medium leading-6">
            Product Request Deatils
          </SheetTitle>
          <SheetDescription className="pt-0">
          CreatedAt:{" "} {formatDateWithTimezone(`${request.createdAt}`)}
          </SheetDescription>
          <div className="flex flex-row justify-start items-center gap-8">
            <span className="flex gap-1 items-center text-[#686E6F]">
              <Image
                src="icons/chat-bubble-outline.svg"
                alt="chat-icon"
                width={23}
                height={23}
              />
              <span>0</span>
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
            {/* <span className="flex gap-1 items-center text-[#686E6F]">
              <span className="relative flex items-center justify-between gap-2">
                <span className="w-[200px] h-2 bg-muted  rounded-full" />
                <span className="w-[90px] h-2 bg-primary absolute rounded-l-full" />
                <span className="right-0">44%</span>
              </span>
            </span> */}
          </div>
        </SheetHeader>
        <div className="w-full flex flex-col justify-start items-start space-y-1 gap-4 pt-10">
          <div className="w-full flex flex-col justify-start items-start  gap-1 text-[#686E6F] text-sm">
            <p>
              <span className="text-black text-base">Product Category: </span>
              {request.productCategory}
            </p>
            <p>
              <span className="text-black text-base">Product Quantity: </span>
              {request.quantity}
            </p>
            <p>
              <span className="text-black text-base">
                Product Description:{" "}
              </span>
              {request.productSpecification}
            </p>
          </div>
          <p className="text-primary w-full h-full justify-center items-center text-sm">We have let the sellers know of your request. We will get back to you soon</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OpenRequestCard;


{ /* 
  
          <section className="flex flex-col justify-start items-start gap-4 w-full pt-6">
          <div className="w-full flex justify-between items-center">
            <h1 className="w-full text-xl font-medium capitalize">
              Products Found
            </h1>
          </div>
          <div className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll scroll-smooth pb-4">
            {recommendedProducts.map((item, index) => {
              return (
                <Card
                  key={index}
                  className=" max-w-[300px] min-w-[200px] rounded-sm"
                >
                  <CardContent className="flex flex-col gap-1 pt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={150}
                      height={150}
                    />
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
                    {/* <span className="text-sm font-extralight">City, State</span>
                    <span className="text-sm font-semibold">{item.price}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/product/steel-3.png"
              alt="product/steel-3.png"
              width={100}
              height={100}
              className="border border-muted"
            />
            <Image
              src="/product/steel-2.png"
              alt="product/steel-2.png"
              width={100}
              height={100}
              className="border border-muted"
            />
            <Image
              src="/product/steel-4.png"
              alt="product/steel-4.png"
              width={100}
              height={100}
              className="border border-muted"
            />
            <Button variant="link">+ 13 more product.</Button>
          </div>
        </section>
  
  */}