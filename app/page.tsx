"use client";

// import { previousOrders } from "@/data/order";
// import { Product } from "@/data/dummy/types";
import { TopCategory } from "@/config/category";
import { BestSeller } from "@/data/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { useUserStore } from "@/stores/user-store";
import { AllProductsData } from "@/data/dummy/product";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/data/dummy/types";
import { toast } from "sonner";

// import { getAllProducts } from "@/actions/products/all-products";

export default function Home() {
  const { user } = useUserStore();
  const recommendedProducts = AllProductsData.slice(0,6)
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { addItem } = useCartStore();

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = 600; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  // const getRandomProduct = (products: Product[]): Product | undefined => {
  //   if (products.length === 0) return undefined;
  //   const randomIndex = Math.floor(Math.random() * products.length);
  //   return products[randomIndex];
  // };

  // const randomProduct = getRandomProduct(AllProductsData);
  const randomProduct = AllProductsData[10];
  const previousOrders = Array(3).fill(null).map(() => ({ ...randomProduct }));
  // const data = getAllProducts()
  // console.log(data)

  return (
    <section className="flex mt-8 relative pt-10">
      <aside className=" w-72 h-full desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
        <Sidebar />
      </aside>
      <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
        <div className="flex flex-col justify-start items-start gap-16 w-full h-full">
          <div className="w-full flex justify-between items-center bg-white px-32 py-2">
            <div className=" flex flex-col justify-start items-start gap-4 w-[400px] font-[500]">
              <h1 className="text-2xl">
                Get Upto 20% Off On Selected Products
              </h1>
              <Link href="/shop">
                <Button variant="default" size="lg" className=" uppercase py-4">
                  Shop Now
                </Button>
              </Link>
            </div>
            <Image
              src="/product/steel-3.png"
              alt="ad-product"
              width={300}
              height={300}
            />
          </div>
          {user && (
            <div>
              {previousOrders && (
                <section className="flex flex-col justify-start items-start gap-4 w-full">
                  <h1 className="text-2xl font-medium capitalize">
                    Previous Orders
                  </h1>
                  <div className="w-full flex justify-start items-center gap-8">
                    {previousOrders.map((item, index) => {
                      const path = encodeURIComponent(item.productName + '--' + item.productId)
                      return (
                        <Card
                        key={index}
                        className=" max-w-[240px] min-w-[230px] rounded-sm select-none relative"
                      >
                        <CardContent className="flex flex-col gap-2 pt-6">
                        <div className="flex flex-col max-w-[200px] max-h-[200px]">
                          <Image
                            src={item.images && item.images?.length > 0 ? item.images[0]: '/placeholder.svg'}
                            alt={item.productName ?? 'Unknown Product'}
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
                                  {item.seller?.name ?? 'Unknown Seller'}
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
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button onClick={() => addToCart(item)}>REORDER</Button>
                          <Link href={`/product/${path}`} >
                          <Button variant='outline'>VIEW</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                      );
                    })}
                  </div>
                </section>
              )}
              <section className="flex flex-col justify-start items-start gap-4 pt-10 w-full">
                <div className="w-full flex justify-between items-center">
                  <h1 className="w-full text-xl font-medium capitalize">
                    Recommended for you
                  </h1>
                  <div className="w-full flex gap-4 justify-end">
                    <Button
                      variant="default"
                      className="w-8 h-8 p-0"
                      onClick={() => scroll("left")}
                    >
                      <img
                        src="/icons/arrow-back.svg"
                        alt="dasd"
                        className="w-4"
                      />
                    </Button>
                    <Button
                      variant="default"
                      className="w-8 h-8 p-0"
                      onClick={() => scroll("right")}
                    >
                      <img
                        src="/icons/arrow-forward.svg"
                        alt="dasd"
                        className="w-4"
                      />
                    </Button>
                  </div>
                </div>
                {/* <div className="flex items-center gap-2"> */}
                {/* <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('left')} >
            <img src="/icons/arrow-back.svg"  alt='dasd' className="w-10"/>
          </Button> */}
                <div
                  ref={scrollRef}
                  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll scroll-smooth"
                >
                  {recommendedProducts.map((item, index) => {
                    const path = encodeURIComponent(item.productName + '--' + item.productId)
                    return (
                      <Link href={`/product/${path}`}  key={index} >
                      <Card
                     
                      className=" max-w-[300px] min-w-[230px] rounded-sm select-none cursor-pointer relative"
                    >
                      <CardContent className="flex flex-col gap-2 pt-6">
                      <div className="flex flex-col max-w-[200px] max-h-[200px]">
                        <Image
                          src={item.images && item.images?.length > 0 ? item.images[0]: '/placeholder.svg'}
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
                      </CardContent>
                      {item.discount?.percentage && (
                          <span className="absolute top-0 right-0 py-1 px-3 bg-red-600 text-white text-xs font-medium rounded-bl-xl">
                              {item.discount?.percentage}% off
                          </span>
                      )}
                    </Card>
                    </Link>
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
            </div>
          )}
          <section className="flex flex-col justify-start items-start gap-4 w-full relative">
            <div className="w-2/3 flex flex-col justify-start items-start">
              <h1 className="w-full text-2xl font-medium capitalize">
                Top Collections
              </h1>
              <p className="font-light text-muted-foreground text-sm">
                Explore a wide range of industrial materials – from metals to
                machinery – all in one place. Trusted by buyers and suppliers
                across the globe.
              </p>
            </div>

            <div className="w-full flex pt-10 gap-10">
              <div className="w-[400px] relative bg-black/50 h-[180px] rounded-xl overflow-hidden">
                <Card className="group/card bg-transparent h-full border-none flex flex-col justify-between text-white">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZnCA0yeZHPmY1NvxqlYNQAHaGG%26pid%3DApi&f=1&ipt=57b2ddb354b36f86f81d06a0afe106ee6108a656ef77d83f27aa91d04b1264cb&ipo=images"
                    alt="pvc pipes"
                    fill={true}
                    // objectFit="cover"
                    width={0}
                    height={0}
                    className="-z-10 rounded-lg group-hover/card:scale-110 transform duration-300"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">PVC Pipes</CardTitle>
                    <CardDescription className="text-white">
                      Durable pipes for plumbing and construction projects.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/category/PVC Pipes">
                      <Button
                        size="sm"
                        className="bg-white text-xs text-black hover:bg-slate-300"
                      >
                        Discover More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="w-[340px] bg-black/50 h-[270px] rounded-xl overflow-hidden relative top-0 right-0">
                <Card className="group/card bg-transparent h-full border-none flex flex-col justify-between text-white">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nn8RiRyt2axn7oZgpSeDDgHaHa%26pid%3DApi&f=1&ipt=72ae7fd134f3f9fd7e5f3fe04a9a7f99180c473a3623878f06cbaa3a559d7334&ipo=images"
                    alt="Welding Equipment"
                    fill={true}
                    // objectFit="cover"
                    width={0}
                    height={0}
                    className="-z-10 rounded-lg group-hover/card:scale-110 transform duration-300"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">Welding Equipment</CardTitle>
                    <CardDescription className="text-white">
                    Essential tools for precision welding and fabrication.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/category/Welding Equipment">
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-slate-300"
                      >
                        Discover More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="w-[320px] bg-black/50 h-[400px] rounded-xl overflow-hidden absolute top-0 right-0">
                <Card className="group/card bg-transparent h-full border-none flex flex-col justify-between text-white">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1zDkyhadvuj7M1mT26lEXQHaFk%26pid%3DApi&f=1&ipt=f0695428739c21f1559bb979cb76699bd60a93296d65af9815dba923c5395a02&ipo=images"
                    alt="Crude Oil"
                    fill={true}
                    // objectFit="cover"
                    width={0}
                    height={0}
                    className="-z-10 rounded-lg group-hover/card:scale-110 transform duration-300"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">Crude Oil</CardTitle>
                    <CardDescription className="text-white">
                    Premium crude oil for energy and manufacturing needs.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/category/Crude Oil">
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-slate-300"
                      >
                        Discover More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="w-full flex justify-between items-center">
              <h1 className="w-full text-xl font-medium capitalize">
                Browse by Top Category
              </h1>
              {/* <div className="w-full flex gap-4 justify-end">
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('left')} >
              <img src="/icons/arrow-back.svg"  alt='dasd' className="w-4"/>
            </Button>
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('right')} >
              <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-4"/>
            </Button>
          </div> */}
            </div>
            <div
              ref={scrollRef}
              className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll no-scrollbar flex-shrink-0 scroll-smooth"
            >
              {TopCategory.map((item, index) => {
                return (
                  <Link key={index} href={`/category/${item.name}`}>
                  <Card
                    className=" max-w-[300px] min-w-[230px] rounded-sm"
                  >
                    <CardContent className="flex flex-col items-center gap-2 pt-6">
                      <Image src={item.image} alt={item.name} width={0} height={0} className="w-[150px] h-[100px]" />
                      <span className="text-base text-wrap line-clamp-2">
                        {item.name}
                      </span>
                      <span className="text-base font-medium text-primary">
                        {item.priceStart}
                      </span>
                    </CardContent>
                  </Card>
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="w-full flex justify-between items-center">
              <h1 className="w-full text-2xl font-medium capitalize">
                Browse by Top Sellers
              </h1>
              {/* <div className="w-full flex gap-4 justify-end">
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('left')} >
              <img src="/icons/arrow-back.svg"  alt='dasd' className="w-4"/>
            </Button>
            <Button variant='default' className="w-8 h-8 p-0" onClick={() => scroll('right')} >
              <img src="/icons/arrow-forward.svg"  alt='dasd' className="w-4"/>
            </Button>
          </div> */}
            </div>
            <div
              ref={scrollRef}
              className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll no-scrollbar flex-shrink-0 scroll-smooth"
            >
              {BestSeller.map((item, index) => {
                return (
                  <Link key={index} href={`/category/${item.sellerName}`}>
                  <Card
                    className=" max-w-[300px] min-w-[230px] rounded-sm"
                  >
                    <CardContent className="flex flex-col items-center gap-2 pt-6">
                      <Image src={item.image} alt={item.sellerName} width={0} height={0} className="w-[150px] h-[100px]" />
                      <span className="text-base text-wrap line-clamp-2">
                        {item.sellerName}
                      </span>
                      <span className="text-base font-medium text-primary">
                        {item.location}
                      </span>
                    </CardContent>
                  </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
