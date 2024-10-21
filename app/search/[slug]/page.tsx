

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { getSearch } from "@/actions/search/search";
import SearchResults from '@/components/search-results';


const BrowseSearchedProduct = async ({ params }: { params: { slug: string } }) => {

  const searchKeyword = decodeURIComponent(params.slug)
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["useGetSearchResults"],
    // @ts-expect-error: will solve this one later
    queryFn: getSearch,
  })
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex mt-8 relative">
        <aside className=" w-72 h-full desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
        {/* <FilterSidebar /> */}
        </aside>
        <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
        <SearchResults searchKey={searchKeyword} />
        </div>
    </section>
        </HydrationBoundary>
    </div>
  )
}

export default BrowseSearchedProduct