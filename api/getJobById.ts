const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const getJobById = async (id: string) => {
  const res = await fetch(`${API}/api/jobs/${id}`)
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Failed to fetch job')
  }
  return res.json()
}

export default getJobById