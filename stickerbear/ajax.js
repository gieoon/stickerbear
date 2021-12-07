import { API_SERVER } from './constants.js';
import {toRgbString} from './helpers.js';

async function getComponent() {

    return await fetch(API_SERVER, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            image: document.getElementById('prompt-img-preview').src,
            prompt: prompt,
            palette: {
                main: toRgbString(document.getElementById('main-color').value), //'rgb(255,0,0)',
                secondary: toRgbString(document.getElementById('secondary-color').value), //'rgb(0,255,0)',
                accent: toRgbString(document.getElementById('accent-color').value), //'rgb(0,0,255)',
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