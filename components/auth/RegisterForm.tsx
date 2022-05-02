import { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useStoreActions } from 'easy-peasy'
import { useRouter } from 'next/router'
import { FaUserAlt, FaLock } from 'react-icons/fa'
// import Image from 'next/image'

import fetcher from '../../lib/fetcher'
import Logo from '../Logo'
import AuthBg from '../../assets/auth-img.jpg'
import { AuthFormWrapper } from './styles/AuthFormWrapper'

const RegisterForm = () => {
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)

    const [loading, setLoading] = useState(false)

    const onFormSubmit = async (values: any) => {
        setLoading(true)
        const { email, password } = values
        const newUser = await fetcher('/register', { email, password }, 'post')

        setLoading(false)
        setUser(newUser)
        router.push('/dashboard')
    }

    return (
        <AuthFormWrapper bgImg={AuthBg.src}>
            <Form
                name="registerForm"
                initialValues={{ remember: true }}
                onFinish={onFormSubmit}>
                <div className="authHeader">
                    <Logo origin="auth" />
                    <h1>Register</h1>
                </div>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!'
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        }
                    ]}>
                    <Input prefix={<FaUserAlt />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    hasFeedback>
                    <Input.Password
                        placeholder="Password"
                        prefix={<FaLock />}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </AuthFormWrapper>
    )
}

export default RegisterForm
