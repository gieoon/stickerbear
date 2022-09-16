import Head from 'next/head'
import {createContext, useContext, useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {APP_NAME, APP_TITLE, APP_DESCRIPTION, APP_META_THUMBNAIL, APP_TWITTER, APP_EMAIL, APP_URL, APP_FAVICON} from '../constants.js';
import GeneratedImage from '../components/GeneratedImage.jsx';
import {getComponent} from '../ajax.js';
import PaletteDisplay from '../components/PaletteDisplay';
import CurrentPalette from '../components/CurrentPalette';
import {PaletteContextProvider, ImageContextProvider, PaletteContext, ImageContext, AnalyticsContextProvider, AnalyticsContext} from '../context';
import ImageUpload from '../components/ImageUpload';
import ImageLoader from '../components/ImageLoader';
import HeaderPalette from '../components/HeaderPalette';
import { ArrowRight, X, Grid, Square } from 'react-feather';
import Instructions from '../components/Instructions';
import InfiniteLoader_ from '../components/InfiniteLoader_';
import { ANALYTICS_logEvent } from '../analytics';
import '../firebaseConfig';
import { initFirebase } from '../firebaseConfig';

export default function Home() {

  const [generatedData, setGeneratedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isShowingPalette, setShowingPalette] = useState(false);
  const [isViewingFull, setIsViewingFull] = useState(false);

  useEffect(() => {
    initFirebase();
    document.getElementById('main-textarea').focus();

    ANALYTICS_logEvent("page_view", {
      page_location: window.location.href,
      page_path: "/",
      page_title: "HomePage",
    }); 
    if(window.innerWidth < 600) {
      setIsViewingFull(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="thumbnail" content={APP_META_THUMBNAIL} />
        <link rel="icon" href={APP_FAVICON} />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={APP_META_THUMBNAIL} />
        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />

        <meta property="twitter:site:id" content={APP_TWITTER} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <AnalyticsContextProvider>
        <main className={styles.main}>
          <ImageContextProvider>
            <Title 
              prompt={prompt} 
              isShowingPalette={isShowingPalette}
              generatedData={generatedData} />

            <PaletteContextProvider>
          
              <div className={styles.text_and_image + ' ' + (generatedData.length > 0 ? styles.fixed : '')}>
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
                        // autoFocus={true}
                        // value={prompt} 
                        onChange={(e) => {
                          // Only modify blank to displaying change.
                          // Otherwise constant state change is too laggy.
                          if (e.target.value.length > 0 && prompt.length === 0) {
                            setPrompt(e.target.value);

                            ANALYTICS_logEvent("prompt entered", {
                              prompt: e.target.value,
                            });
                          }
                          else if (e.target.value.length === 0 && prompt.length > 0) {
                            setPrompt(e.target.value);
                          }
                        }} 
                        placeholder="My message here" />
                      {/* <div id="main-textarea" 
                        contentEditable={true} 
                        onChange={(e) => {
                          // Only modify blank to displaying change.
                          // Otherwise constant state change is too laggy.
                          if (e.target.value.length > 0 && prompt.length === 0) {
                            setPrompt(e.target.value);
                          }
                          else if (e.target.value.length === 0 && prompt.length > 0) {
                            setPrompt(e.target.value);
                          }
                        }}/> */}
                    </div>
                    </div>

                  <div>
                    <CreateButton 
                      // prompt={prompt} 
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
                  <ImageLoader loading={loading}
                    isViewingFull={isViewingFull} /> 
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
                    onClick={() => {
                      ANALYTICS_logEvent('Close palette view pressed', {});
                      setShowingPalette(false);
                    }} />
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
              { isShowingPalette
                ? <></>
                : <div className={styles.view_type}>
                  { isViewingFull
                    ? <Grid className={styles.generated_X} 
                      size={30}
                      color='rgb(170,170,170)' 
                      onClick={() => {
                        ANALYTICS_logEvent('view grid layout pressed', {});
                        setIsViewingFull(!isViewingFull);
                      }} />
                    : <Square className={styles.generated_X} 
                      size={30}
                      color='rgb(170,170,170)' 
                      onClick={() => {
                        ANALYTICS_logEvent('view full layout pressed', {});
                        setIsViewingFull(!isViewingFull);
                      }} />
                  }
                </div>
              }
            {/* + ' ' + (isShowingPalette ? '' : styles.showing) */}
              {/* <div className={styles.grid + ' ' + (isViewingFull ? '' : styles.viewing_grid)}>
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
              </div> */}

              <InfiniteLoader_
                isViewingFull={isViewingFull}
                hasNextPage={false}
                isNextPageLoading={false}
                data={generatedData}
                loadNextPage={() => {}}
              />
              

              {/* <div className={styles.loader_showing + " " + (loading ? styles.showing : '')}>
                <div className={'loader'}></div>
              </div> */}
            </div>
            : <></>
          }
        

        { generatedData.length === 0
          ? <footer className={styles.footer} onClick={() => {
              ANALYTICS_logEvent('@Twitter visited', {});
            }}>
              <span className={styles.app_title}>
                {APP_NAME}
              </span> by {' '}
              <span className={styles.logo}>
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
              </span>
              <a className={styles.alexMakes}
                  href={`https://twitter.com/${APP_TWITTER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >@{APP_TWITTER}</a>
              <div className={styles.email}>
                <a href={`mailto:${APP_EMAIL}`}>
                  {APP_EMAIL}
                </a>
              </div>
          </footer>
          : <></>
        }
        </main>
      </AnalyticsContextProvider>
    </div>
  )
}

export const Title = ({
  prompt, isShowingPalette, generatedData
}) => {
  const {image} = useContext(ImageContext);

  return prompt.length === 0 && image === '' && !isShowingPalette && generatedData.length === 0
    ? <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          {/* <Image src={'/pixelspuppy.png'} width={75} height={75} /> */}
          {APP_NAME}
        </h1>
        <p className={styles.description}>
              {/* and drive engagement */}
          {/* Make your social media stand out with eye-catching images. */}
          {APP_DESCRIPTION}
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
  const {numberOfTimesUserPressedCreate, setNumberOfTimesUserPressedCreate} = useContext(AnalyticsContext);

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
    
    var promptValue = document.getElementById('main-textarea').value;

    console.log(c1, c2, c3, promptValue, imgSrc.substring(0, 100));

    setLoading(true);
    setShowingPalette(false);

    setPrevState({
      c1: c1,
      c2: c2,
      c3: c3,
      prompt: promptValue, //prompt,
      image: image,
    });

    ANALYTICS_logEvent("create pressed", {
      prompt: promptValue,
      imgSrc: imgSrc,
      c1: c1,
      c2: c2,
      c3: c3,
      ['c1=>'+c1]: c1,
      ['c2=>'+c2]: c2,
      ['c3=>'+c3]: c3,
      ['numberOfTimesUserPressedCreate=>'+numberOfTimesUserPressedCreate] : numberOfTimesUserPressedCreate,
      numberOfTimesUserPressedCreate: numberOfTimesUserPressedCreate,
    }); 
    ANALYTICS_logEvent('prompt=>' + promptValue, {});
    setNumberOfTimesUserPressedCreate(numberOfTimesUserPressedCreate + 1);
    
    // Need to create staggered loading.
    // Based on pagination, becasue a stream requires websockets.
    getComponent(
      imgSrc, promptValue, c1, c2, c3
    ).then(results => {
      // console.log(results);
      // Set loading to finished only after all images have loaded.
      // global.imageLoadedCount = 0;
      // global.totalImagesToLoad = results.length;
      ANALYTICS_logEvent('Results loaded', {});
      setGeneratedData(results);
      setLoading(false);
    });
  }

  return (
    <div className={styles.create_btn + ' ' + (isSame() ? styles.disabled : '') + ' ' + (numberOfTimesUserPressedCreate === 0 ? styles.first_time : '')} 
      onClick={() => {
        setGeneratedData([]);
        go();
      }}>
      Create 
      <ArrowRight />
    </div>
  )
}