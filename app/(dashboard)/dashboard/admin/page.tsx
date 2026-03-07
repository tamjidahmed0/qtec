'use client'
import { useState } from 'react'
import { Layout, Button, Space, Drawer, Grid, message } from 'antd'
import { PlusOutlined, MenuOutlined } from '@ant-design/icons'
import useAdminJobs from '@/hooks/useAdminJob'
import useDeleteJob from '@/hooks/useDeleteJobs'
import { Job } from '@/types/types'
import Sidebar from '@/components/ui/AdminSidebar'
import JobsTab from '@/components/ui/JobsTab'
import ApplicationsTab from '@/components/ui/ApplicationsTab'
import PostJobModal from '@/components/ui/PostJobModal'

const { Sider, Header, Content } = Layout
const { useBreakpoint } = Grid

export default function AdminDashboard() {
  const { data, isLoading } = useAdminJobs()
  const { mutate: deleteJob } = useDeleteJob()

  const [activeTab, setActiveTab] = useState<string>('jobs')
  const [showPostModal, setShowPostModal] = useState(false)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const screens = useBreakpoint()

  const jobs: Job[] = data?.jobs ?? []

  const handleDelete = (id: string) => {
    deleteJob({ id }, {
      onSuccess: () => messageApi.success('Job deleted successfully'),
      onError: () => messageApi.error('Failed to delete job'),
    })
  }

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
            `}</style>

      <Layout className='min-h-screen bg-[#F4F5F9]!'>

        {/* Desktop Sidebar */}
        {screens.lg && (
          <Sider
            width={240}
            className='bg-[#15192A]! fixed! h-screen! left-0! top-0! z-100!'
          >
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              jobCount={jobs.length}
            />
          </Sider>
        )}

        {/* Mobile Drawer */}
        <Drawer
          placement='left'
          open={mobileDrawer}
          onClose={() => setMobileDrawer(false)}
          styles={{ body: { padding: 0, background: '#15192A' }, header: { display: 'none' } }}
        >
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            jobCount={jobs.length}
            onClose={() => setMobileDrawer(false)}
          />
        </Drawer>

        <Layout
          className='bg-[#F4F5F9]!'
          style={{ marginLeft: screens.lg ? 240 : 0 }}
        >
          {/* Header */}
          <Header className='sticky! top-0! z-50! bg-white! border-b! border-[#E8EAF0]! px-6! h-16! flex items-center justify-between'>
            <Space>
              {!screens.lg && (
                <Button
                  type='text'
                  icon={<MenuOutlined />}
                  onClick={() => setMobileDrawer(true)}
                  className='text-[#9AA0B0]!'
                />
              )}
            </Space>
            {activeTab === 'jobs' && (
              <Button
                type='primary'
                icon={<PlusOutlined />}
                onClick={() => setShowPostModal(true)}
                className='bg-linear-to-br! from-[#4640DE]! to-[#6C63FF]! border-none! rounded-xl! font-bold! h-10!'
              >
                {screens.sm ? 'Post New Job' : 'Post'}
              </Button>
            )}
          </Header>

          {/* Content */}
          <Content className={screens.xs ? 'p-4' : 'p-6'}>
            {activeTab === 'jobs' && (
              <JobsTab jobs={jobs} isLoading={isLoading} onDelete={handleDelete} />
            )}
            {activeTab === 'applications' && (
              <ApplicationsTab jobs={jobs} isLoading={isLoading} />
            )}
          </Content>
        </Layout>
      </Layout>

      <PostJobModal
        open={showPostModal}
        onClose={() => setShowPostModal(false)}
        onSuccess={() => messageApi.success('Job posted successfully!')}
        onError={() => messageApi.error('Failed to post job.')}
      />
    </>
  )
}