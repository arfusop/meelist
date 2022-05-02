import { StoreProvider } from 'easy-peasy'

import { PageWrapper } from '../components/layout/PageWrapper'
import { store } from '../lib/state/store'

import 'antd/dist/antd.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    console.log(Component)
    return (
        <StoreProvider store={store}>
            {Component?.authPage ? (
                <PageWrapper>
                    <Component {...pageProps} />
                </PageWrapper>
            ) : (
                <Component {...pageProps} />
            )}
        </StoreProvider>
    )
}

export default MyApp
