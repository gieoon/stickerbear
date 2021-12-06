import Head from 'next/head'
import {useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {APP_TITLE, APP_META_THUMBNAIL} from '../constants.js';
import GeneratedImage from '../components/generatedImage.jsx';

export default function Home() {

  const [generatedHTML, setGeneratedHTML] = useState([]);
  const [loading, setLoading] = useState(true);

  const go = () => {
    //TODO call python server here.
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Make your social media posts stand out - {APP_TITLE}</title>
        <meta name="description" content="Make your social media stand out with eye-catching posts." />
        <meta name="thumbnail" content={APP_META_THUMBNAIL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {APP_TITLE}
        </h1>

        <p className={styles.description}>
        {/* and drive engagement */}
        Make your social media stand out with eye-catching posts.
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.main_input}>
          <input placeholder="My message here" />
          <div className={styles.search_btn} onClick={() => go()}>Create</div>
        </div>

        <div className={styles.grid_wrapper}>
          <div className={styles.grid}>
            { generatedHTML.map(generated => (
                <GeneratedImage html={generated} />
              ))
            }
            {/* <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a> */}
          </div>

          <div className={styles.loader_showing + " " + (loading ? styles.showing : '')}>
            <div className={'loader'}></div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {APP_TITLE} by {' '}
        <span className={styles.logo}>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
        <a className={styles.alexMakes}
            href="https://twitter.com/alexmakes"
            target="_blank"
            rel="noopener noreferrer"
          >@AlexMakes</a>
      </footer>
    </div>
  )
}
