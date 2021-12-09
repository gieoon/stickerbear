import { API_SERVER } from './constants.js';
import {toRgbString} from './helpers.js';

export async function getComponent(image, prompt, c1, c2, c3) {

    return await fetch(API_SERVER, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            image: image,//document.getElementById('prompt-img-preview').src,
            prompt: prompt,
            palette: {
                main: toRgbString(c1), //'rgb(255,0,0)',
                secondary: toRgbString(c2), //'rgb(0,255,0)',
                accent: toRgbString(c3), //'rgb(0,0,255)',
            },
            width: "500",
            height: "500",
        })
    })
    .then(res => {
        return res.json()
        .then(results => {
            
            // const out = [];

            // for (var result of results) {
                
                
            //     injectComponent(frame, result.html, index);
            //     out.
                
            //     html2Png(frame, result.stylesheet, result.inline_styles, index);

                
            // }
            return results;
        })
    })
}