'use client'
import { useQuery } from '@tanstack/react-query'
import getJobById from '@/api/getJobById'

const useJobById = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => getJobById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  })
}

export default useJobById