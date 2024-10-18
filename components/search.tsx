"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getSearch } from "@/actions/search/search";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";

const FormSchema = z.object({
  searchKey: z.string(),
});

export function SearchBox() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchKey: "",
    },
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handle search key changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (form.getValues("searchKey").length > 0) {
        setLoading(true);
        const results = await getSearch({ value: form.getValues("searchKey") });

        if (results.length > 0) {
          const only_names = results.map(
            (product, index, array) => product.name
          );
          setSuggestions(only_names);
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
        setLoading(false);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    // Debounce fetching to avoid too many requests
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [form.watch("searchKey")]);

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/search/${data.searchKey}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full flex justify-end items-center relative"
      >
        <FormField
          control={form.control}
          name="searchKey"
          render={({ field }) => (
            <FormItem className="w-2/3 h-full relative">
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="h-full rounded-lg bg-white border-muted border-r-0 text-lg rounded-r-none"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 200)
                  } // Add a slight delay to allow selection
                />
              </FormControl>
              <FormMessage />

              {/* Dropdown for suggestions */}
              {showSuggestions && !loading && suggestions.length > 0 && (
                <ul className="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-48 overflow-auto z-50">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onMouseDown={() => {
                        form.setValue("searchKey", suggestion);
                        setShowSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
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
  );
}
