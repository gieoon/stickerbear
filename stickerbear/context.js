import { createContext, useEffect, useState } from "react";

export const PaletteContext = createContext();

export const PaletteContextProvider = (props) => {
    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');

    useEffect(() => {
        console.log('c1: ', c1);
    }, [c1])

    return <PaletteContext.Provider value={{
        c1: c1, 
        setC1: setC1,
        c2: c2,
        setC2: setC2,
        c3: c3,
        setC3: setC3
    }}>
        {props.children}
    </PaletteContext.Provider>
}

export const ImageContext = createContext();

export const ImageContextProvider = (props) => {
    const [image, setImage] = useState("");

    return <ImageContext.Provider value={{
        image: image,
        setImage: setImage
    }}>
        {props.children}
    </ImageContext.Provider>
}