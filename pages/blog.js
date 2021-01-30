import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
    return (
        <Layout blog>
            <Head>
                <title>Blog | {siteTitle}</title>
            </Head>
            <section classNameName={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 classNameName={utilStyles.headingLg}>Blog</h2>
                <ul classNameName={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li classNameName={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                    </Link>
                    <br />
                    <small classNameName={utilStyles.lightText}>
                        <Date dateString={date} />
                    </small>
                    </li>
                ))}
                </ul>
            </section>
        </Layout>

    )
}