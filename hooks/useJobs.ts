import { useQuery } from '@tanstack/react-query'
import { jobsWithFilter } from '@/api/jobsWithFilter'

const useJobs = ({ search = '', location = '' } = {}) => {
    return useQuery({
        queryKey: ['jobs', search, location],
        queryFn: () => jobsWithFilter({ search, location }),
     
    })
}

export default useJobs