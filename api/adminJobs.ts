import Cookies from "js-cookie"

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export const fetchAdminJobs = async () => {


    const token = Cookies.get('token')

    const res = await fetch(`${API}/api/admin/jobs`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
    if (!res.ok) throw new Error('Failed to fetch jobs')
    return res.json()
}