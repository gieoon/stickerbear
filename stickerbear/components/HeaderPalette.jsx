// Choose your own Palette.
import { useContext } from 'react';
import { ANALYTICS_logEvent } from '../analytics';
import { PaletteContext } from '../context';
import styles from '../styles/HeaderPalette.module.scss';

export default function HeaderPalette({
    goToPaletteView,
}) {
    const {c1,c2,c3} = useContext(PaletteContext);
    
    return (
        <div className={styles.HeaderPalette} onClick={() => {
            ANALYTICS_logEvent('Clicked header palette', {});
            goToPaletteView();
        }}>
            <div className={styles.inner}>
                <div style={{backgroundColor:`${c1}`}} />
                <div style={{backgroundColor:`${c2}`}} />
                <div style={{backgroundColor:`${c3}`}} />
            </div>
        </div>
    )
}