import Image from 'next/image'

import styles from './Logo.module.scss'
import logo from '../../assets/banana-logo.svg'

type Props = { origin: 'header' | 'auth' }

const Logo = ({ origin }: Props) => {
    return (
        <section className={styles[`Logo-${origin}`]}>
            <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
            />
        </section>
    )
}

export default Logo
