

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import SearchByCategory from "@/components/search-by-category";
import { getSearchResultsByCategory } from "@/actions/search/search-category";

const BrowseProduct = async ({ params }: { params: { slug: string } }) => {
  const category = decodeURIComponent(params.slug);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getSearchResultsByCategory"],
    // @ts-expect-error: will solve this one later
    queryFn: getSearchResultsByCategory,
  });


  return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="w-full min-h-screen h-full flex flex-col justify-start items-start gap-10 pt-20">
            <SearchByCategory category={category} />
        </div>
      </HydrationBoundary>
  );
};

export default BrowseProduct;
