import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Experience() {
    return (
        <Layout experience>
            <Head>
                <title>Experience | {siteTitle}</title>
            </Head>
        </Layout>

    )
}