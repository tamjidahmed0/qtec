export interface Job {
    _id: string
    title: string
    company: string
    company_logo?: string
    location: string
    category: string
    job_type: string
    description: string
    image:string
    salary?: string
    created_at: string
}


export interface Application {
    _id: string
    name: string
    job_title: string
    email: string
    resume_link: string
    cover_note: string
    created_at: string
}


export interface ApplyFormValues {
    job_id: string,
    name: string
    resume_link: string
    cover_note: string
    email: string
}