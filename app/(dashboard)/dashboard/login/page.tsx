"use client"
import { useState } from 'react'
import { Form, Input, Button, Checkbox, Typography, message } from 'antd'
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { useLogin } from '@/hooks/useLogin'
import { useRouter } from 'next/navigation'


const { Title, Text } = Typography

export default function LoginPage() {
    const router = useRouter()
    const { mutate, isPending, data } = useLogin()
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage()

    const handleLogin = async () => {
        try {
            const values = await form.validateFields() // Validate form fields
            setLoading(true)

            // Call login mutation
            mutate(values, {
                onSuccess: (data) => {
                    messageApi.success("Login successful!")
                    setLoading(false)
                    // Redirect or do something after login
                    if(data.success){
                        router.replace('/dashboard/admin')
                    }
                },
                onError: (err: any) => {
                    messageApi.error(err.message || "Login failed")
                    setLoading(false)
                }
            })
        } catch (err) {
            // Form validation failed
            messageApi.error("Please fill all required fields correctly")
        }
    }

    return (
        <>
            {contextHolder}
            <style>{`
        .login-input .ant-input,
        .login-input .ant-input-affix-wrapper {
          border-radius: 10px !important;
          height: 46px !important;
          font-size: 14px !important;
          border-color: #E8EAF0 !important;
          background: #FAFBFF !important;
        }
        .login-input .ant-input-affix-wrapper-focused,
        .login-input .ant-input-affix-wrapper:focus {
          border-color: #4640DE !important;
          box-shadow: 0 0 0 3px rgba(70,64,222,0.08) !important;
        }
        .login-input .ant-input-prefix { color: #B0B7C3; margin-right: 8px; }
        .login-btn {
          height: 46px !important;
          border-radius: 10px !important;
          font-weight: 700 !important;
          font-size: 15px !important;
          background: linear-gradient(135deg, #4640DE, #6C63FF) !important;
          border: none !important;
          box-shadow: 0 4px 14px rgba(70,64,222,0.3) !important;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #4640DE !important;
          border-color: #4640DE !important;
        }
        .ant-form-item-label > label {
          font-size: 12px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #374151 !important;
        }
      `}</style>

            <div style={{
                minHeight: '100vh',
                background: '#F4F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 16px',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 420,
                    background: 'white',
                    borderRadius: 20,
                    padding: '40px 32px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    border: '1px solid #E8EAF0',
                }}>

                    {/* Logo + Title */}
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                        <div style={{
                            width: 48, height: 48,
                            borderRadius: 14,
                            background: 'linear-gradient(135deg, #4640DE, #6C63FF)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 16px',
                            boxShadow: '0 4px 14px rgba(70,64,222,0.35)',
                        }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" stroke="white" strokeWidth="2" />
                                <path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <Title level={3} style={{ margin: 0, color: '#15192A', fontWeight: 800, fontSize: 22 }}>
                            Admin Login
                        </Title>
                        <Text style={{ color: '#9AA0B0', fontSize: 13, marginTop: 6, display: 'block' }}>
                            Sign in to QuickHire dashboard
                        </Text>
                    </div>

                    {/* Form */}
                    <Form form={form} layout="vertical" requiredMark={false}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Email is required' },
                                { type: 'email', message: 'Enter a valid email' },
                            ]}
                            style={{ marginBottom: 16 }}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="admin@quickhire.com"
                                size="large"
                                className="login-input"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                { required: true, message: 'Password is required' },
                                { min: 6, message: 'At least 6 characters' },
                            ]}
                            style={{ marginBottom: 16 }}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Enter your password"
                                size="large"
                                className="login-input"
                                iconRender={(visible) =>
                                    visible
                                        ? <EyeTwoTone twoToneColor="#4640DE" />
                                        : <EyeInvisibleOutlined style={{ color: '#B0B7C3' }} />
                                }
                            />
                        </Form.Item>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                            <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                                <Checkbox style={{ fontSize: 13, color: '#6B7280' }}>Remember me</Checkbox>
                            </Form.Item>
                            <a href="#" style={{ fontSize: 13, color: '#4640DE', fontWeight: 600, textDecoration: 'none' }}>
                                Forgot password?
                            </a>
                        </div>

                        <Button type="primary" block loading={loading} onClick={handleLogin} className="login-btn">
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}