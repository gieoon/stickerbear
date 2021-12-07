import styles from '../styles/GeneratedImage.module.scss';
import Frame from 'react-frame-component';

export default function GeneratedImage({
    data
}) {
    var styles = {
        border: 'none',
        width: '500px',
        height: '500px',
    };

    return (
        <Frame
            styles={styles}

            head={
                <style>{data.stylesheet}</style>
            }

        >
            <div id="component-image">
                <canvas id="canvas" width="500px" height="500px" style="transform: scale(1); position:absolute; pointer-events:none; visibility:hidden;"></canvas>
                <img id="canvas-img" style="display:none;"></img>
            </div>
            <div className={styles.GeneratedImage}
                dangerouslySetInnerHTML={{__html: data.html}}
            />
        </Frame>
    )
}