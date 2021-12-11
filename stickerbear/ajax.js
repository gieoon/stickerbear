import { API_SERVER, test_data, test_data_grid } from './constants.js';
import {toRgbString} from './helpers.js';

export async function getComponent(image, prompt, c1, c2, c3) {

    //TODO remove this.
    // return JSON.parse(
    //     test_data_grid//test_data
    // );


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
            // console.log(JSON.stringify(results))

            return results;
        })
    })
}