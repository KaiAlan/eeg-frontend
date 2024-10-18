"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";

const FormSchema = z.object({
    searchKey: z.string(),
})

export function SearchBox() {
    const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        searchKey: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/search/${data.searchKey}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full flex justify-end items-center">
        <FormField
          control={form.control}
          name="searchKey"
          render={({ field }) => (
            <FormItem className="w-2/3 h-full">
              <FormControl>
              <Input
              {...field}
              type="text"
              className="h-full rounded-lg bg-white border-muted border-r-0 text-lg rounded-r-none"
            />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <Button
            type='submit'
              variant="menu"
              className="bg-white h-full rounded-lg rounded-l-none hover:border-white hover:bg-primary border-muted border-l-0"
            >
              <Image
                src="/icons/search.svg"
                alt="Logo"
                width={0}
                height={0}
                className="w-6 z-[70] font-bold text-white"
              />
            </Button>
      </form>
    </Form>
  )
}
