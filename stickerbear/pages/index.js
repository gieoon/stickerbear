import Head from 'next/head'
import {createContext, useContext, useEffect, useRef, useState} from 'react';
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
import Instructions from '../components/Instructions';


export default function Home() {

  const [generatedData, setGeneratedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isShowingPalette, setShowingPalette] = useState(false);
  const [isViewingFull, setIsViewingFull] = useState(false);

  useEffect(() => {
    document.getElementById('main-textarea').focus();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Make your social media stand out - {APP_TITLE}</title>
        <meta name="description" content="Make your social media stand out with eye-catching posts." />
        <meta name="thumbnail" content={APP_META_THUMBNAIL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <ImageContextProvider>
        <Title 
          prompt={prompt} 
          isShowingPalette={isShowingPalette} />

        <PaletteContextProvider>
        
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
                      id="main-textarea"
                      autoFocus={true}
                      value={prompt} 
                      onChange={(e) => {
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
              ? <Instructions 
                prompt={prompt}
              />
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
            </PaletteContextProvider>
          </ImageContextProvider>
        

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
                    <GeneratedImage 
                      data={data} 
                      isViewingFull={isViewingFull} 
                      setLoading={setLoading} />
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
      

      { prompt.length === 0 || generatedData.length > 0 || true
        ? <footer className={styles.footer}>
          {APP_TITLE} by {' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
          <a className={styles.alexMakes}
              href="https://twitter.com/alexmakes"
              target="_blank"
              rel="noopener noreferrer"
            >@AlexMakesAlex</a>
        </footer>
        : <></>
      }
      </main>
    </div>
  )
}

export const Title = ({
  prompt, isShowingPalette
}) => {
  const {image} = useContext(ImageContext);

  return prompt.length === 0 && image === '' && !isShowingPalette
    ? <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          {APP_TITLE}
        </h1>
        <p className={styles.description}>
              {/* and drive engagement */}
          Make your social media stand out with eye-catching images.
          {/* messages */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
    </div>
    : <></>;
}

export const CreateButton = ({
  prompt, setGeneratedData, setLoading, setShowingPalette,
}) => {

  const {c1,c2,c3} = useContext(PaletteContext);
  const {image} = useContext(ImageContext);

  const [prevState, setPrevState] = useState({
    c1: 'empty',
    c2: 'empty',
    c3: 'empty',
    image: 'empty',
    prompt: 'empty',
  });

  const isSame = () => {
    return prevState.c1 === c1
      && prevState.c2 === c2
      && prevState.c3 === c3
      && prevState.image === image
      && prevState.prompt === prompt;
  }

  const go = () => {
    var imgSrc = '';
    if (image !== '')
      imgSrc = document.getElementById("preview-img").src;

    console.log(c1, c2, c3, prompt, imgSrc.substring(0, 100));

    setLoading(true);
    setShowingPalette(false);

    setPrevState({
      c1: c1,
      c2: c2,
      c3: c3,
      prompt: prompt,
      image: image,
    });
    
    // Need to create staggered loading.
    // Based on pagination, becasue a stream requires websockets.
    getComponent(
      imgSrc, prompt, c1, c2, c3
    ).then(results => {
      // console.log(results);
      // Set loading to finished only after all images have loaded.
      global.imageLoadedCount = 0;
      global.totalImagesToLoad = results.length;
      
      setGeneratedData(results);
      
    });
  }

  return (
    <div className={styles.create_btn + ' ' + (isSame() ? styles.disabled : '')} 
      onClick={() => {
        setGeneratedData([]);
        go();
      }}>
      Create 
      <ArrowRight />
    </div>
  )
}