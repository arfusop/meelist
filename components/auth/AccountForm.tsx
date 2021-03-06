import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Form, Select, InputNumber, Input, Button } from 'antd'
import { format } from 'date-fns'
const { Option } = Select
import {
    FaUserAlt,
    FaLock,
    FaArrowsAltV,
    FaBalanceScale,
    FaRegCalendarAlt,
    FaPercentage
} from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'

import { useUser } from '../../lib/hooks'
import { updateAccount } from '../../lib/mutations'
import styles from './styles/AuthForm.module.scss'

const AccountForm = () => {
    const [form] = Form.useForm()
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)
    const { user, isError, isLoading } = useUser()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isError) {
            router.push('/')
        }
        if (user?.id) {
            setUser(user)
        }
    }, [isError, user])

    useEffect(() => {
        if (user) {
            Object.keys(user).forEach(key => {
                const currentValue = user[key]
                if (
                    key !== 'createdAt' &&
                    key !== 'updatedAt' &&
                    key !== 'id'
                ) {
                    if (key === 'password') {
                        form.setFieldsValue({ password: '************' })
                    }
                    if (currentValue !== null) {
                        if (key === 'dob') {
                            const formatted = format(
                                new Date(currentValue),
                                'MM/dd/yyyy'
                            )
                            form.setFieldsValue({ [key]: formatted })
                        } else {
                            form.setFieldsValue({ [key]: currentValue })
                        }
                    }
                }
            })
        }
    }, [user])

    const onFormSubmit = async () => {
        setLoading(true)
        try {
            const values = form.getFieldsValue()
            values.dob = new Date(values.dob)
            await updateAccount(values)
            setLoading(false)
        } catch (error) {
            // handle error
            console.log(error)
        }
    }

    const onFormClearClick = () => form.resetFields()

    // TODO:
    // Add ability to reset/change password specifically here

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <section className={styles.AccountForm}>
            <Form
                form={form}
                name="loginForm"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFormSubmit}>
                <h1>Account</h1>
                <div className={styles.row}>
                    <Form.Item name="email">
                        <Input
                            prefix={<FaUserAlt />}
                            placeholder="Email"
                            disabled
                        />
                    </Form.Item>
                    <Form.Item name="password" hasFeedback>
                        <Input.Password
                            placeholder="Password"
                            prefix={<FaLock />}
                            disabled
                        />
                    </Form.Item>
                </div>
                <div className={styles.row}>
                    <Form.Item name="firstName">
                        <Input
                            prefix={<FaUserAlt />}
                            placeholder="First Name"
                        />
                    </Form.Item>
                    <Form.Item name="lastName">
                        <Input prefix={<FaUserAlt />} placeholder="Last Name" />
                    </Form.Item>
                </div>
                <div className={styles.row}>
                    <Form.Item name="gender">
                        <Select placeholder="Gender">
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="activityLevel">
                        <Select
                            placeholder="Activity Level"
                            optionLabelProp="label">
                            <Option
                                className="activityOption"
                                value="Sedentary"
                                label="Sedentary">
                                <span className="primaryText">Sedentary</span>
                                <span className="secondaryText">
                                    Office Job
                                </span>
                            </Option>
                            <Option
                                value="Light Exercise"
                                label="Light Exercise"
                                className="activityOption">
                                <span className="primaryText">
                                    Light Exercise
                                </span>
                                <span className="secondaryText">
                                    1-2 Days per Week
                                </span>
                            </Option>
                            <Option
                                className="activityOption"
                                value="Moderate Exercise"
                                label="Moderate Exercise">
                                <span className="primaryText">
                                    Moderate Exercise
                                </span>
                                <span className="secondaryText">
                                    3-5 Days per Week
                                </span>
                            </Option>
                            <Option
                                className="activityOption"
                                value="Heavy Exercise"
                                label="Heavy Exercise">
                                <span className="primaryText">
                                    Heavy Exercise
                                </span>
                                <span className="secondaryText">
                                    6-7 Days per Week
                                </span>
                            </Option>
                            <Option
                                className="activityOption"
                                label="Athlete"
                                value="Athlete">
                                <span className="primaryText">Athlete</span>
                                <span className="secondaryText">
                                    2x Per Day
                                </span>
                            </Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className={styles.row}>
                    <Form.Item
                        name="dob"
                        rules={[
                            {
                                pattern:
                                    /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/,
                                message: 'Enter a valid Month/Day/Year'
                            }
                        ]}>
                        <Input
                            prefix={<FaRegCalendarAlt />}
                            placeholder="Date Of Birth"
                        />
                    </Form.Item>
                    <Form.Item
                        name="height"
                        rules={[
                            {
                                required: true,
                                message: 'Enter your height in inches'
                            }
                        ]}>
                        <InputNumber
                            placeholder="Height in Inches"
                            prefix={<FaArrowsAltV />}
                            step="0.5"
                        />
                    </Form.Item>
                </div>
                <div className={styles.row}>
                    <Form.Item name="weight">
                        <InputNumber
                            placeholder="Weight"
                            prefix={<FaBalanceScale />}
                            step="0.5"
                        />
                    </Form.Item>
                    <Form.Item name="goalWeight">
                        <InputNumber
                            placeholder="Goal Weight"
                            prefix={<FiTarget />}
                            step="0.5"
                        />
                    </Form.Item>
                    <Form.Item name="bodyFat">
                        <InputNumber
                            placeholder="Body Fat"
                            prefix={<FaPercentage />}
                            step="0.5"
                        />
                    </Form.Item>
                    <Form.Item name="goalBodyFat">
                        <InputNumber
                            placeholder="Goal Body Fat"
                            prefix={<FiTarget />}
                            step="0.5"
                        />
                    </Form.Item>
                </div>
                <div className={styles.buttons}>
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={onFormSubmit}>
                        Submit
                    </Button>
                    <Button type="default" danger onClick={onFormClearClick}>
                        Clear
                    </Button>
                </div>
            </Form>
        </section>
    )
}

export default AccountForm
