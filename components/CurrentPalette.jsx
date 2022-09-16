// Choose your own Palette.
import { useContext, useRef } from 'react';
import { ANALYTICS_logEvent } from '../analytics';
import { PaletteContext } from '../context';
import styles from '../styles/CurrentPalette.module.scss';

export default function CurrentPalette({

}) {
    const {c1,setC1,c2,setC2,c3,setC3} = useContext(PaletteContext);
    
    return (
        <div className={styles.CurrentPalette}>
            <input value={c1} type="color" style={{backgroundColor:`${c1}`}} onChange={(e) => { setC1(e.target.value); ANALYTICS_logEvent('palette custom color', {})}} />
            <input value={c2} type="color" style={{backgroundColor:`${c2}`}} onChange={(e) => { setC2(e.target.value); ANALYTICS_logEvent('palette custom color', {})}}/>
            <input value={c3} type="color" style={{backgroundColor:`${c3}`}} onChange={(e) => { setC3(e.target.value); ANALYTICS_logEvent('palette custom color', {})}}/>
        </div>
    )
}