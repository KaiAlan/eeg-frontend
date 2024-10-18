

// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query'

// import { getSearch } from "@/actions/search/search";
import DiscountedProductsPage from '@/components/discounted-product';
// import SearchResults from '@/components/search-results';


const BrowseDiscountedProducts = async () => {

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