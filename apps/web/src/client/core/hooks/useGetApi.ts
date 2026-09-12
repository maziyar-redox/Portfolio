import { AxiosClient } from "@/client/core/api/services";

// Importing useQuery for fetching data from source
import { useQuery } from "@tanstack/react-query";

function useGetApi({
    params = {},
    options = {},
    cacheKey = "default",
    endpoint = "/"
}: {
    params: object;
    options: object;
    cacheKey: string;
    endpoint: string;
}) {
    // Retriving total news and article count
    return useQuery({
        queryKey: [
            cacheKey,
            params,
            endpoint
        ],
        queryFn: async ({ queryKey }) => {
            const request = await AxiosClient.get(queryKey[2] as string, {
                params: queryKey[1],
            });
            return request.data;
        },
        ...options,
    });
};

export { useGetApi };