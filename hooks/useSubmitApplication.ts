import { ApplyFormValues } from "@/types/types"
import { useMutation } from "@tanstack/react-query"
import applyJob from "@/api/applyJob"

export const useSubmitApplication = () => {
    return useMutation({
        mutationFn: (payload: ApplyFormValues) => applyJob(payload),
    })
}