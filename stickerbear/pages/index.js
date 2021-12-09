import Head from 'next/head'
import {createContext, useContext, useRef, useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {APP_TITLE, APP_META_THUMBNAIL} from '../constants.js';
import GeneratedImage from '../components/GeneratedImage.jsx';
import {getComponent} from '../ajax.js';
import PaletteDisplay from '../components/PaletteDisplay';
import CurrentPalette from '../components/CurrentPalette';
import {PaletteContextProvider, ImageContextProvider, PaletteContext, ImageContext} from '../context';
import ImageUpload from '../components/ImageUpload';
import ImageLoader from '../components/ImageLoader';
import HeaderPalette from '../components/HeaderPalette';
import { ArrowRight, X, Grid, Square } from 'react-feather';

export default function Home() {

  const [generatedData, setGeneratedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isShowingPalette, setShowingPalette] = useState(false);
  const [isViewingFull, setIsViewingFull] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Make your social media posts stand out - {APP_TITLE}</title>
        <meta name="description" content="Make your social media stand out with eye-catching posts." />
        <meta name="thumbnail" content={APP_META_THUMBNAIL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {prompt.length === 0 && !isShowingPalette
          ? <div className={styles.title_wrapper}>
              <h1 className={styles.title}>
                {APP_TITLE}
              </h1>
              <p className={styles.description}>
                    {/* and drive engagement */}
                Make your social media stand out with eye-catching posts.
                {/* <code className={styles.code}>pages/index.js</code> */}
              </p>
          </div>
          : <></>
        }

        <PaletteContextProvider>
        <ImageContextProvider>
            <div className={styles.text_and_image}>
              <div className={styles.inner}>
                <div className={styles.inputs_wrapper}>
                  <div>
                    {/* <p className={styles.image_description}>Add an image to use, or leave blank for text-only.</p> */}
                    
                      <ImageUpload />

                    <HeaderPalette goToPaletteView={() => setShowingPalette(true)} />
                  </div>

                  <div className={styles.main_input}>
                    {/* <input value={prompt} onChange={(e) => {
                      setPrompt(e.target.value);
                    }} placeholder="My message here" /> */}
                    <textarea 
                      autoFocus={true}
                      value={prompt} onChange={(e) => {
                      setPrompt(e.target.value);
                    }} placeholder="My message here" />
                    {/* <div className={styles.search_btn} onClick={() => go()}>
                      Create
                    </div> */}
                  </div>
                  </div>

                <div>
                  <CreateButton 
                    prompt={prompt} 
                    setGeneratedData={setGeneratedData} 
                    setLoading={setLoading}
                    setShowingPalette={setShowingPalette} />
                </div>
              </div>
            </div>


          { loading 
            ? <div style={{
                height: isShowingPalette ? '10px' : 'fit-content',
                overflow: 'hidden',
                width: '100%',
              }}>
                <ImageLoader loading={loading} /> 
            </div>
            : generatedData.length === 0
              ? <div className={styles.instructions}>
                
                  <div><span className={styles.number}>1.</span> Type your message (Optionally, add an image)</div>
                  <div><span className={styles.number}>2.</span> Select a color palette, or choose your own.</div>
                  <div><span className={styles.number}>3.</span> Create</div>
                
              </div>
              : <div>
                
              </div>
          }

          <div className={styles.middle_section}>
          

            <div className={styles.palette_wrapper + ' ' + (isShowingPalette ? styles.showing : '')}>
              <p id={styles.palette_description}>Choose from a selection of colors, or select your own.</p>
              <CurrentPalette />
              <PaletteDisplay />
            </div>

            { isShowingPalette //&& generatedData.length
            ? <div className={styles.X_wrapper}>
                <X className={styles.palette_X} 
                  size={40}
                  color='rgb(170,170,170)' 
                  onClick={() => setShowingPalette(false)} />
              </div>
              : <></>
            }
            </div>
          </ImageContextProvider>
        </PaletteContextProvider>

        { generatedData.length
        ? <div className={styles.grid_wrapper}
          style={{
            height: isShowingPalette ? '10px' : 'fit-content',
            overflow: 'hidden',
          }}>
            <div className={styles.view_type}>
              { isViewingFull
                ? <Grid className={styles.generated_X} 
                  size={30}
                  color='rgb(170,170,170)' 
                  onClick={() => setIsViewingFull(!isViewingFull)} />
                : <Square className={styles.generated_X} 
                  size={30}
                  color='rgb(170,170,170)' 
                  onClick={() => setIsViewingFull(!isViewingFull)} />
              }
            </div>
          {/* + ' ' + (isShowingPalette ? '' : styles.showing) */}
            <div className={styles.grid + ' ' + (isViewingFull ? '' : styles.viewing_grid)}>
              { generatedData.map((data, i) => (
                  <div key={`generated-${i}`}
                    className={isViewingFull ? '' : styles.viewing_grid}
                  >
                    <GeneratedImage data={data} isViewingFull={isViewingFull} />
                  </div>
                ))
              }
            </div>

            {/* <div className={styles.loader_showing + " " + (loading ? styles.showing : '')}>
              <div className={'loader'}></div>
            </div> */}
          </div>
          : <></>
        }
      </main>

      { prompt.length === 0 || generatedData.length > 0
        ? <footer className={styles.footer}>
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
        : <></>
      }
    </div>
  )
}

export const CreateButton = ({
  prompt, setGeneratedData, setLoading, setShowingPalette,
}) => {

  const {c1,c2,c3} = useContext(PaletteContext);
  const {image} = useContext(ImageContext);

  const go = () => {
    console.log(c1, c2, c3, prompt, image);
    setLoading(true);
    setShowingPalette(false);
    
    getComponent(
      image, prompt, c1, c2, c3
    ).then(results => {
      setGeneratedData(results);
      setLoading(false);
    });
  }

  return (
    <div className={styles.create_btn} 
      onClick={() => {
        go()
      }}>
      Create 
      <ArrowRight />
    </div>
  )
}