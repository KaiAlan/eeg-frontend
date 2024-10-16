
import { getSearch } from "@/actions/search/search";
import { useQuery } from "@tanstack/react-query";

export function useGetSearchResults (value: string) {
    return useQuery({
        queryKey: ["getSearchResults"],
        queryFn: async () => await getSearch({value}),
    })
}