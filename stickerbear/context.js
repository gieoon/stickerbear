import { createContext, useEffect, useState } from "react";

export const PaletteContext = createContext();

export const PaletteContextProvider = (props) => {
    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');

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

export const AnalyticsContext = createContext();

export const AnalyticsContextProvider = (props) => {
    const [numberDownloadedByUser, setNumberDownloadedByUser] = useState(0);
    const [numberOfTimesUserPressedCreate, setNumberOfTimesUserPressedCreate] = useState(0);

    return <AnalyticsContext.Provider value={{
        numberDownloadedByUser: numberDownloadedByUser,
        setNumberDownloadedByUser: setNumberDownloadedByUser,
        numberOfTimesUserPressedCreate: numberOfTimesUserPressedCreate,
        setNumberOfTimesUserPressedCreate: setNumberOfTimesUserPressedCreate,
    }}>
        {props.children}
    </AnalyticsContext.Provider>
}