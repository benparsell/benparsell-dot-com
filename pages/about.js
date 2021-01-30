import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function about() {
    return (
        <Layout about>
            <Head>
                <title>About | {siteTitle}</title>
            </Head>
        </Layout>

    )
}