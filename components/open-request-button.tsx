"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  //   DialogClose,
  DialogContent,
  DialogDescription,
  //   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
// import Link from "next/link";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { openRequestSchema } from "@/schemas/open-request";
import { useOpenRequestStore } from "@/stores/open-request-store";
import { cn } from "@/lib/utils";
const OpenRequestButton = ({className, children}:{className?: string; children: React.ReactNode}) => {
    const router = useRouter()
    const { addRequest } = useOpenRequestStore();
  
  
    const form = useForm<z.infer<typeof openRequestSchema>>({
      resolver: zodResolver(openRequestSchema),
      defaultValues: {
        productCategory: "",
        productSpecification: "",
        quantity: "",
        createdAt: new Date(),
        status: 'in progress'
      },
    });
  
  
    function onSubmit(values: z.infer<typeof openRequestSchema>) {
  
      values.createdAt = new Date()
      addRequest(values)
  
      router.push('/product-request')
      router.refresh()
    }
  return (
    <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default"
              className={cn("", className)}
            >
              {children}
            </Button>
          </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] px-[200px]">
        <DialogHeader className="w-full flex justify-center items-center">
          <DialogTitle className="text-2xl font-[600]">
            Open A New Product Request
          </DialogTitle>
          <DialogDescription>
            Fill up this form with the required fileds to open a new product
            request.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full items-center gap-6 space-x-2 pt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full items-center gap-6 space-x-2 pt-6"
            >
              <FormField
                control={form.control}
                name="productCategory"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Product Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Steel Pipes" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productSpecification"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Describe Product Specification</FormLabel>
                    <FormControl>
                      <Textarea
                      {...field}
                        placeholder="We are seeking high-quality stainless steel, specifically Grade 304, to be used in the manufacturing of food processing equipment."
                        className="min-h-40"
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>How much quantity required?</FormLabel>
                    <FormControl>
                      <Input placeholder="367 Pound" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="px-3 text-lg py-4">
                <span className="sr-only">Continue</span>
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OpenRequestButton