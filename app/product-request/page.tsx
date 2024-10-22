"use client";

import OpenRequestButton from "@/components/open-request-button";
import OpenRequestCard from "@/components/open-request-card";
// import { SortButton } from '@/components/sort-button'
import { useOpenRequestStore } from "@/stores/open-request-store";
// import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OpenRequestSchemaType } from "@/schemas/open-request";

const ProductRequestPage = () => {
  const { requests } = useOpenRequestStore();
  const [sortedRequests, setSortedRequests] = React.useState<
    OpenRequestSchemaType[]
  >([]);
  const [sortOption, setSortOption] = React.useState("newest");

  // Sort the requests whenever the dropdown value or requests change
  React.useEffect(() => {
    let filtered = requests;

    if (sortOption === "in progress") {
      filtered = requests.filter((request) => request.status === "in progress");
    }

    if (sortOption === "closed") {
      filtered = requests.filter((request) => request.status === "closed");
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === "newest")
        return b.createdAt.getTime() - a.createdAt.getTime();
      if (sortOption === "oldest")
        return a.createdAt.getTime() - b.createdAt.getTime();

      return 0;
    });

    setSortedRequests(sorted);
  }, [sortOption, requests]);

  return (
    <div className="flex flex-col justify-start items-center gap-12 py-10">
      <div className="w-full flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort by</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={sortOption}
              onValueChange={setSortOption}
            >
              <DropdownMenuRadioItem value="newest">
                Newest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="oldest">
                Oldest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="in progress">
                In progress
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="closed">
                Closed
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <OpenRequestButton className="text-center flex items-center gap-1 ">
          <span className="text-lg">+</span>
          New Request
        </OpenRequestButton>
      </div>
      <div className="w-full flex flex-col justify-start items-start space-y-1 gap-4">
        {sortedRequests.length > 0 ? (
          sortedRequests.map((request, index) => {
            return <OpenRequestCard key={index} request={request} />;
          })
        ) : (
          <div className="w-full flex justify-center items-center">
            <p>No Requests Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductRequestPage;
