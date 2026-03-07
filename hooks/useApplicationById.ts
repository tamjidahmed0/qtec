import { useQuery } from "@tanstack/react-query"
import getApplicationById from "@/api/getApplicationById"

const useApplicationById = (id: string) => {
    return useQuery({
        queryKey: ['application', id],
        queryFn: () => getApplicationById(id),
        enabled: !!id,
    })
}

export default useApplicationById