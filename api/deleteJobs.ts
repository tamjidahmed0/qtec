import Cookies from "js-cookie"

const deleteJobs = async ({ id }: { id: string }) => {
    const token = Cookies.get('token')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })

    if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message || "failed")
    }

    return res.json()

}

export default deleteJobs