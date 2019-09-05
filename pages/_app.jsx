import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { initGA, logPageView } from '../utils/analytics'
import Head from "next/head";

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    componentDidMount() {
        initGA()
        logPageView()
        Router.router.events.on('routeChangeComplete', logPageView)
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <div>
                <Head>
                    <title>Alejandro Pacheco</title>
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <meta
                        name="description"
                        content="content"
                    />
                </Head>
                <Component {...pageProps} />
            </div>
        )
    }
}