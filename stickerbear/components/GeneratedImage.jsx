import styles from '../styles/GeneratedImage.module.scss';
import Frame from 'react-frame-component';
import { APP_NAME } from '../constants';
import { useEffect, useState, useRef, useContext } from 'react';
import { useFrame } from 'react-frame-component';
import { ANALYTICS_logEvent } from '../analytics';
import { AnalyticsContext } from '../context';

export default function GeneratedImage({
    index, data, isViewingFull, setLoading,
}) {
    // console.log(data)

    const [downloadUrl, setDownloadUrl] = useState();
    const [imgSrc, setImgSrc] = useState();

    const {numberDownloadedByUser, setNumberDownloadedByUser} = useContext(AnalyticsContext);

    // const [imgLoaded, setImgLoaded] = useState(false);

    const iframeRef = useRef();

    const html2Png = () => {
        
        var scale = 1;
        
        var htmlString = iframeRef.current
                    .contentDocument.body
                    .querySelector('.read-me')
                    .innerHTML;
        
        htmlString = htmlString.replace(/<br[^>]*>/g,'<br/>');

        var imgSvg = `${`
        <svg xmlns="http://www.w3.org/2000/svg" width="${500 * scale}" height="${500 * scale}">
            <defs>
                <style type="text/css">
                    ${data.stylesheet}
                </style>
            </defs>
            <foreignObject width="100%" height="100%" style="transform:scale(${scale});">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    ${htmlString}
                </div>
            </foreignObject>
        </svg>
        `}`

        imgSvg.replace(/%0A\s+/g,'');
        //Replace image using regex.
        var m = imgSvg.match(/<img[^>]+/);
        if (m) {
            var endIndex = m.index + m[0].length;
            imgSvg = imgSvg.substring(0, endIndex) + "/" + imgSvg.substring(endIndex);
        }

        svg2Png(iframeRef.current, imgSvg);
    }

    function svg2Png(frame, svgString) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(svgString, "image/svg+xml");
        var svg = doc.documentElement;
        var data = (new XMLSerializer()).serializeToString(svg);
        var url = 'data:image/svg+xml;base64,' + window.btoa(data);
        setImgSrc(url);
    }

    const InnerComponent = () => {
        const {document, window} = useFrame();

        const imgRef = useRef();
        useEffect(() => {
            // if (imgRef.current)
            //     console.log('imgRef.current.length: ', imgRef.current.src.length);
            // console.log(imgSrc);
            if (imgRef.current 
                && imgRef.current.src.length === 0
                && imgSrc === undefined) {
                    // console.log('html2png');
                    // ++global.imageLoadedCount;
                    html2Png();
            }

        }, [imgSrc]);

        return (
            <>
                <div id="component-image" style={{
                    // border: '4px solid #0070f3',
                }}>
                    <canvas id="canvas" width={500} height={500} style={{
                        transform: 'scale(2)', 
                        position:'absolute', 
                        pointerEvents:'none', 
                        visibility:'hidden'
                    }} />
                    <img id="canvas-img"
                        crossOrigin='*' 
                        width={500}
                        height={500}
                        src={imgSrc}
                        onLoad={(e) => {
                            var img = e.target;
                            const frame = iframeRef.current;
                            const canvas = frame.contentDocument.getElementById('canvas');
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0);
                            var imgURI = canvas
                                .toDataURL("image/png")
                            setDownloadUrl(imgURI);
                            // setImgLoaded(true);
                            // console.log(global.imageLoadedCount, global.totalImagesToLoad);
                            // if (global.imageLoadedCount === global.totalImagesToLoad) {
                            //     setLoading(false);
                            // }
                        }}
                    ref={imgRef}
                    style={{
                        // display:'none'
                        
                    }} />
                </div>
                    
                <div //ref={readMeRef} 
                    className='read-me'
                    style={{
                        visibility:'hidden'
                    }}
                    dangerouslySetInnerHTML={{__html: data.html}}
                />

                {/* {
                    !imgLoaded
                    ? <div className={styles.loading}>Loading...</div>
                    : <></>
                } */}
            </>
        )
    }

    return (
        <div className={styles.GeneratedImage + ' ' + (isViewingFull ? styles.full_size : styles.grid)}
            //style={{transform: 'scale(0.75)'}}
        >
            <div className={styles.iframe_wrapper}>
                <Frame
                    ref={iframeRef}
                    style={
                        {
                            border: 'none',
                            width: '500px',
                            height: '500px',
                            boxShadow: '0 0 4px rgba(0,0,0,.15)',
                            // transform: isViewingFull ? 'scale(1)' : 'scale(0.5)',
                        }}
                    head={
                        <>
                            <style id='generatedStylesheet'>{data.stylesheet}</style>
                            <style>{
                                `html {
                                    overflow:hidden;
                                } 
                                * { word-break: break-all; }
                                body { margin:0;} 
                                mark {color: inherit;}`
                            }</style>
                        </>
                    }

                >
                    <InnerComponent />
                </Frame>
            </div>
            <div className={styles.download_wrapper} onClick={() => {
                // console.log("pressed, ", numberDownloadedByUser, isViewingFull, downloadUrl);
                ANALYTICS_logEvent('Save image pressed', {
                    index: index,
                    numberDownloadedByUser: numberDownloadedByUser,
                    ['numberDownloadedByUser=>' + numberDownloadedByUser]: numberDownloadedByUser,
                    downloadUrl: downloadUrl.substring(0, 50),
                    isViewingFull: isViewingFull ? 'Full layout' : 'Grid layout',
                });
                setNumberDownloadedByUser(numberDownloadedByUser + 1);
            }}>
                <a download={APP_NAME.replace(/[ ]/g,'_').toLowerCase()}
                    href={downloadUrl}
                    className={styles.download}
                    onClick={() => {
                    }}>
                    Save
                </a>
            </div>
        </div>
    )
}