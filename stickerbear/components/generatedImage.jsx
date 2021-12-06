import styles from '../styles/GeneratedImage.module.scss';
import Frame from 'react-frame-component';

export default function GeneratedImage({
    html
}) {
    return (
        <Frame>
            <div className={styles.GeneratedImage}
                dangerouslySetInnerHTML={{__html: html}}
            />
        </Frame>
    )
}