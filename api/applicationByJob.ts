import Cookies from "js-cookie"

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const applicationByJobId = async (id: string) => {

  const token = Cookies.get('token')

  const res = await fetch(`${API}/api/jobs/${id}/applications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Failed to fetch job')
  }
  return res.json()
}

export default applicationByJobId