

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { getSearch } from "@/actions/search/search";
import SearchResults from '@/components/search-results';


const BrowseSearchedProduct = async ({ params }: { params: { slug: string } }) => {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["useGetSearchResults"],
    // @ts-expect-error: will solve this one later
    queryFn: getSearch,
  })
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchResults searchKey={params.slug} />
        </HydrationBoundary>
    </div>
  )
}

export default BrowseSearchedProduct