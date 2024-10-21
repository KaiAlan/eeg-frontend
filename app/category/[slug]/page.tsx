

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import SearchByCategory from "@/components/search-by-category";
import { getSearchResultsByCategory } from "@/actions/search/search-category";
import FilterSidebar from "@/components/filter";
import { AllProductsData } from "@/data/dummy/product";

const BrowseProduct = async ({ params }: { params: { slug: string } }) => {
  const category = decodeURIComponent(params.slug);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getSearchResultsByCategory"],
    // @ts-expect-error: will solve this one later
    queryFn: getSearchResultsByCategory,
  });

  const getSellersBySubcategory = (subcategory: string) => {
    const sellers = AllProductsData.filter(
      (product) => product.subCategory === subcategory
    ).map((product) => ({
      id: product.seller.name,
      label: product.seller.name,
    }));

    return sellers;
  };

  // Usage
  const sellers = getSellersBySubcategory(category);

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <section className="flex mt-8 relative">
          <aside className=" w-72 h-full desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
            <FilterSidebar sellers={sellers} />
          </aside>
          <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
            <SearchByCategory category={category} />
          </div>
        </section>
      </HydrationBoundary>
    </div>
  );
};

export default BrowseProduct;
