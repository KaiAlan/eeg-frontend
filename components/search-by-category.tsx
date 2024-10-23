"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
// import { useGetSearchResults } from "@/data/search";
import Image from "next/image";
// import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { AllProductsData } from "@/data/dummy/product";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/data/dummy/types";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import FilterSidebar from "./filter";
import { useFilterSellersStore } from "@/stores/filter-store";
import OpenRequestButton from "./open-request-button";

const SearchByCategory = ({ category }: { category: string }) => {
  const router = useRouter();
  const { addItem } = useCartStore();
  const { filterSellers } = useFilterSellersStore();
  const [filteredData, setFilteredData] = useState<Product[]>([]);
    // const {data, isLoading} = useGetSearchResults(category)


    const data = useMemo(() => {
      return AllProductsData.filter((product) => 
        product.subCategory === category || product.seller.name === category
      );
    }, [category]);

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

  useEffect(() => {
    if (!data) return;

    if (filterSellers) {
          // Directly set filtered data based on the category filter
    const filteredProducts =
    filterSellers.length > 0
      ? data.filter((product) => filterSellers.includes(product.seller.name))
      : data;

  // Set the filtered data only if it has changed
  if (
    filteredProducts.length !== filteredData.length ||
    !filteredProducts.every((value, index) => value.productId === filteredData[index]?.productId)
  ) {
    setFilteredData(filteredProducts);
  }
    } else {
      setFilteredData(data);
    }
  }, [filterSellers, data]);




  const sellers = useMemo(() => {
    if (!data) return [];
    return data.map((product) => ({
      id: product.seller.name,
      label: product.seller.name,
    }));
  }, [data]);


  // if (isLoading) {
  //   return (
  //     <div className="max-w-screen p-4 animate-pulse flex justify-between">
  //       <div className="w-[15%] h-[75vh] bg-gray-300 rounded-md"></div>
  //       <div className="w-[83%] h-[75vh] bg-gray-300 rounded-md"></div>
  //     </div>
  //   );
  // }

  if (!data) {
    return (
      <div className="w-full flex justify-center items-center text-xl">
        No Product Found
      </div>
    );
  }


  return (
    <section className="flex mt-8 relative">
    <aside className=" w-72 h-full desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
      <FilterSidebar sellers={sellers} />
    </aside>
    <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredData.length > 0 ? filteredData.map((item, index) => {
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
                <div className="flex flex-col max-w-[220px] max-h-[200px]">
                  <Image
                    src={
                      item.images && item.images?.length > 0
                        ? item.images[0]
                        : "/placeholder.svg"
                    }
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
      }) : (
        <div className="w-full flex flex-col justify-center items-center text-xl text-muted-foreground gap-6 absolute">
          No Product Found
          <OpenRequestButton>Open a product request</OpenRequestButton>
        </div>
      )}
    </div>
    </div>
    </section>
  );
};

export default SearchByCategory;
