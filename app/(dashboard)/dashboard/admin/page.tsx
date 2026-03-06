'use client'
import { useState, useRef } from 'react'
import {
  Layout, Menu, Table, Button, Modal, Form, Input, Select,
  Tag, Avatar, Card, Typography, Space, Popconfirm,
  Badge, Tooltip, message, Drawer, Grid, Spin
} from 'antd'
import {
  PlusOutlined, DeleteOutlined, FileTextOutlined,
  BankOutlined, EnvironmentOutlined, MenuOutlined,
  CalendarOutlined, LinkOutlined, TeamOutlined,
  SolutionOutlined, BarChartOutlined, CheckCircleOutlined,
  AppstoreOutlined, CameraOutlined, CloseCircleOutlined
} from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import type { BadgeProps } from 'antd'
import { useCreateJob } from '@/hooks/useCreateJob'
import useAdminJobs from '@/hooks/useAdminJob'
import useDeleteJob from '@/hooks/useDeleteJobs'
import { Job, Application } from '@/types/types'

const { Sider, Header, Content } = Layout
const { Title, Text } = Typography
const { useBreakpoint } = Grid

const CATEGORIES = ['Design', 'Marketing', 'Engineering', 'Sales', 'Finance', 'HR', 'Other']
const LOCATIONS = ['Remote', 'Dhaka, Bangladesh', 'New York, USA', 'London, UK', 'Berlin, Germany']
const JOB_TYPES = ['Full Time', 'Part Time', 'Contract', 'Internship']



const TYPE_COLOR: Record<string, BadgeProps['status']> = {
  'Full Time': 'success',
  'Part Time': 'warning',
  'Contract': 'processing',
  'Internship': 'default',
}

const CAT_COLOR: Record<string, string> = {
  'Design': 'magenta',
  'Marketing': 'orange',
  'Engineering': 'blue',
  'Sales': 'green',
  'Finance': 'gold',
  'HR': 'purple',
  'Other': 'default',
}

const AVATAR_COLORS = ['#4640DE', '#7C3AED', '#DB2777', '#0891B2', '#059669', '#D97706']

interface LogoUploadProps {
  value?: string
  onChange?: (val: string) => void
}

function CompanyLogoUpload({ value, onChange }: LogoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > 2 * 1024 * 1024) return
    const reader = new FileReader()
    reader.onload = (ev) => onChange?.(ev.target?.result as string)
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      {value ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={value} alt="logo" style={{ width: 72, height: 72, borderRadius: 14, objectFit: 'contain', border: '2px solid #E8EAF0', background: '#FAFBFF', padding: 6 }} />
            <button type="button" onClick={(e) => { e.stopPropagation(); onChange?.('') }}
              style={{ position: 'absolute', top: -8, right: -8, background: 'white', border: 'none', cursor: 'pointer', padding: 0, borderRadius: '50%', boxShadow: '0 1px 4px rgba(0,0,0,0.15)', color: '#FF4D4F', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CloseCircleOutlined />
            </button>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#15192A' }}>Logo uploaded ✓</div>
            <button type="button" onClick={() => inputRef.current?.click()}
              style={{ background: 'none', border: 'none', padding: 0, color: '#4640DE', fontSize: 12, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', marginTop: 4 }}>
              Change logo
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => inputRef.current?.click()}
          style={{ width: '100%', border: '2px dashed #D0D3E0', borderRadius: 14, background: '#FAFBFF', padding: '18px 16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = '#4640DE'; el.style.background = '#EEF0FF' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = '#D0D3E0'; el.style.background = '#FAFBFF' }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #EEF0FF, #E0E4FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4640DE', fontSize: 18 }}>
            <CameraOutlined />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#15192A' }}>Upload Company Logo</div>
            <div style={{ fontSize: 11, color: '#9AA0B0', marginTop: 2 }}>PNG, JPG, SVG · Max 2MB</div>
          </div>
        </button>
      )}
    </div>
  )
}

export default function AdminDashboard() {
  const { mutate, isPending } = useCreateJob()
  const { data, isLoading } = useAdminJobs()
  const { mutate: deleteJob, isPending: isDeleting } = useDeleteJob()


  const [activeTab, setActiveTab] = useState<string>('jobs')
  const [showForm, setShowForm] = useState<boolean>(false)
  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const screens = useBreakpoint()

  const jobs: Job[] = data?.jobs ?? []

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      let imageFile: File | undefined
      if (values.company_logo?.startsWith('data:')) {
        const res = await fetch(values.company_logo)
        const blob = await res.blob()
        imageFile = new File([blob], 'logo.jpg', { type: blob.type })
      }
      mutate({
        title: values.title,
        company: values.company,
        location: values.location,
        category: values.category,
        job_type: values.job_type,
        description: values.description,
        salary: values.salary,
        image: imageFile as File,
      }, {
        onSuccess: () => {
          messageApi.success('Job posted successfully!')
          form.resetFields()
          setShowForm(false)
        },
        onError: () => {
          messageApi.error('Failed to post job.')
        }
      })
    } catch { }
  }

  const handleDelete = (id: string) => {
    messageApi.success('Job deleted successfully')
    deleteJob({ id })
  }

  const menuItems = [
    {
      key: 'jobs',
      icon: <SolutionOutlined />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          Job Listings
          <Badge count={jobs.length} style={{ backgroundColor: activeTab === 'jobs' ? 'rgba(255,255,255,0.25)' : '#4640DE', fontSize: 10 }} />
        </span>
      ),
    },
  ]

  const jobColumns: ColumnsType<Job> = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: Job) => (
        <div>
          <Text strong style={{ color: '#15192A', fontSize: 14 }}>{title}</Text>
          <div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              <CalendarOutlined style={{ marginRight: 4 }} />
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
          {record.company_logo ? (
            <div style={{ width: 30, height: 30, borderRadius: 8, border: '1.5px solid #E8EAF0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
              <img src={record.company_logo} alt={company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ) : (
            <Avatar size={30} style={{ backgroundColor: AVATAR_COLORS[company.charCodeAt(0) % AVATAR_COLORS.length], fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
              {company[0]}
            </Avatar>
          )}
          <Text style={{ fontSize: 14 }}>{company}</Text>
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
          <EnvironmentOutlined style={{ color: '#9AA0B0', fontSize: 13 }} />
          <Text type="secondary" style={{ fontSize: 13 }}>{location}</Text>
        </Space>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      responsive: ['lg'],
      render: (cat: string) => (
        <Tag color={CAT_COLOR[cat] ?? 'default'} style={{ borderRadius: 8, fontWeight: 600 }}>{cat}</Tag>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'job_type',
      key: 'job_type',
      render: (type: string) => (
        <Badge status={TYPE_COLOR[type] ?? 'default'} text={<Text style={{ fontSize: 13, fontWeight: 600 }}>{type}</Text>} />
      ),
    },
    {
      title: '',
      key: 'action',
      width: 60,
      render: (_: unknown, record: Job) => (
        <Popconfirm
          title="Delete this job?"
          description="This action cannot be undone."
          onConfirm={() => handleDelete(record._id)}
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ danger: true }}
        >
          <Tooltip title="Delete">
            <Button type="text" danger icon={<DeleteOutlined />} size="small" />
          </Tooltip>
        </Popconfirm>
      ),
    },
  ]

  const SidebarMenu = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #4640DE, #6C63FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(70,64,222,0.4)' }}>
            <AppstoreOutlined style={{ color: 'white', fontSize: 18 }} />
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>QuickHire</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 2 }}>Admin Panel</div>
          </div>
        </div>
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[activeTab]}
        onClick={({ key }) => { setActiveTab(key); setMobileDrawer(false) }}
        items={menuItems}
        style={{ background: 'transparent', border: 'none', flex: 1, paddingTop: 12 }} />
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Space>
          <Avatar size={34} style={{ background: 'linear-gradient(135deg, #4640DE, #DB2777)', fontWeight: 700 }}>A</Avatar>
          <div>
            <div style={{ color: 'white', fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Admin</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>admin@quickhire.com</div>
          </div>
        </Space>
      </div>
    </div>
  )

  return (
    <>
      {contextHolder}
      <style>{`
        .ant-layout-sider { background: #15192A !important; }
        .ant-menu-dark { background: transparent !important; }
        .ant-menu-dark .ant-menu-item-selected { background: linear-gradient(90deg, #4640DE, #6C63FF) !important; border-radius: 10px !important; }
        .ant-menu-dark .ant-menu-item { border-radius: 10px !important; margin: 2px 8px !important; width: calc(100% - 16px) !important; }
        .ant-table-thead > tr > th { background: #F8F9FC !important; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 0.08em; color: #9AA0B0 !important; }
        .ant-table-row:hover > td { background: #FAFBFF !important; }
        .ant-modal-content { border-radius: 20px !important; padding: 0 !important; overflow: hidden; }
        .ant-modal-header { padding: 20px 24px 16px !important; border-bottom: 1px solid #E8EAF0 !important; margin: 0 !important; }
        .ant-modal-body { padding: 20px 24px 24px !important; }
        .ant-form-item-label > label { font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 0.06em; color: #15192A !important; }
        .ant-input, .ant-select-selector { border-radius: 12px !important; border-color: #E8EAF0 !important; }
        .ant-input:focus, .ant-select-focused .ant-select-selector { border-color: #4640DE !important; box-shadow: 0 0 0 3px rgba(70,64,222,0.08) !important; }
        .ant-btn-primary { background: linear-gradient(135deg, #4640DE, #6C63FF) !important; border: none !important; border-radius: 12px !important; height: 44px !important; font-weight: 700 !important; box-shadow: 0 4px 12px rgba(70,64,222,0.3) !important; }
        .ant-btn-default { border-radius: 12px !important; height: 44px !important; font-weight: 600 !important; }
        .post-btn { background: linear-gradient(135deg, #4640DE, #6C63FF) !important; border: none !important; border-radius: 12px !important; font-weight: 700 !important; height: 40px !important; }
      `}</style>

      <Layout style={{ minHeight: '100vh', background: '#F4F5F9' }}>
        {screens.lg && (
          <Sider width={240} style={{ background: '#15192A', position: 'fixed', height: '100vh', left: 0, top: 0, zIndex: 100 }}>
            <SidebarMenu />
          </Sider>
        )}

        <Drawer placement="left" open={mobileDrawer} onClose={() => setMobileDrawer(false)}
          styles={{ body: { padding: 0, background: '#15192A' }, header: { display: 'none' } }}>
          <SidebarMenu />
        </Drawer>

        <Layout style={{ marginLeft: screens.lg ? 240 : 0, background: '#F4F5F9' }}>
          <Header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'white', borderBottom: '1px solid #E8EAF0', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Space>
              {!screens.lg && (
                <Button type="text" icon={<MenuOutlined />} onClick={() => setMobileDrawer(true)} style={{ color: '#9AA0B0' }} />
              )}
            </Space>
            {activeTab === 'jobs' && (
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setShowForm(true)} className="post-btn">
                {screens.sm ? 'Post New Job' : 'Post'}
              </Button>
            )}
          </Header>

          <Content style={{ padding: screens.xs ? 16 : 24 }}>
            {activeTab === 'jobs' && (
              <Card
                style={{ borderRadius: 16, border: '1px solid #E8EAF0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                styles={{ body: { padding: 0 } }}
              >
                <Table<Job>
                  dataSource={jobs}
                  columns={jobColumns}
                  rowKey="_id"
                  loading={isLoading}
                  pagination={{ pageSize: 8, showSizeChanger: false, style: { padding: '12px 24px' } }}
                  style={{ borderRadius: 16 }}
                  locale={{
                    emptyText: (
                      <div style={{ padding: 60, textAlign: 'center' }}>
                        <div style={{ fontSize: 36, marginBottom: 8 }}>📭</div>
                        <Text type="secondary">No jobs posted yet</Text>
                      </div>
                    )
                  }}
                />
              </Card>
            )}
          </Content>
        </Layout>
      </Layout>

      <Modal
        title={
          <Space>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #4640DE, #6C63FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PlusOutlined style={{ color: 'white', fontSize: 14 }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#15192A' }}>Post New Job</div>
              <div style={{ fontWeight: 400, fontSize: 12, color: '#9AA0B0', marginTop: 1 }}>Fill in the details below</div>
            </div>
          </Space>
        }
        open={showForm}
        onCancel={() => !isPending && setShowForm(false)}
        footer={null}
        width={600}
        style={{ top: 40 }}
        maskClosable={!isPending}
      >
        <Form form={form} layout="vertical" style={{ marginTop: 8 }}>
          <Form.Item name="company_logo" label="Company Logo">
            <CompanyLogoUpload />
          </Form.Item>

          <Form.Item name="title" label="Job Title" rules={[{ required: true, message: 'Job title is required' }]}>
            <Input placeholder="e.g. Senior UI Designer" prefix={<SolutionOutlined style={{ color: '#C0C5D0' }} />} size="large" style={{ borderRadius: 12 }} />
          </Form.Item>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Form.Item name="company" label="Company" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="e.g. Dropbox" prefix={<BankOutlined style={{ color: '#C0C5D0' }} />} size="large" style={{ borderRadius: 12 }} />
            </Form.Item>
            <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Required' }]}>
              <Select placeholder="Select location" size="large">
                {LOCATIONS.map(l => <Select.Option key={l} value={l}>{l}</Select.Option>)}
              </Select>
            </Form.Item>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Required' }]}>
              <Select placeholder="Select category" size="large">
                {CATEGORIES.map(c => <Select.Option key={c} value={c}>{c}</Select.Option>)}
              </Select>
            </Form.Item>
            <Form.Item name="job_type" label="Job Type">
              <Select placeholder="Select type" size="large">
                {JOB_TYPES.map(t => <Select.Option key={t} value={t}>{t}</Select.Option>)}
              </Select>
            </Form.Item>
          </div>

          <Form.Item name="salary" label="Salary Range">
            <Input placeholder="e.g. $50k - $80k" size="large" style={{ borderRadius: 12 }} />
          </Form.Item>

          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Description is required' }]}>
            <Input.TextArea placeholder="Describe the role, responsibilities, requirements..." rows={4} style={{ borderRadius: 12, resize: 'none' }} />
          </Form.Item>

          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <Button type="primary" onClick={handleSubmit} loading={isPending} block size="large">
              {isPending ? 'Posting...' : 'Post Job'}
            </Button>
            <Button onClick={() => setShowForm(false)} disabled={isPending} block size="large">
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  )
}