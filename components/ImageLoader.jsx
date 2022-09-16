// Blinking effect of loading images.
import { useEffect, useState } from 'react';
import styles from '../styles/ImageLoader.module.scss';

export default function ImageLoader({
    loading, isViewingFull,
}) {
    
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     setIsMobile(window.innerWidth < 600);
    // }, []);

    return (
        <div className={styles.ImageLoader + ' ' + (loading ? styles.showing : '')}>
            <div className={styles.Inner + ' ' + (isViewingFull ? styles.viewing_full : '')}>
                { 
                    Array.from(Array(8)).map((n, i) => (
                        <div key={'image-loader-'+i} 
                            className={styles.wrapper}>
                            <div className={styles.cell}>
                                <div className={styles.image + ' ' + styles.animated_background} />
                                
                                <div className={styles.text_line + ' ' + styles.animated_background} />
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}