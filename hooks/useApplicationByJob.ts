import { useQuery } from "@tanstack/react-query"
import applicationByJobId from "@/api/applicationByJob"


const useApplicationsByJob = (job_id: string) => {
    return useQuery({
        queryKey: ['applications', job_id],
        queryFn: () => applicationByJobId(job_id),
        enabled: !!job_id,
    })
}

export default useApplicationsByJob