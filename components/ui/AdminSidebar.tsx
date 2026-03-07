'use client'
import { Menu, Badge, Avatar, Space, Button, Tooltip } from 'antd'
import { AppstoreOutlined, SolutionOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface Props {
    activeTab: string
    setActiveTab: (key: string) => void
    jobCount: number
    onClose?: () => void
}

const AdminSidebar = ({ activeTab, setActiveTab, jobCount, onClose }: Props) => {
    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('token')
        router.push('/dashboard/login')
    }

    const menuItems = [
        {
            key: 'jobs',
            icon: <SolutionOutlined />,
            label: (
                <span className='flex items-center justify-between w-full'>
                    Job Listings
                    <Badge
                        count={jobCount}
                        style={{ backgroundColor: activeTab === 'jobs' ? 'rgba(255,255,255,0.25)' : '#4640DE', fontSize: 10 }}
                    />
                </span>
            ),
        },
        {
            key: 'applications',
            icon: <TeamOutlined />,
            label: 'Applications',
        },
    ]

    return (
        <div className='flex flex-col h-full'>

            {/* Logo */}
            <div className='px-5 pt-6 pb-5 border-b border-white/8'>
                <div className='flex items-center gap-3'>
                    <div className='w-9.5 h-9.5 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(70,64,222,0.4)]'
                        style={{ background: 'linear-gradient(135deg, #4640DE, #6C63FF)' }}>
                        <AppstoreOutlined className='text-white! text-lg!' />
                    </div>
                    <div>
                        <div className='text-white font-bold text-base leading-tight'>QuickHire</div>
                        <div className='text-white/40 text-[11px] mt-0.5'>Admin Panel</div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <Menu
                theme='dark'
                mode='inline'
                selectedKeys={[activeTab]}
                onClick={({ key }) => { setActiveTab(key); onClose?.() }}
                items={menuItems}
                className='bg-transparent! border-none! flex-1! pt-3!'
            />

            {/* Footer */}
            <div className='px-5 py-4 border-t border-white/8'>
                <div className='flex items-center justify-between'>
                    <Space>
                        <Avatar
                            size={34}
                            className='font-bold!'
                            style={{ background: 'linear-gradient(135deg, #4640DE, #DB2777)' }}
                        >
                            A
                        </Avatar>
                        <div>
                            <div className='text-white text-[13px] font-semibold leading-tight'>Admin</div>
                            <div className='text-white/40 text-[11px]'>admin@quickhire.com</div>
                        </div>
                    </Space>
                    <Tooltip title='Logout'>
                        <Button
                            type='text'
                            onClick={handleLogout}
                            icon={<LogoutOutlined className='text-base!' />}
                            className='text-white/40! p-0! flex! items-center! justify-center!'
                        />
                    </Tooltip>
                </div>
            </div>

        </div>
    )
}

export default AdminSidebar