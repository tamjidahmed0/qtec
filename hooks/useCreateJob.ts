"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createJob, JobData } from "@/api/jobs"

export const useCreateJob = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: JobData) => createJob(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] })
      console.log("Job created successfully")
    },

    onError: (error: any) => {
      console.error(error.message)
    }
  })
}