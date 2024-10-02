"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const ProductView = ({ params }: { params: { slug: string } }) => {
  const productName = decodeURIComponent(params.slug);
  const [selectedImage, setSelectedImage] = useState("/product/steel-main.png");
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-16">
      <div className="w-full h-full flex justify-center items-start gap-6">
        <div className="w-[55%] h-full flex flex-col gap-4">
          <img src={selectedImage} alt="product image" className="w-full" />
          <div className="flex gap-4">
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
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col gap-6">
          <Card>
            <CardHeader className="text-wrap font-semibold">
              {productName}
            </CardHeader>
            <CardContent>
              <div className=" w-full flex justify-between text-muted-foreground">
                <span>Brand</span>
                <span>JHSS</span>
              </div>
              <div className=" w-full flex justify-between text-muted-foreground">
                <span>Grade</span>
                <span>200 series</span>
              </div>
              <div className=" w-full flex justify-between text-muted-foreground">
                <span>Size</span>
                <span>10-20mm</span>
              </div>
              <div className=" w-full flex justify-between text-muted-foreground">
                <span>Unit length</span>
                <span>5-280mm</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className=" w-full flex justify-between">
                <span className="font-semibold text-lg">$45/pound</span>
                <Button
                  variant="default"
                  className="uppercase rounded-full font-semibold"
                >
                  Add to cart
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="info" className="w-full z-20">
                <TabsList>
                  <TabsTrigger value="info">INFO</TabsTrigger>
                  <TabsTrigger value="delivery">DELIVERY</TabsTrigger>
                </TabsList>
                  <Separator className="relative -top-[8px] z-10" />
                <TabsContent value="info" className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-semibold">STANDARTD TRACKED DELIVERY</h2>
                    <ul className="flex flex-col gap-2 list-disc list-inside indent-4 text-muted-foreground">
                      <li>2-4 working days from the dispatch confirmation email</li>
                      <li>Free for order above $15</li>
                      <li>$3 for under $15</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-semibold">EXPRESS TRACKED DELIVERY</h2>
                    <ul className="flex flex-col gap-2 list-disc list-inside indent-4 text-muted-foreground">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="delivery">
                <h2>EXPRESS TRACKED DELIVERY</h2>
                  <ul className="list-disc list-inside indent-4 text-muted-foreground">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
