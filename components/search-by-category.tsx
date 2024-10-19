'use client'

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
// import { useGetSearchResults } from "@/data/search";
import Image from "next/image";
// import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { AllProductsData } from "@/data/dummy/product";


const SearchByCategory = ({category}: {category: string}) => {
    const router = useRouter();

    const data = AllProductsData.filter((product) => {
      if (product.subCategory === category) {
        return product
      } else if (product.seller.name === category) {
        return product
      }
    })

    // const {data, isLoading} = useGetSearchResults(category)
    // console.log(data?.results)
    // if (isLoading) {
    //     return (
    //         <Skeleton className="w-full h-full bg-muted-foreground" />
    //     )
    // }

    if (data?.length === 0) {
        return (
            <div className="w-full flex justify-center items-center text-xl">
            No Product Found
        </div>
        )
    }
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((item, index) => {
        const path = encodeURIComponent(item.productName);
        return (
          <Card
            onClick={() => router.push(`/product/${path}`)}
            key={index}
            className=" max-w-[300px] min-w-[230px] rounded-sm select-none cursor-pointer relative"
          >
            <CardContent className="flex flex-col gap-2 pt-6">
            <div className="flex flex-col max-w-[220px] max-h-[200px]">
              <Image
                src={item.images && item.images?.length > 0 ? item.images[0]: '/placeholder.svg'}
                alt={item.productName}
                height={0}
                width={0}
                className="w-full h-[170px]"
                />
                </div>
              <span className="text-base text-wrap line-clamp-2 h-12">
                {item.productName}
              </span>
              <div className="w-full flex justify-start items-center gap-1">
                    <img
                      src="/icons/verified-user.svg"
                      alt="verified badge"
                      className="h-3 w-3"
                    />
                    <span className="text-xs text-[#686E6F]">
                      {item.seller.name}
                    </span>
                  </div>
              <span className="flex gap-1 justify-between items-center">
                <span className="flex gap-1 items-center text-muted-foreground">
                <Image
                  src="/icons/stars-5.svg"
                  alt="ratings"
                  width={80}
                  height={10}
                />
                <span>({item.rating})</span>
                </span>
                <span className="text-base font-semibold text-black">
                    ${item.price}
                </span>
              </span>
              <Button>Add to cart</Button>
            </CardContent>
            {item.discount?.percentage && (
                <span className="absolute top-0 right-0 py-1 px-3 bg-red-600 text-white text-xs font-medium rounded-bl-xl">
                    {item.discount?.percentage}% off
                </span>
            )}
          </Card>
        );
      })}
    </div>
  )
}

export default SearchByCategory