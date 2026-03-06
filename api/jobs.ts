import Cookies from "js-cookie"


export interface JobData {
  title: string
  company: string
  location: string
  category: string
  job_type: string
  description: string
  salary: string
  image: File
}

export const createJob = async (data: JobData) => {

  const token = Cookies.get('token')



  const formData = new FormData()

  formData.append('title', data.title)
  formData.append('company', data.company)
  formData.append('location', data.location)
  formData.append('category', data.category)
  formData.append('job_type', data.job_type)
  formData.append('description', data.description)
  formData.append('salary', data.salary)
  formData.append('image', data.image)







  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Failed to create job')
  }

  return res.json()
}