import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';
import Layout from '../components/layout';
import { DialogProvider } from '../providers/dialog';

const client = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
                <RainbowKitProvider>
                    <DialogProvider>
                        <Layout>
                            {getLayout(<Component {...pageProps} />)}
                        </Layout>
                    </DialogProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default MyApp;
