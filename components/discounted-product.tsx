"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
// import { useGetSearchResults } from "@/data/search";
import Image from "next/image";
// import { Skeleton } from "./ui/skeleton";
import { AllProductsData } from "@/data/dummy/product";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/data/dummy/types";
import { toast } from "sonner";

const DiscountedProductsPage = () => {
  const router = useRouter();
  const { addItem } = useCartStore();
  // Get today's date
  const today = new Date();

  // Filter products with valid discounts
  const productsWithValidDiscount = AllProductsData.filter((product) => {
    return (
      product.discount &&
      product.discount.validTill &&
      new Date(product.discount.validTill) > today
    );
  });

  const addToCart = (product: Product) => {
    addItem({
      id: product.productId,
      name: product.productName,
      image: product.images ? product.images[0] : "/placeholder.svg",
      quantity: 1,
      price: product.price,
    });

    toast("Item added to cart");
  };

  // const {data, isLoading} = useGetSearchResults(searchKey)
  // console.log(data?.results)
  // if (isLoading) {
  //     return (
  //         <Skeleton className="w-full h-full bg-muted-foreground" />
  //     )
  // }

  // if (data?.results.length === 0) {
  //     return (
  //         <div className="w-full flex justify-center items-center text-xl">
  //         No Product Found
  //     </div>
  //     )
  // }
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {productsWithValidDiscount.map((item, index) => {
        const path = encodeURIComponent(
          item.productName + "--" + item.productId
        );
        return (
          <Card
            key={index}
            className=" max-w-[300px] min-w-[230px] rounded-sm select-none cursor-pointer relative"
          >
            <CardContent className="flex flex-col gap-2 pt-6">
              <div onClick={() => router.push(`/product/${path}`)}>
                <div className="flex flex-col max-w-[200px] max-h-[200px]">
                  <Image
                    src={
                      item.images && item.images?.length > 0
                        ? item.images[0]
                        : "/placeholder.svg"
                    }
                    alt={item.productName}
                    height={0}
                    width={0}
                    className="w-full h-[150px]"
                  />
                </div>
                <span className="text-base text-wrap line-clamp-2 h-12">
                  {item.productName}
                </span>
                <div className="w-full flex justify-start items-center gap-1">
                  <Image
                    src="/icons/verified-user.svg"
                    alt="verified badge"
                    width={0}
                    height={0}
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
                    <span className="text-sm">({item.rating})</span>
                  </span>
                  <span className="text-base font-semibold text-black">
                    ${item.price}
                  </span>
                </span>
              </div>
              <Button onClick={() => addToCart(item)}>Add to cart</Button>
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
  );
};

export default DiscountedProductsPage;
