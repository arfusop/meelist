import { message } from 'antd'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Banner = () => {
    const setBanner = useStoreActions((store: any) => store.setBanner)
    const banner = useStoreState((state: any) => state.banner)

    switch (banner?.type) {
        case 'error':
            return message.error(banner.description)
        case 'success':
            return message.success(banner.description)
        case 'warning':
            return message.warning(banner.description)
        case 'info':
            return message.info(banner.description)
        default:
            return null
    }
}

export default Banner
