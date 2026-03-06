"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import deleteJobs from "@/api/deleteJobs"

const useDeleteJob = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id }: { id: string }) => deleteJobs({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-jobs'] })
        },
        onError: (error: any) => {
            console.error(error.message)
        }
    })
}

export default useDeleteJob