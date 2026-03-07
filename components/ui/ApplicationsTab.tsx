'use client'
import { useState } from 'react'
import { Card, Avatar, Typography, Tag, Spin, Button, Breadcrumb, Descriptions, Empty } from 'antd'
import { UserOutlined, MailOutlined, LinkOutlined, ArrowLeftOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons'
import { Job } from '@/types/types'
import useApplicationsByJob from '@/hooks/useApplicationByJob'
import useApplicationById from '@/hooks/useApplicationById'

const { Text, Title, Paragraph } = Typography

const AVATAR_COLORS = ['#4640DE', '#7C3AED', '#DB2777', '#0891B2', '#059669', '#D97706']

// ── Single Application Detail ─────────────────────────────────────────────────
const ApplicationDetail = ({ id, onBack }: { id: string; onBack: () => void }) => {
    const { data, isLoading } = useApplicationById(id)
    const app = data?.data

    if (isLoading) return (
        <div className='flex justify-center py-16'>
            <Spin size='large' />
        </div>
    )

    if (!app) return <Empty description='Application not found' />

    const colorIndex = app.name.charCodeAt(0) % AVATAR_COLORS.length

    return (
        <div>
            <Button
                type='text'
                icon={<ArrowLeftOutlined />}
                onClick={onBack}
                className='text-[#4640DE]! font-semibold! px-0! mb-4'
            >
                Back to Applications
            </Button>

            <Card className='rounded-2xl! border-[#E8EAF0]!'>
                {/* Header */}
                <div className='flex items-center gap-4 mb-6 pb-6 border-b border-[#F0F1F5]'>
                    <Avatar
                        size={56}
                        className='shrink-0! font-bold! text-[22px]!'
                        style={{ background: AVATAR_COLORS[colorIndex] }}
                    >
                        {app.name[0].toUpperCase()}
                    </Avatar>
                    <div>
                        <Title level={4} className='m-0! text-[#15192A]!'>{app.name}</Title>
                        <Text type='secondary' className='text-[13px]!'>{app.email}</Text>
                    </div>
                    <Tag color='blue' className='ml-auto! rounded-lg! font-semibold!'>Applied</Tag>
                </div>

                {/* Details */}
                <Descriptions
                    column={1}
                    styles={{ label: { fontWeight: 700, color: '#9AA0B0', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' } }}
                >
                    <Descriptions.Item label={<span><UserOutlined className='mr-1.5' />Full Name</span>}>
                        <Text strong className='text-[#15192A]!'>{app.name}</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label={<span><MailOutlined className='mr-1.5' />Email</span>}>
                        <a href={`mailto:${app.email}`} className='text-[#4640DE] font-semibold'>{app.email}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label={<span><LinkOutlined className='mr-1.5' />Resume</span>}>
                        <a href={app.resume_link} target='_blank' rel='noreferrer'
                            className='text-[#4640DE] font-semibold break-all'>
                            {app.resume_link}
                        </a>
                    </Descriptions.Item>
                    <Descriptions.Item label={<span><CalendarOutlined className='mr-1.5' />Applied On</span>}>
                        <Text className='text-[#15192A]!'>
                            {new Date(app.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </Text>
                    </Descriptions.Item>
                    <Descriptions.Item label={<span><FileTextOutlined className='mr-1.5' />Cover Note</span>}>
                        <Paragraph className='text-[#515B6F]! leading-relaxed! mb-0! whitespace-pre-line'>
                            {app.cover_note}
                        </Paragraph>
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    )
}

// ── Applications List for a Job ───────────────────────────────────────────────
const ApplicationsList = ({ job, onSelect, onBack }: { job: Job; onSelect: (id: string) => void; onBack: () => void }) => {
    const { data, isLoading } = useApplicationsByJob(job._id)
    const applications = data?.data ?? []

    if (isLoading) return (
        <div className='flex justify-center py-16'>
            <Spin size='large' />
        </div>
    )

    return (
        <div>
            <Button
                type='text'
                icon={<ArrowLeftOutlined />}
                onClick={onBack}
                className='text-[#4640DE]! font-semibold! px-0! mb-4'
            >
                Back to Jobs
            </Button>

            <div className='mb-4'>
                <Title level={5} className='m-0! text-[#15192A]!'>{job.title}</Title>
                <Text type='secondary' className='text-[13px]!'>
                    {applications.length} application{applications.length !== 1 ? 's' : ''}
                </Text>
            </div>

            {applications.length === 0 ? (
                <Card className='rounded-2xl! border-[#E8EAF0]!'>
                    <Empty description='No applications yet for this job' className='py-10' />
                </Card>
            ) : (
                <Card className='rounded-2xl! border-[#E8EAF0]!' styles={{ body: { padding: 0 } }}>
                    {applications.map((app: any, index: number) => {
                        const colorIndex = app.name.charCodeAt(0) % AVATAR_COLORS.length
                        return (
                            <div
                                key={app._id}
                                onClick={() => onSelect(app._id)}
                                className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors hover:bg-[#FAFBFF] ${index < applications.length - 1 ? 'border-b border-[#F0F1F5]' : ''}`}
                            >
                                <Avatar
                                    size={40}
                                    className='shrink-0! font-bold!'
                                    style={{ background: AVATAR_COLORS[colorIndex] }}
                                >
                                    {app.name[0].toUpperCase()}
                                </Avatar>
                                <div className='flex-1 min-w-0'>
                                    <Text strong className='text-[#15192A]! text-[14px]! block'>{app.name}</Text>
                                    <Text type='secondary' className='text-[13px]!'>
                                        <MailOutlined className='mr-1' />{app.email}
                                    </Text>
                                </div>
                                <div className='text-right shrink-0'>
                                    <Text type='secondary' className='text-[12px]! block'>
                                        {new Date(app.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </Text>
                                    <Tag color='blue' className='rounded-md! text-[11px]! mt-1'>Applied</Tag>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            )}
        </div>
    )
}

// ── Jobs Select List ──────────────────────────────────────────────────────────
const JobSelectList = ({ jobs, isLoading, onSelect }: { jobs: Job[]; isLoading: boolean; onSelect: (job: Job) => void }) => {
    if (isLoading) return (
        <div className='flex justify-center py-16'>
            <Spin size='large' />
        </div>
    )

    if (jobs.length === 0) return (
        <Card className='rounded-2xl! border-[#E8EAF0]!'>
            <Empty description='No jobs found' className='py-10' />
        </Card>
    )

    return (
        <div>
            <div className='mb-4'>
                <Title level={5} className='m-0! text-[#15192A]!'>Select a Job</Title>
                <Text type='secondary' className='text-[13px]!'>Click a job to see who applied</Text>
            </div>
            <Card className='rounded-2xl! border-[#E8EAF0]!' styles={{ body: { padding: 0 } }}>
                {jobs.map((job, index) => (
                    <div
                        key={job._id}
                        onClick={() => onSelect(job)}
                        className={`flex items-center justify-between px-5 py-3.5 cursor-pointer transition-colors hover:bg-[#FAFBFF] ${index < jobs.length - 1 ? 'border-b border-[#F0F1F5]' : ''}`}
                    >
                        <div>
                            <Text strong className='text-[#15192A]! text-[14px]! block'>{job.title}</Text>
                            <Text type='secondary' className='text-[13px]!'>{job.company} · {job.location}</Text>
                        </div>
                        <Tag color='blue' className='rounded-lg! font-semibold!'>{job.category}</Tag>
                    </div>
                ))}
            </Card>
        </div>
    )
}

// ── Main ApplicationsTab ──────────────────────────────────────────────────────
type View = 'jobs' | 'list' | 'detail'

interface Props {
    jobs: Job[]
    isLoading: boolean
}

const ApplicationsTab = ({ jobs, isLoading }: Props) => {
    const [view, setView] = useState<View>('jobs')
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)
    const [selectedAppId, setSelectedAppId] = useState<string | null>(null)

    const breadcrumbItems = [
        {
            title: (
                <span
                    onClick={() => setView('jobs')}
                    className={`cursor-pointer ${view !== 'jobs' ? 'text-[#4640DE]' : 'text-[#15192A]'}`}
                >
                    Jobs
                </span>
            )
        },
        ...(selectedJob ? [{
            title: (
                <span
                    onClick={() => setView('list')}
                    className={`cursor-pointer ${view === 'detail' ? 'text-[#4640DE]' : 'text-[#15192A]'}`}
                >
                    {selectedJob.title}
                </span>
            )
        }] : []),
        ...(view === 'detail' ? [{ title: 'Application Detail' }] : []),
    ]

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} className='mb-5 text-[13px]' />

            {view === 'jobs' && (
                <JobSelectList
                    jobs={jobs}
                    isLoading={isLoading}
                    onSelect={(job) => { setSelectedJob(job); setView('list') }}
                />
            )}
            {view === 'list' && selectedJob && (
                <ApplicationsList
                    job={selectedJob}
                    onSelect={(id) => { setSelectedAppId(id); setView('detail') }}
                    onBack={() => setView('jobs')}
                />
            )}
            {view === 'detail' && selectedAppId && (
                <ApplicationDetail
                    id={selectedAppId}
                    onBack={() => setView('list')}
                />
            )}
        </div>
    )
}

export default ApplicationsTab