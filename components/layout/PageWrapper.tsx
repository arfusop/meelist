import { Nav } from '../nav'

import { PageWrapperStyles } from './styles'

export const PageWrapper = ({ children }: any) => {
    return (
        <PageWrapperStyles>
            <Nav />
            {children}
        </PageWrapperStyles>
    )
}
