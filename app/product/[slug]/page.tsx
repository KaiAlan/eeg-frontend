"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AllProductsData } from "@/data/dummy/product";
// import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/data/dummy/types";
import { toast } from "sonner";

const ProductView = ({ params }: { params: { slug: string } }) => {
  const [productName, productId] = decodeURIComponent(params.slug).split("--");
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const { addItem } = useCartStore()
  // const [selectedImage, setSelectedImage] = useState("/product/steel-main.png");

  // Handle increment
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle decrement with minimum value of 1
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = (product: Product) =>  {
    addItem({
      id: product.productId,
      name: product.productName,
      image: product.images ? product.images[0]: '/placeholder.svg',
      quantity: quantity,
      price: product.price
    })

    toast("Item added to cart");
  }
  const product = AllProductsData.find((product) => {
    if (
      product.productId === productId &&
      product.productName === productName
    ) {
      return product;
    }
  });

  const simillarProduct = AllProductsData.filter((item) => {
    if(item.category === product?.category) {
      return item
    }
  })

  if (!product) {
    return (
      <div className="w-full h-full flex justify-center items-start">
        <h1>No Product Found</h1>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-10 pt-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Button
                variant="ghost"
                onClick={router.back}
                className="py-0 px-0"
              >
                product
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="w-[200px] line-clamp-1">
              {product.productName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full h-full flex justify-center items-start gap-6">
        <div className="w-full h-full flex flex-col gap-4">
          <Image
            src={product.images?.[0] ?? "/placeholder.svg"}
            alt="product image"
            width={0}
            height={0}
            className="max-w-[700px] w-full max-h-[550px] h-full rounded-md"
          />
          {/* <div className="flex gap-4">
            <img
              src="/product/steel-main.png"
              alt="product image"
              onClick={() => setSelectedImage("/product/steel-main.png")}
              className={cn(
                "w-32 shadow-md cursor-pointer",
                selectedImage === "/product/steel-main.png"
                  ? "border border-primary"
                  : ""
              )}
            />
            <img
              src="/product/steel-2.png"
              alt="product image"
              onClick={() => setSelectedImage("/product/steel-2.png")}
              className={cn(
                "w-32 shadow-md cursor-pointer",
                selectedImage === "/product/steel-2.png"
                  ? "border border-primary"
                  : ""
              )}
            />
            <img
              src="/product/steel-3.png"
              alt="product image"
              onClick={() => setSelectedImage("/product/steel-3.png")}
              className={cn(
                "w-32 shadow-md cursor-pointer",
                selectedImage === "/product/steel-3.png"
                  ? "border border-primary"
                  : ""
              )}
            />
            <img
              src="/product/steel-4.png"
              alt="product image"
              onClick={() => setSelectedImage("/product/steel-4.png")}
              className={cn(
                "w-32 shadow-md cursor-pointer",
                selectedImage === "/product/steel-4.png"
                  ? "border border-primary"
                  : ""
              )}
            />
          </div> */}
          <div className="w-full h-full flex flex-col gap-6 pt-10">
            <div className="w-full h-full flex flex-col gap-1">
              <h1 className="text-xl">Reviews</h1>
              <Separator />
            </div>
          <div className="w-full h-full flex flex-col">
            {product.reviews.map((review, index) => {
              return (
                <Card key={index} className="bg-transparent border-none shadow-none border-b border-b-muted">
                  <CardHeader className="w-full flex flex-row justify-start items-center gap-2 p-0 py-2">
                      <span className="w-8 h-8 rounded-full bg-primary/60" />
                      <CardTitle className="flex flex-col justify-start items-start pt-0 mt-0">
                        <span className="flex justify-start items-center gap-2">
                          <span className="text-base font-medium">{review.reviewerName}</span>
                          <span className="text-xs text-muted-foreground font-normal">
                            {review.date}
                          </span>
                        </span>
                        <CardDescription className="w-full h-full flex justify-start items-center gap-2 text-muted-foreground text-sm leading-3">
                          <Image
                            src="/icons/stars-5.svg"
                            alt="rating"
                            width={0}
                            height={0}
                            className="w-16"
                          />
                          <span>{review.starRating}</span>
                        </CardDescription>
                      </CardTitle>
                  </CardHeader>
                      <CardContent className="pt-0 pl-10 text-sm">
                        {review.review}
                      </CardContent>
                </Card>
              );
            })}
          </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-10">
          <div className="w-full h-full flex flex-col gap-8">
            <div className="w-full h-full flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-muted/80 rounded-full" />
                {product.seller.name}
              </span>
              <span className="text-muted-foreground">{product.productId}</span>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <h1 className="text-2xl">{product.productName}</h1>
              <div className="w-full h-full flex justify-start items-center gap-2 text-muted-foreground text-sm">
                <Image
                  src="/icons/stars-5.svg"
                  alt="rating"
                  width={0}
                  height={0}
                  className="w-24"
                />
                <span>{product.rating}</span>
                <span>(2.3k reviews)</span>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start -gap-2">
              <div className="text-3xl font-bold">
                $<span>{product.price}</span>/{product.unit}
              </div>
              {product.discount?.percentage && (
                <div className="flex flex-col gap-2">
                  <span className="text-muted-foreground/80 text-sm flex justify-start items-center">
                    <Button
                      variant="ghost"
                      className="text-primary py-0 px-0 pr-1 cursor-default"
                    >
                      {product.discount ? `${product.discount.percentage}` : ""}
                      % off
                    </Button>
                    <span>
                      On minimum Order Quantity of{" "}
                      {product.minimumOrderQuantity} {product.unit} valid till{" "}
                      {product.discount?.validTill}
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground/80 text-sm">Quantity</span>
              <div className="flex justify-start items-center gap-2 text-xl">
                <Button variant="ghost" onClick={decrementQuantity}>
                  <Image
                    src="/icons/remove.svg"
                    alt="rating"
                    width={0}
                    height={0}
                    className="w-8"
                  />
                </Button>
                <span>{quantity}</span>
                <Button variant="ghost" onClick={incrementQuantity}>
                  <Image
                    src="/icons/add.svg"
                    alt="rating"
                    width={0}
                    height={0}
                    className="w-8"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <div className="w-full flex justify-between gap-6">
                <Button
                  size="lg"
                  className="w-full flex justify-center items-center gap-1 font-bold"
                  onClick={() => addToCart(product)}
                >
                  <Image
                    src="/icons/add-shopping-cart.svg"
                    alt="rating"
                    width={0}
                    height={0}
                    className="w-6"
                  />
                  <span>ADD TO CART</span>
                </Button>
                <Button className="bg-muted-foreground hover:bg-muted-foreground/80">
                  <Image
                    src="/icons/favorite-border.svg"
                    alt="rating"
                    width={0}
                    height={0}
                    className="w-6"
                  />
                </Button>
              </div>
              <div className="flex justify-start items-center gap-2 text-xs">
                <Image
                  src="/icons/local-shipping.svg"
                  alt="rating"
                  width={0}
                  height={0}
                  className="w-4"
                />
                <span>Shipping free for order above $900</span>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="info" className="w-full z-20">
                <TabsList>
                  <TabsTrigger value="info">INFO</TabsTrigger>
                  <TabsTrigger value="delivery">DELIVERY</TabsTrigger>
                  <TabsTrigger value="seller">SELLER DETAILS</TabsTrigger>
                </TabsList>
                <Separator className="relative -top-[8px] z-10" />
                <TabsContent value="info" className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-base font-medium pb-1 text-muted-foreground">
                      Product Details
                    </h2>
                    <table className="w-full border-none text-sm">
                      <tbody className="border-none">
                        {product.productName && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Product Name
                            </td>
                            <td className="py-1 px-4">{product.productName}</td>
                          </tr>
                        )}
                        {product.productIdentification && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Product Identification
                            </td>
                            <td className="py-1 px-4">
                              {product.productIdentification}
                            </td>
                          </tr>
                        )}
                        {product.productType && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Product Type
                            </td>
                            <td className="py-1 px-4">{product.productType}</td>
                          </tr>
                        )}
                        {product.purityComposition && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Purity Composition
                            </td>
                            <td className="py-1 px-4">
                              {product.purityComposition}
                            </td>
                          </tr>
                        )}
                        {product.manufactureDate && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Manufacture Date
                            </td>
                            <td className="py-1 px-4">
                              {product.manufactureDate}
                            </td>
                          </tr>
                        )}
                        {product.expiryDate && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Expiry Date
                            </td>
                            <td className="py-1 px-4">{product.expiryDate}</td>
                          </tr>
                        )}
                        {product.category && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">Category</td>
                            <td className="py-1 px-4">{product.category}</td>
                          </tr>
                        )}
                        {product.subCategory && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Sub Category
                            </td>
                            <td className="py-1 px-4">{product.subCategory}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {(product.physicalProperties ||
                    product.chemicalProperties) && (
                    <div>
                      <h2 className="text-base font-medium pb-1 text-muted-foreground">
                        Physical & Chemical Properties
                      </h2>
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <tbody>
                          {product.physicalProperties?.weight && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Weight</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.weight}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.width && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Widt1</td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.width}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.height && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Heigh1</td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.height}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.length && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Length</td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.length}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.color && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Color</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.color}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.diameter && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">
                                Diamete1
                              </td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.diameter}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.thickness && (
                            <tr>
                              <td className="py-1 px-4 font-medium">
                                Thicknes1
                              </td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.thickness}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.dimensions && (
                            <tr>
                              <td className="py-1 px-4 font-medium">
                                Dimension1
                              </td>
                              <td className="py-2 px-4">
                                {product.physicalProperties?.dimensions}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.density && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Density</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.density}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.volume && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Volume</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.volume}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.capacity && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">
                                Capacity
                              </td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.capacity}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.power && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Power</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.power}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.viscosity && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">
                                Viscosity
                              </td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.viscosity}
                              </td>
                            </tr>
                          )}
                          {product.physicalProperties?.voltage && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">Voltage</td>
                              <td className="py-1 px-4">
                                {product.physicalProperties?.voltage}
                              </td>
                            </tr>
                          )}
                          {product.chemicalProperties?.carbonContent && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">
                                Carbon Content
                              </td>
                              <td className="py-1 px-4">
                                {product.chemicalProperties?.carbonContent}
                              </td>
                            </tr>
                          )}
                          {product.chemicalProperties?.pH && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">pH</td>
                              <td className="py-1 px-4">
                                {product.chemicalProperties?.pH}
                              </td>
                            </tr>
                          )}
                          {product.chemicalProperties?.zincCoating && (
                            <tr className="border-b border-gray-300">
                              <td className="py-1 px-4 font-medium">pH</td>
                              <td className="py-1 px-4">
                                {product.chemicalProperties?.zincCoating}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="delivery">
                  <div>
                    <h2 className="font-semibold">
                      STANDARTD TRACKED DELIVERY
                    </h2>
                    <ul className="flex flex-col gap-2 list-disc list-inside indent-4 text-muted-foreground">
                      <li>
                        {product.deliveryTime} from the dispatch confirmation
                        email
                      </li>
                      <li>
                        Free for order above $
                        {product.shippingCost
                          ? product.shippingCost * 5
                          : "900"}
                      </li>
                      <li>
                        ${product.shippingCost ? product.shippingCost : "50"}{" "}
                        for under $
                        {product.shippingCost
                          ? product.shippingCost * 5
                          : "900"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-semibold">EXPRESS TRACKED DELIVERY</h2>
                    <ul className="flex flex-col gap-2 list-disc list-inside indent-4 text-muted-foreground">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li>
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="seller">
                  <div>
                    <h2 className="text-base font-medium pb-1 text-muted-foreground">
                      Seller Info
                    </h2>
                    <table className="w-full border-none text-sm">
                      <tbody className="border-none">
                        {product.seller.name && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">Name</td>
                            <td className="py-1 px-4">{product.seller.name}</td>
                          </tr>
                        )}
                        {product.seller.phone && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">Phone</td>
                            <td className="py-1 px-4">
                              {product.seller.phone}
                            </td>
                          </tr>
                        )}
                        {product.seller.contactInfo && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">
                              Contact Info
                            </td>
                            <td className="py-1 px-4">
                              {product.seller.contactInfo}
                            </td>
                          </tr>
                        )}
                        {product.seller.address && (
                          <tr className="border-b border-gray-300">
                            <td className="py-1 px-4 font-medium">Address</td>
                            <td className="py-1 px-4">
                              {product.seller.address}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="flex flex-col justify-start items-start gap-4 pt-10 w-full">
                <div className="w-full flex justify-between items-center">
                  <h1 className="w-full text-xl font-medium capitalize">
                    Similar Products
                  </h1>
                </div>
                {/* <div className="flex items-center gap-2"> */}
                {/* <Button variant='default' className="w-12 h-12 rounded-full" onClick={() => scroll('left')} >
            <img src="/icons/arrow-back.svg"  alt='dasd' className="w-10"/>
          </Button> */}
                <div
                  className="w-full flex justify-start items-center gap-8 select-none overflow-y-scroll scroll-smooth"
                >
                  {simillarProduct && simillarProduct.map((item, index) => {
                    const path = encodeURIComponent(item.productName + '--' + item.productId)
                    return (
                      <Link href={`/product/${path}`} key={index} >
                      <Card
                      className=" max-w-[220px] min-w-[230px] rounded-sm select-none cursor-pointer relative"
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
  );
};

export default ProductView;
