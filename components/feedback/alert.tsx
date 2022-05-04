import { Alert } from 'antd'

type Props = {
    description: string
    type: 'error' | 'success' | 'warning' | 'info'
    onClose: any
}

const AlertMessage = ({ description, type, onClose }: Props) => {
    return (
        <div>
            <Alert
                showIcon
                description={description}
                type={type}
                closable
                onClose={onClose}
            />
        </div>
    )
}

export default AlertMessage
