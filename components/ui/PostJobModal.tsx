'use client'
import { useRef } from 'react'
import { Modal, Form, Input, Select, Button } from 'antd'
import { PlusOutlined, SolutionOutlined, BankOutlined, CameraOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useCreateJob } from '@/hooks/useCreateJob'

const CATEGORIES = ['Design', 'Marketing', 'Engineering', 'Sales', 'Finance', 'HR', 'Other']
const LOCATIONS = ['Remote', 'Dhaka, Bangladesh', 'New York, USA', 'London, UK', 'Berlin, Germany']
const JOB_TYPES = ['Full Time', 'Part Time', 'Contract', 'Internship']

interface LogoUploadProps {
    value?: string
    onChange?: (val: string) => void
}

function CompanyLogoUpload({ value, onChange }: LogoUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file || !file.type.startsWith('image/') || file.size > 2 * 1024 * 1024) return
        const reader = new FileReader()
        reader.onload = (ev) => onChange?.(ev.target?.result as string)
        reader.readAsDataURL(file)
        e.target.value = ''
    }

    return (
        <div>
            <input ref={inputRef} type='file' accept='image/*' className='hidden' onChange={handleFile} />

            {value ? (
                <div className='flex items-center gap-3.5'>
                    <div className='relative inline-block'>
                        <img
                            src={value}
                            alt='logo'
                            className='w-18 h-18 rounded-[14px] object-contain border-2 border-[#E8EAF0] bg-[#FAFBFF] p-1.5'
                        />
                        <button
                            type='button'
                            onClick={() => onChange?.('')}
                            className='absolute -top-2 -right-2 bg-white border-none cursor-pointer p-0 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.15)] text-[#FF4D4F] text-[18px] flex items-center justify-center'
                        >
                            <CloseCircleOutlined />
                        </button>
                    </div>
                    <div>
                        <div className='text-[13px] font-semibold text-[#15192A]'>Logo uploaded ✓</div>
                        <button
                            type='button'
                            onClick={() => inputRef.current?.click()}
                            className='bg-transparent border-none p-0 text-[#4640DE] text-[12px] font-semibold cursor-pointer underline mt-1'
                        >
                            Change logo
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    type='button'
                    onClick={() => inputRef.current?.click()}
                    className='w-full border-2 border-dashed border-[#D0D3E0] rounded-[14px] bg-[#FAFBFF] py-4.5 px-4 cursor-pointer flex flex-col items-center gap-2 transition-all hover:border-[#4640DE] hover:bg-[#EEF0FF]'
                >
                    <div className='w-10 h-10 rounded-[10px] flex items-center justify-center text-[#4640DE] text-lg bg-linear-to-br from-[#EEF0FF] to-[#E0E4FF]'>
                        <CameraOutlined />
                    </div>
                    <div>
                        <div className='text-[13px] font-bold text-[#15192A]'>Upload Company Logo</div>
                        <div className='text-[11px] text-[#9AA0B0] mt-0.5'>PNG, JPG, SVG · Max 2MB</div>
                    </div>
                </button>
            )}
        </div>
    )
}

interface Props {
    open: boolean
    onClose: () => void
    onSuccess: () => void
    onError: () => void
}

const PostJobModal = ({ open, onClose, onSuccess, onError }: Props) => {
    const [form] = Form.useForm()
    const { mutate, isPending } = useCreateJob()

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
                    form.resetFields()
                    onClose()
                    onSuccess()
                },
                onError,
            })
        } catch { }
    }

    return (
        <Modal
            title={
                <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-[10px] flex items-center justify-center bg-linear-to-br from-[#4640DE] to-[#6C63FF]'>
                        <PlusOutlined className='text-white! text-sm!' />
                    </div>
                    <div>
                        <div className='font-bold text-base text-[#15192A]'>Post New Job</div>
                        <div className='font-normal text-[12px] text-[#9AA0B0] mt-px'>Fill in the details below</div>
                    </div>
                </div>
            }
            open={open}
            onCancel={() => !isPending && onClose()}
            footer={null}
            width={600}
            style={{ top: 40 }}
            mask={{ closable: !isPending }}
        >
            <Form form={form} layout='vertical' className='mt-2!'>

                <Form.Item name='company_logo' label='Company Logo'>
                    <CompanyLogoUpload />
                </Form.Item>

                <Form.Item name='title' label='Job Title' rules={[{ required: true, message: 'Job title is required' }]}>
                    <Input
                        placeholder='e.g. Senior UI Designer'
                        prefix={<SolutionOutlined className='text-[#C0C5D0]!' />}
                        size='large'
                    />
                </Form.Item>

                <div className='grid grid-cols-2 gap-4'>
                    <Form.Item name='company' label='Company' rules={[{ required: true, message: 'Required' }]}>
                        <Input
                            placeholder='e.g. Dropbox'
                            prefix={<BankOutlined className='text-[#C0C5D0]!' />}
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item name='location' label='Location' rules={[{ required: true, message: 'Required' }]}>
                        <Select placeholder='Select location' size='large'>
                            {LOCATIONS.map(l => <Select.Option key={l} value={l}>{l}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <Form.Item name='category' label='Category' rules={[{ required: true, message: 'Required' }]}>
                        <Select placeholder='Select category' size='large'>
                            {CATEGORIES.map(c => <Select.Option key={c} value={c}>{c}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name='job_type' label='Job Type'>
                        <Select placeholder='Select type' size='large'>
                            {JOB_TYPES.map(t => <Select.Option key={t} value={t}>{t}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item name='salary' label='Salary Range'>
                    <Input placeholder='e.g. $50k - $80k' size='large' />
                </Form.Item>

                <Form.Item name='description' label='Description' rules={[{ required: true, message: 'Description is required' }]}>
                    <Input.TextArea
                        placeholder='Describe the role, responsibilities, requirements...'
                        rows={4}
                        className='resize-none!'
                    />
                </Form.Item>

                <div className='flex gap-3 mt-2'>
                    <Button type='primary' onClick={handleSubmit} loading={isPending} block size='large'>
                        {isPending ? 'Posting...' : 'Post Job'}
                    </Button>
                    <Button onClick={onClose} disabled={isPending} block size='large'>
                        Cancel
                    </Button>
                </div>

            </Form>
        </Modal>
    )
}

export default PostJobModal