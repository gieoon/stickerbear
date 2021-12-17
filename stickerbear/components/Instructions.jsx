import styles from '../styles/Instructions.module.scss';
import { Check } from 'react-feather';
import { useContext } from 'react';
import { ImageContext, PaletteContext } from '../context';

export default function Instructions({
    prompt
}) {
    const {c1} = useContext(PaletteContext);
    const {image} = useContext(ImageContext);
    
    const cond1 = () => {
        return c1 !== '';
    }

    const cond2 = () => {
        return prompt.length > 0;
    }

    const cond3 = () => {
        return image !== '';
    }

    const Conditional = ({cond, n, text}) => {
        return <div className={cond() ? styles.strikethrough : ''}>
                
            <span className={styles.number}>{n}.</span>{text}
            
            <Check 
                size={50}
                color={cond() ? '#0070f3' : 'transparent'}
            />
        </div>
    }

    return (
        <div className={styles.Instructions}>
            <Conditional
                n={1}
                cond={cond1}
                text={" Select a color palette, or choose your own."} />
            <Conditional 
                n={2}
                cond={cond2}
                //text={" Type your message"} 
                text={" Add your text"}/>
            <Conditional
                n={3}
                cond={cond3}
                text="Add an image (Optional)" />
            <Conditional
                n={4}
                cond={() => false}
                text={" Create & save the images you want!"} />
        </div>
    )
}
