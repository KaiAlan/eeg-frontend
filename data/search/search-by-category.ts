
import { getSearchResultsByCategory } from "@/actions/search/search-category";
import { useQuery } from "@tanstack/react-query";

export function useGetSearchResults (value: string) {
    return useQuery({
        queryKey: ["getSearchResultsByCategory"],
        queryFn: async () => await getSearchResultsByCategory({value}),
    })
}