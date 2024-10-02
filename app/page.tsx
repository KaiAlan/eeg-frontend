'use client'

import { previousOrders } from "@/data/order";
import { TopCategory } from "@/config/category";
import { recommendedProducts, BestSeller } from "@/data/product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = 600; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="flex flex-col justify-start items-start gap-16 w-full h-full">
      <section className="flex flex-col justify-start items-start gap-4 w-full">
        <h1 className="text-2xl font-medium capitalize">Previous Orders</h1>
        <div className="w-full flex justify-start items-center gap-8">
          {previousOrders.map((item, index) => {
            return (
              <Card key={index} className="w-[230px] rounded-sm">
                <CardContent className="flex flex-col gap-2 pt-6">
                  <img src={item.image} alt={item.name} />
                  <span className="text-base text-wrap line-clamp-2">
                    {item.name}
                  </span>
                  <div className="w-full flex justify-start items-center gap-1">
                    <img
                      src="/icons/verified-user.svg"
                      alt="verified badge"
                      className="h-4 w-4"
                    />
                    <span className="text-base text-primary">
                      {item.seller}
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <span>{item.quantity}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Button variant="default">REORDER</Button>
                    <Button variant="outline">VIEW</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col justify-start items-start gap-4 w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full text-2xl font-medium capitalize">Recommended for you</h1>
          <div className="w-full flex gap-4 justify-end">
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('left')} >
              <img src="/icons/arrow-back.svg"  alt='dasd' className="w-4"/>
            </Button>
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('right')} >
              <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-4"/>
            </Button>
          </div>
        </div>
        {/* <div className="flex items-center gap-2"> */}
        {/* <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('left')} >
            <img src="/icons/arrow-back.svg"  alt='dasd' className="w-10"/>
          </Button> */}
        <div ref={scrollRef}  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll no-scrollbar flex-shrink-0 scroll-smooth">
          {recommendedProducts.map((item, index) => {
            return (
              <Card key={index} className=" max-w-[300px] min-w-[230px] rounded-sm">
                <CardContent className="flex flex-col gap-2 pt-6">
                  <img src={item.image} alt={item.name} />
                  <span className="text-base text-wrap line-clamp-2">
                    {item.name}
                  </span>
                  <div className="w-full flex justify-start items-center gap-1">
                    <img
                      src="/icons/verified-user.svg"
                      alt="verified badge"
                      className="h-4 w-4"
                    />
                    <span className="text-base text-primary">
                      {item.seller}
                    </span>
                  </div>
                  <span className="text-sm font-extralight">City, State</span>
                  <span className="text-lg font-semibold">{item.price}</span>
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
      </section>
      <section className="flex flex-col justify-start items-start gap-4 w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full text-2xl font-medium capitalize">Browse by Top Category</h1>
          {/* <div className="w-full flex gap-4 justify-end">
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('left')} >
              <img src="/icons/arrow-back.svg"  alt='dasd' className="w-4"/>
            </Button>
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('right')} >
              <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-4"/>
            </Button>
          </div> */}
        </div>
        <div ref={scrollRef}  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll no-scrollbar flex-shrink-0 scroll-smooth">
          {TopCategory.map((item, index) => {
            return (
              <Card key={index} className=" max-w-[300px] min-w-[230px] rounded-sm">
                <CardContent className="flex flex-col items-center gap-2 pt-6">
                  <img src={item.image} alt={item.name} />
                  <span className="text-base text-wrap line-clamp-2">
                    {item.name}
                  </span>
                  <span className="text-base font-medium text-primary">{item.priceStart}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col justify-start items-start gap-4 w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full text-2xl font-medium capitalize">Browse by Top Category</h1>
          {/* <div className="w-full flex gap-4 justify-end">
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('left')} >
              <img src="/icons/arrow-back.svg"  alt='dasd' className="w-4"/>
            </Button>
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('right')} >
              <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-4"/>
            </Button>
          </div> */}
        </div>
        <div ref={scrollRef}  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll no-scrollbar flex-shrink-0 scroll-smooth">
          {BestSeller.map((item, index) => {
            return (
              <Card key={index} className=" max-w-[300px] min-w-[230px] rounded-sm">
                <CardContent className="flex flex-col items-center gap-2 pt-6">
                  <img src={item.image} alt={item.sellerName} />
                  <span className="text-base text-wrap line-clamp-2">
                    {item.sellerName}
                  </span>
                  <span className="text-base font-medium text-primary">{item.location}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
