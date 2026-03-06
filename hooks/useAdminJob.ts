import { useQuery } from '@tanstack/react-query'
import { fetchAdminJobs } from '@/api/adminJobs'

const useAdminJobs = () => {
    return useQuery({
        queryKey: ['admin-jobs'],
        queryFn: () => fetchAdminJobs(),
        staleTime: 1000 * 60 * 2,
        retry: 2,
    })
}

export default useAdminJobs