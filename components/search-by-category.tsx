'use client'

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useGetSearchResults } from "@/data/search";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";


const SearchByCategory = ({category}: {category: string}) => {
    const router = useRouter();
    const {data, isLoading} = useGetSearchResults(category)
    // console.log(data?.results)
    if (isLoading) {
        return (
            <Skeleton className="w-full h-full bg-muted-foreground" />
        )
    }

    if (data?.results.length === 0) {
        return (
            <div className="w-full flex justify-center items-center text-xl">
            No Product Found
        </div>
        )
    }
  return (
    <div  className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.results.map((item, index) => {
            const path = encodeURIComponent(item.name)
            return (
              <Card onClick={() => router.push(`/product/${path}`)} key={index} className=" max-w-[300px] min-w-[230px] rounded-sm select-none cursor-pointer">
                <CardContent className="flex flex-col gap-2 pt-6">
                  <Image src='/product/steel-4.png' alt={item.name} width={220} height={200} />
                  <span className="text-base text-wrap line-clamp-2">
                    {item.name}
                  </span>
                  {/* <div className="w-full flex justify-start items-center gap-1">
                    <img
                      src="/icons/verified-user.svg"
                      alt="verified badge"
                      className="h-4 w-4"
                    />
                    <span className="text-base text-primary">
                      {item.seller}
                    </span>
                  </div> */}
                  <span className="flex gap-1 items-center text-muted-foreground">
                    <Image src='/icons/stars-5.svg' alt='ratings' width={100} height={10} />
                    <span>(4.3)</span>
                  </span>
                    <span className="text-base font-semibold">${item.price}/pound</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
  )
}

export default SearchByCategory