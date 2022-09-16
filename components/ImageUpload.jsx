import { useContext, useState, useEffect, useRef } from 'react';
import styles from '../styles/ImageUpload.module.scss';
import { Image as ImageSVG } from 'react-feather';
import { ImageContext } from '../context';
import { X } from 'react-feather';
import { ANALYTICS_logEvent } from '../analytics';

export default function ImageUpload({

}) {
    const [isDragSupported, setIsDragSupported] = useState();
    const inputRef = useRef();

    const {image, setImage} = useContext(ImageContext);

    useEffect(() => {
        var isDraggable = supportDrag();
        setIsDragSupported(isDraggable);

        if(!isDraggable){
            document.querySelectorAll('.has-drag')[0].classList.remove('has-drag');
         }

    }, []);

    useEffect(() => {
        const reader = new FileReader();

        const previewImg = document.getElementById('preview-img');

        reader.addEventListener('load', () => {
            previewImg.src = reader.result;
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }, [image]);

    const supportDrag = function() {
        let div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }

    const onFileAdded = (e) => {
        
        e.target.classList.remove('file-input--active');
        
        const file = inputRef.current.files[0];
        setImage(file);
        
    }

    const removeImage = () => {
        const previewImg = document.getElementById('preview-img');
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            previewImg.src = "";
        }, false);
    }

    return (
        <div className={styles.ImageUpload}>
            
            <div className={styles.file_container}>
                
                <div className={styles.preview_wrapper}>
                    <img id="preview-img" 
                        style={{
                            margin:'auto',
                            display: image.name ? 'block' : 'none',
                        }}  height="200" />

                    {image.name
                        ? <X className={styles.X} 
                            onClick={() => {
                            ANALYTICS_logEvent('image removed', {});
                            setImage("");
                            removeImage();
                        }} />
                        : <></>
                    }
                </div>

                { !image.name
                    ? <div className={styles.file_wrapper}>

                    {/* <div className={styles.file_overlay}> */}
                        <input ref={inputRef} 
                            className={styles.file_input}
                            type="file"
                            accept="image/*"
                            onDragEnter={(e) => {
                                if (isDragSupported)
                                    e.target.classList.add('file-input--active');
                            }}
                            onDragLeave={(e) => {
                                e.target.classList.remove('file-input--active');
                            }}
                            onChange={onFileAdded}/>
                        <div className={styles.file_content}>
                            <div className={styles.file_infos}>
                                {/* <p className={styles.file_icon}> */}
                                {/* color='rgb(150,150,150)' */}
                                    <ImageSVG size={25} color='white' />
                                    <span className={styles.icon_shadow}></span>
                                    <div className={styles.file_btn}>
                                        Add an image
                                        <span className={styles.optional}>(Optional)</span>
                                    </div>
                                {/* </p> */}
                            </div>
                        </div>
                    </div>
                    : <></>
                }
                {/* </div> */}
            </div>
        </div>
        
    )
}