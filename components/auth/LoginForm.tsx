import { Form, Input, Button, Checkbox } from 'antd'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import Image from 'next/image'

import Logo from '../Logo'
import AuthBg from '../../assets/auth-img.jpg'
import blackboard from '../../assets/blackboard.jpg'
import { ChalkboardWrapper } from './styles/Chalkboard'

const LoginForm = () => {
    const onFormSubmit = (values: any) => {
        console.log('values: ', values)
    }

    return (
        <ChalkboardWrapper chalkboard={blackboard}>
            <Form
                name="registerForm"
                initialValues={{ remember: true }}
                onFinish={onFormSubmit}>
                <h1>Register for your free account</h1>
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
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            <div className="features">
                <h2>On the Menu</h2>
                <ul>
                    <li>Create meal plans</li>
                    <li>
                        See all the details (macros, micros) to help you stay on
                        track
                    </li>
                    <li>
                        Create a grocery shopping list once your meal plan is
                        ready
                    </li>
                </ul>
            </div>
        </ChalkboardWrapper>
    )
}

export default LoginForm
