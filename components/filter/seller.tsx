"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { useFilterSellersStore } from "@/stores/filter-store";

const FormSchema = z.object({
  items: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .optional(),
});

export function FilterSellerCheckbox({
  sellers,
}: {
  sellers: {
    id: string;
    label: string;
  }[];
}) {

  const {  update } = useFilterSellersStore()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if(data.items) {
      update(data.items)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="max-h-[200px] overflow-y-scroll">
              <div className="mb-4">
                <FormLabel className="text-base">Available Sellers</FormLabel>
                <FormDescription className="text-xs">
                  Select the sellers you want to see products of.
                </FormDescription>
              </div>
              {sellers && sellers.map((item, idx) => (
                <FormField
                  key={idx}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...(field.value ?? sellers),
                                    item.id,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <Button type="submit">Filter</Button>
      </form>
    </Form>
  );
}
