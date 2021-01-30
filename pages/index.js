import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import BoxSmall from '../components/boxSmall/boxSmall'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const styles = {
    backgroundImage: 'url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image)'
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <h1>I Love</h1>
        </div>
        <div>
          <h2>And Everything Inbetween. Meet Me, Ben Parsell.</h2>
        </div>
      </section>
      <section>
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 h-96 md:h-auto">
          <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link">
            <BoxSmall background="https://benparsell.com/themes/benparsell/assets/images/OST.png" />
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-4 px-2">
          <div className="flex flex-col sm:flex-row md:flex-row -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/2 h-48 xl:h-96 mb-4 sm:mb-0">
              <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link">
                <BoxSmall background="https://benparsell.com/themes/benparsell/assets/images/steelcaseLogo.jpg" />
              </a>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 h-48 xl:h-96">
              <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
                <BoxSmall background="https://benparsell.com/themes/benparsell/assets/images/SpiceJungle.jpg" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/2 h-48 xl:h-96 mb-4 sm:mb-0">
              <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
                <BoxSmall background="https://benparsell.com/themes/benparsell/assets/images/GitHub.jpg" />
              </a>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 h-48 xl:h-96">
              <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
                <BoxSmall background="https://benparsell.com/themes/benparsell/assets/images/Inveigle.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
            Link
          </a>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
            Link
          </a>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
          <a className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={styles}>
            Link
          </a>
        </div>
      </div>
      </section>
    {/* Add this <section> tag below the existing <section> tag */}
    {/* <section classNameName={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section> */}
    </Layout>
  )
}