import Image from 'next/image'
import styled from 'styled-components'

import logo from '../assets/banana-logo.svg'

type Props = { origin: 'header' | 'auth' }

const LogoWrapper = styled.section`
    width: ${({ origin }) => {
        switch (origin) {
            case 'auth':
                return '10vw'
            default:
                break
        }
    }};
`

const Logo = ({ origin }: Props) => {
    return (
        <LogoWrapper className="logo" origin={origin}>
            <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
            />
        </LogoWrapper>
    )
}

export default Logo
