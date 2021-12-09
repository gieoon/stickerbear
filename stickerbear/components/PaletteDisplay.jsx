import { useContext, useEffect, useState } from "react";
import styles from '../styles/PaletteDisplay.module.scss';
import {shuffle} from '../helpers.js';
import { PaletteContext } from "../context";

export default function PaletteDisplay({}) {
    const [palette, setPalette] = useState(
        // 200 / 500 / 1000
        require('nice-color-palettes')
    );
    
    const {setC1, setC2, setC3} = useContext(PaletteContext);

    const [splitPalette, setSplitPalette] = useState([]);
    const [currentPalette, setCurrentPalette] = useState(0);

    useEffect(() => {
        // Split palette into groups of 3's.
        var split = [];
        palette.forEach(p => {
            split.push(p.slice(0,3));
            split.push(p.slice(1,4))
            split.push(p.slice(2,5))
        });
        split = shuffle(split);

        setSplitPalette([...split]);
        
        setC1(split[currentPalette][0]);
        setC2(split[currentPalette][1]);
        setC3(split[currentPalette][2]);

    }, [palette]);

    const ColorContainer = ({hex}) => {
        return <div 
            style={{
            width: '50px',
            height: '50px',
            backgroundColor: hex
        }} />
    }

    const paletteWrapper = (hexArray, i) => {
        return <div //key={`hexarray-${i}`} 
            className={styles.PaletteWrapper + ' ' + (i === currentPalette ? styles.selected : '')}
            onClick={() => {
                setC1(hexArray[0]);
                setC2(hexArray[1]);
                setC3(hexArray[2]);
                setCurrentPalette(i);
            }}>
            {hexArray.map(hex => 
                <div key={`hex-${hex}-${i}`}>
                    <ColorContainer hex={hex}/>
                </div>
            )}
        </div>
    }

    return (
        <div className={styles.PaletteDisplay}>
            {
                splitPalette.map((hexArray, i) => (
                    <div key={`p-${i}`}
                        className={styles.PaletteWrapperOuter}>
                        {paletteWrapper(hexArray, i)}
                    </div>
                ))
            }
        </div>
    );
}