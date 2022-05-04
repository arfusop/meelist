import { StoreProvider } from 'easy-peasy'

import { PageWrapper } from '../components/layout/PageWrapper'
import { store } from '../lib/state/store'

import 'antd/dist/antd.css'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
    return (
        <StoreProvider store={store}>
            {Component?.authPage ? (
                <Component {...pageProps} />
            ) : (
                <PageWrapper>
                    <Component {...pageProps} />
                </PageWrapper>
            )}
        </StoreProvider>
    )
}

export default MyApp
