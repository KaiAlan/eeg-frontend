"use client";

import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cart = () => {
  const { items, addItem, removeItem, deleteItem } = useCartStore();
  const [subTotal, setSubtotal] = useState(0);

  // Handle increment
  const incrementQuantity = (id: string) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      // Create a new item with incremented quantity
      addItem({ ...item, quantity: 1 });
    }
  };

  // Handle decrement with minimum value of 1
  const decrementQuantity = (id: string) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      if (item.quantity > 1) {
        // Decrease quantity by 1
        removeItem({ ...item, quantity: 1 });
      } else {
        // Remove item if quantity is 1
        deleteItem(id);
      }
    }
  };

  useEffect(() => {
    const total = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [items]);

  return (
    <SheetContent
      side="right"
      className="min-w-[600px] w-full flex flex-col justify-between max-h-screen pb-0"
    >
      <div className="flex flex-col w-full overflow-y-scroll">
        <SheetClose className="flex flex-row justify-start items-center gap-1 text-[#686E6F] pb-2">
          <ChevronLeftIcon />
          <span>Keep Shoping</span>
        </SheetClose>
        <Separator />
        <SheetHeader className="flex flex-row justify-between items-start pt-2">
          <SheetTitle>CART</SheetTitle>
          <SheetDescription className="pt-0">
            {items.reduce((total, item) => total + item.quantity, 0)} items
          </SheetDescription>
        </SheetHeader>

        <div className=" w-full h-full flex flex-col justify-start items-start gap-10 pt-6">
          {items.length > 0 ? (
            items.map((item, index) => {
              return (
                <div key={index} className="w-full flex justify-between items-start">
                  <div className="w-full flex justify-between items-start gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={0}
                      height={0}
                      className="w-20 h-20"
                    />
                    <div className="flex flex-col w-44 justify-start items-start">
                      <span className="text-lg leading-5">{item.name}</span>
                      <span className="text-muted-foreground text-xs">
                        {item.id}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-start items-center text-xl">
                        <Button
                          variant="ghost"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          <Image
                            src="/icons/remove.svg"
                            alt="rating"
                            width={0}
                            height={0}
                            className="w-6"
                          />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="ghost"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          <Image
                            src="/icons/add.svg"
                            alt="rating"
                            width={0}
                            height={0}
                            className="w-6"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">
                      <span>${item.price * item.quantity}</span>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => deleteItem(item.id)}
                      className="py-0 h-6"
                    >
                      <Image
                        src="/icons/clear.svg"
                        alt="rating"
                        width={0}
                        height={0}
                        className="w-6"
                      />
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <span className="w-full h-full flex justify-center items-center text-muted-foreground">
              Your Cart is Empty.
            </span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-6 py-6 bg-background">
        <Separator className="" />
        <div className="w-full flex flex-col justify-start items-start gap-3 text-muted-foreground">
          <div className="w-full flex justify-between items-start">
            <span>Item Subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="w-full flex justify-between items-start">
            <span>Shipping Cost</span>
            <span>{subTotal > 500 || subTotal === 0 ? "$0" : "$50"}</span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between items-start text-lg font-semibold">
            <span>Estimated Total</span>
            <span>
              ${subTotal > 500 || subTotal === 0 ? subTotal : subTotal + 50}
            </span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      </div>
    </SheetContent>
  );
};

export default Cart;
