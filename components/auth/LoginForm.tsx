import { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useStoreActions } from 'easy-peasy'
import { useRouter } from 'next/router'
import { FaUserAlt, FaLock } from 'react-icons/fa'

import { auth } from '../../lib/mutations'
import { Alert } from '../feedback'
import Logo from '../logo/Logo'
import AuthBg from '../../assets/auth-img.jpg'

import styles from './styles/AuthForm.module.scss'

interface AlertProps {
    show: boolean
    description: string
    type: 'error' | 'success' | 'warning' | 'info'
}

const DEFAULT_ALERT: AlertProps = {
    show: false,
    description: '',
    type: 'success'
}

const LoginForm = () => {
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState<AlertProps>(DEFAULT_ALERT)

    const onFormSubmit = async (values: any) => {
        try {
            setLoading(true)
            const { email, password } = values
            const newUser = await auth('login', { email, password })

            setLoading(false)
            setUser(newUser)
            router.push('/dashboard')
        } catch (error) {
            setLoading(false)
            setAlert({
                show: true,
                description: error.message,
                type: 'error'
            })
        }
    }

    const onAlertClose = () => setAlert(DEFAULT_ALERT)

    return (
        <section
            className={styles.AuthForm}
            style={{
                backgroundImage: `url('${AuthBg.src}')`
            }}>
            <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFormSubmit}>
                <div className="authHeader">
                    <Logo origin="auth" />
                    <h1>Login</h1>
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
                        Log In
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                {alert.show ? (
                    <Alert
                        description={alert.description}
                        type={alert.type}
                        onClose={onAlertClose}
                    />
                ) : null}
            </Form>
        </section>
    )
}

export default LoginForm
