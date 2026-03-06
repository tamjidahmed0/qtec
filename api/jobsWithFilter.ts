import Cookies from "js-cookie"

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'


export const jobsWithFilter = async ({ search, location }: { search: string, location: string }) => {
    const token = Cookies.get('token')
    const params = new URLSearchParams()
    if (search) params.set('search', search)
    if (location) params.set('location', location)

    const res = await fetch(`${API}/api/jobs?${params.toString()}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    if (!res.ok) throw new Error('Failed to fetch jobs')
    return res.json()
}