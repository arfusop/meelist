import NextLink from 'next/link'

import { NavStyles } from './style'

const Nav = () => {
    return (
        <NavStyles>
            <div className="logoWrapper">
                <p>LOGO</p>
            </div>
            <div className="linksWrapper">
                <NextLink href="/register" passHref>
                    Register
                </NextLink>
                <NextLink href="/login" passHref>
                    Login
                </NextLink>
            </div>
        </NavStyles>
    )
}

export default Nav
