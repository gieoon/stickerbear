import '../styles/globals.css'

global.imageloadedCount = 0;
global.totalImagesToLoad = 0;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
