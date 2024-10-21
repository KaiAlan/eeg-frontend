'use client'

// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query'

// import { getSearch } from "@/actions/search/search";
import DiscountedProductsPage from '@/components/discounted-product';
import FilterSidebar from '@/components/filter';
import { AllProductsData } from '@/data/dummy/product';
// import { useFilterSellersStore } from '@/stores/filter-store';
// import { useEffect } from 'react';
// import SearchResults from '@/components/search-results';


const BrowseDiscountedProducts = () => {

  // const { filterSellers, update } = useFilterSellersStore()

  // const sellers = AllProductsData.map((product) => product.seller.name)
  // useEffect(() => {
  //   if(!filterSellers) {
  //     update(sellers)
  //   }
  // },[filterSellers])

  const getSellersBySubcategory = () => {
    const sellers = AllProductsData.map((product) => ({
      id: product.seller.name,
      label: product.seller.name,
    }));

    return sellers;
  };

  // Usage
  const sellers = getSellersBySubcategory();

  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ["useGetSearchResults"],
  //   // @ts-expect-error: will solve this one later
  //   queryFn: getSearch,
  // })
  return (
    <div>
       <section className="flex mt-8 relative">
        <aside className=" w-72 h-full max-h-screen desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
        <FilterSidebar sellers={sellers} />
        </aside>
        <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
        <DiscountedProductsPage />
        </div>
    </section>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        
        {/* </HydrationBoundary> */}
    </div>
  )
}

export default BrowseDiscountedProducts