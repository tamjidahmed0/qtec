'use client'
import { Card, Table, Button, Space, Tag, Badge, Avatar, Tooltip, Popconfirm, Typography } from 'antd'
import { DeleteOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import type { BadgeProps } from 'antd'
import { Job } from '@/types/types'

const { Text } = Typography

const AVATAR_COLORS = ['#4640DE', '#7C3AED', '#DB2777', '#0891B2', '#059669', '#D97706']

const TYPE_COLOR: Record<string, BadgeProps['status']> = {
    'Full Time': 'success',
    'Part Time': 'warning',
    'Contract': 'processing',
    'Internship': 'default',
}

const CAT_COLOR: Record<string, string> = {
    'Design': 'magenta', 'Marketing': 'orange', 'Engineering': 'blue',
    'Sales': 'green', 'Finance': 'gold', 'HR': 'purple', 'Other': 'default',
}

interface Props {
    jobs: Job[]
    isLoading: boolean
    onDelete: (id: string) => void
}

const JobsTab = ({ jobs, isLoading, onDelete }: Props) => {
    const columns: ColumnsType<Job> = [
        {
            title: 'Job Title',
            dataIndex: 'title',
            key: 'title',
            render: (title: string, record: Job) => (
                <div>
                    <Text strong className='text-[#15192A]! text-[14px]!'>{title}</Text>
                    <div>
                        <Text type='secondary' className='text-[12px]!'>
                            <CalendarOutlined className='mr-1' />
                            {new Date(record.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            responsive: ['sm'],
            render: (company: string, record: Job) => (
                <Space>
                    {record.image ? (
                        <div className='w-7.5 h-7.5 rounded-lg border border-[#E8EAF0] bg-white flex items-center justify-center overflow-hidden shrink-0'>
                            <img src={record.image} alt={company} className='w-full h-full object-contain' />
                        </div>
                    ) : (
                        <Avatar
                            size={30}
                            className='text-[12px]! font-bold! shrink-0!'
                            style={{ backgroundColor: AVATAR_COLORS[company.charCodeAt(0) % AVATAR_COLORS.length] }}
                        >
                            {company[0]}
                        </Avatar>
                    )}
                    <Text className='text-[14px]!'>{company}</Text>
                </Space>
            ),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            responsive: ['md'],
            render: (location: string) => (
                <Space size={4}>
                    <EnvironmentOutlined className='text-[#9AA0B0]! text-[13px]!' />
                    <Text type='secondary' className='text-[13px]!'>{location}</Text>
                </Space>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            responsive: ['lg'],
            render: (cat: string) => (
                <Tag color={CAT_COLOR[cat] ?? 'default'} className='rounded-lg! font-semibold!'>{cat}</Tag>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'job_type',
            key: 'job_type',
            render: (type: string) => (
                <Badge status={TYPE_COLOR[type] ?? 'default'} text={<Text className='text-[13px]! font-semibold!'>{type}</Text>} />
            ),
        },
        {
            title: '',
            key: 'action',
            width: 60,
            render: (_: unknown, record: Job) => (
                <Popconfirm
                    title='Delete this job?'
                    description='This action cannot be undone.'
                    onConfirm={() => onDelete(record._id)}
                    okText='Delete'
                    cancelText='Cancel'
                    okButtonProps={{ danger: true }}
                >
                    <Tooltip title='Delete'>
                        <Button type='text' danger icon={<DeleteOutlined />} size='small' />
                    </Tooltip>
                </Popconfirm>
            ),
        },
    ]

    return (
        <Card
            className='rounded-2xl! border-[#E8EAF0]! shadow-[0_1px_4px_rgba(0,0,0,0.04)]!'
            styles={{ body: { padding: 0 } }}
        >
            <Table<Job>
                dataSource={jobs}
                columns={columns}
                rowKey='_id'
                loading={isLoading}
                pagination={{ pageSize: 8, showSizeChanger: false, style: { padding: '12px 24px' } }}
                className='rounded-2xl!'
                locale={{
                    emptyText: (
                        <div className='py-16 text-center'>
                            <div className='text-4xl mb-2'>📭</div>
                            <Text type='secondary'>No jobs posted yet</Text>
                        </div>
                    )
                }}
            />
        </Card>
    )
}

export default JobsTab