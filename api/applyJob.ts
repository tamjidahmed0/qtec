import { ApplyFormValues } from "@/types/types"


const applyJob = async (applicationContent: ApplyFormValues) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationContent),
    })

    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || 'Failed to create job')
    }

    return res.json()



}

export default applyJob