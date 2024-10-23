'use client'

// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query'

// import { getSearch } from "@/actions/search/search";
import DiscountedProductsPage from '@/components/discounted-product';

// import { useFilterSellersStore } from '@/stores/filter-store';
// import { useEffect } from 'react';
// import SearchResults from '@/components/search-results';


const BrowseDiscountedProducts = () => {


  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ["useGetSearchResults"],
  //   // @ts-expect-error: will solve this one later
  //   queryFn: getSearch,
  // })
  return (
    <div>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        <DiscountedProductsPage />
        {/* </HydrationBoundary> */}
    </div>
  )
}

export default BrowseDiscountedProducts