import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Form, Select, InputNumber, Input, Button, Collapse } from 'antd'
import { format } from 'date-fns'
const { Panel } = Collapse
const { Option } = Select
import {
    FaUserAlt,
    FaLock,
    FaArrowsAltV,
    FaBalanceScale,
    FaRegCalendarAlt,
    FaPercentage,
    FaUserEdit
} from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'

import { VALID_PASSWORD } from '../../utils/regex'
import { useUser } from '../../lib/hooks'
import { updateAccount, updatePassword } from '../../lib/mutations'
import styles from './styles/AuthForm.module.scss'

const AccountForm = () => {
    const [form] = Form.useForm()
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)
    const { user, isError, isLoading } = useUser()

    const [loading, setLoading] = useState(false)
    const [passwordLoading, setPasswordLoading] = useState(false)
    const [disablePassword, setDisablePassword] = useState(true)

    const password = Form.useWatch('password', form)

    useEffect(() => {
        const isValid = VALID_PASSWORD.test(password)

        if (password && isValid) {
            setDisablePassword(false)
        }
    }, [password])

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
                        form.setFieldsValue({
                            ['password-disabled']: '************'
                        })
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
            form.setFieldsValue({ password: '' })
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

    const onPasswordSubmit = async () => {
        setPasswordLoading(true)
        try {
            const newPassword = form.getFieldValue('password')
            console.log(newPassword)
            // await updatePassword()
        } catch (error) {
            // handle
        }
    }
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
                    <Form.Item name="password-disabled" hasFeedback>
                        <Input.Password
                            placeholder="Password"
                            prefix={<FaLock />}
                            disabled
                        />
                    </Form.Item>
                </div>
                <div className={`${styles.row} ${styles.passwordResetRow}`}>
                    <div></div>
                    <Collapse expandIcon={() => <FaUserEdit />}>
                        <Panel header="Update Password" key="1">
                            <div className={styles.updatePasswordForm}>
                                <Form.Item
                                    name="password"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please enter a valid password.',
                                            pattern: VALID_PASSWORD
                                        }
                                    ]}>
                                    <Input.Password
                                        bordered={false}
                                        placeholder="Password"
                                        prefix={<FaLock />}
                                    />
                                </Form.Item>
                                <div className={styles.reqs}>
                                    <span>Must contain at least:</span>
                                    <ul>
                                        <li>8 digits</li>
                                        <li>1 Uppercase letter</li>
                                        <li>1 Number</li>
                                        <li>1 Special character</li>
                                    </ul>
                                </div>
                                <Button
                                    disabled={disablePassword}
                                    type="primary"
                                    loading={passwordLoading}
                                    onClick={onPasswordSubmit}>
                                    Update Password
                                </Button>
                            </div>
                        </Panel>
                    </Collapse>
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
