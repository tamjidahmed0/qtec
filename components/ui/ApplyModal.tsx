'use client'
import { useState } from 'react'
import { Modal, Form, Input, Button, message } from 'antd'
import { ApplyFormValues, Job } from '@/types/types'
import { useSubmitApplication } from '@/hooks/useSubmitApplication'


interface Props {
    job: Job
    open: boolean
    onClose: () => void
}

const ApplyModal = ({ job, open, onClose }: Props) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { mutate, isPending } = useSubmitApplication()

    const handleSubmit = async (values: ApplyFormValues) => {
        setLoading(true)
        try {
            mutate(
                { ...values, job_id: job._id },
                {
                    onSuccess: () => setSuccess(true),
                    onError: () => message.error('Something went wrong. Please try again.'),
                }
            )

            setSuccess(true)
        } catch {
            message.error('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        form.resetFields()
        setSuccess(false)
        onClose()
    }

    return (
        <Modal
            open={open}
            onCancel={handleClose}
            footer={null}
            centered
            width={520}
            destroyOnHidden
        >
            {success ? (
                <div className='flex flex-col items-center justify-center py-10 text-center'>
                    <div className='w-16 h-16 bg-[#56CDAD1A] flex items-center justify-center mb-4'>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="#56CDAD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className='font-clash-display font-bold text-[20px] text-[#202430] mb-2'>Application Submitted!</h3>
                    <p className='font-epilogue text-[14px] text-[#515B6F] mb-6'>
                        Your application for <span className='font-semibold text-[#202430]'>{job.title}</span> has been sent successfully.
                    </p>
                    <Button
                        onClick={handleClose}
                        className='bg-brand! text-white! border-none! font-epilogue! font-bold! px-8! h-11!'
                    >
                        Close
                    </Button>
                </div>
            ) : (
                <>
                    <div className='mb-6'>
                        <h2 className='font-clash-display font-bold text-[20px] text-[#202430]'>Apply for this job</h2>
                        <p className='font-epilogue text-[14px] text-[#515B6F] mt-1'>{job.title} · {job.company}</p>
                    </div>

                    <Form form={form} layout='vertical' onFinish={handleSubmit} requiredMark={false}>
                        <Form.Item
                            name='name'
                            label={<span className='font-epilogue font-semibold text-[14px] text-[#202430]'>Full Name</span>}
                            rules={[{ required: true, message: 'Name is required' }]}
                        >
                            <Input placeholder='e.g. John Doe' className='h-11! font-epilogue! text-[14px]!' />
                        </Form.Item>

                        <Form.Item
                            name='email'
                            label={<span className='font-epilogue font-semibold text-[14px] text-[#202430]'>Email Address</span>}
                            rules={[
                                { required: true, message: 'Email is required' },
                                { type: 'email', message: 'Enter a valid email' }
                            ]}
                        >
                            <Input placeholder='e.g. john@email.com' className='h-11! font-epilogue! text-[14px]!' />
                        </Form.Item>

                        <Form.Item
                            name='resume_link'
                            label={<span className='font-epilogue font-semibold text-[14px] text-[#202430]'>Resume Link</span>}
                            rules={[
                                { required: true, message: 'Resume link is required' },
                                { type: 'url', message: 'Enter a valid URL' }
                            ]}
                            extra={<span className='font-epilogue text-[12px] text-[#9AA0B0]'>Google Drive, Dropbox, or any public link</span>}
                        >
                            <Input placeholder='https://drive.google.com/your-resume' className='h-11! font-epilogue! text-[14px]!' />
                        </Form.Item>

                        <Form.Item
                            name='cover_note'
                            label={<span className='font-epilogue font-semibold text-[14px] text-[#202430]'>Cover Note</span>}
                            rules={[{ required: true, message: 'Cover note is required' }]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder='Tell us why you are a great fit for this role...'
                                className='font-epilogue! text-[14px]! resize-none!'
                            />
                        </Form.Item>

                        <div className='flex gap-3 mt-2'>
                            <Button
                                htmlType='submit'
                                loading={loading}
                                className='flex-1 bg-brand! text-white! border-none! font-epilogue! font-bold! h-11! text-[15px]!'
                            >
                                Submit Application
                            </Button>
                            <Button
                                onClick={handleClose}
                                className='font-epilogue! font-bold! h-11! text-[15px]! text-[#515B6F]! border-[#D6DDEB]!'
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </>
            )}
        </Modal>
    )
}

export default ApplyModal