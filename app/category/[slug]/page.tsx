"use client";

import { recommendedProducts } from "@/data/product";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";


const BrowseProduct = ({ params }: { params: { slug: string } }) => {
    const router = useRouter();
    console.log(params.slug)
  return (
    <div>
        <div  className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedProducts.map((item, index) => {
            const path = encodeURIComponent(item.name)
            return (
              <Card onClick={() => router.push(`/product/${path}`)} key={index} className=" max-w-[300px] min-w-[230px] rounded-sm select-none cursor-pointer">
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
    </div>
  )
}

export default BrowseProduct