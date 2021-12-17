export const ENVIRONMENT = 
	// "DEVELOP";
	"PRODUCTION";

export const API_SERVER = ENVIRONMENT === "DEVELOP"
	? "http://localhost:5000/generate-multiple"
	: "https://alexmakesbits.pythonanywhere.com/generate-multiple";

export const APP_NAME = "Social Image Creator"; // "Pixelspuppy";//
export const APP_TITLE = "Turn your text into an image to use for social media."; //"Make your Facebook posts stand out - " + APP_NAME;
export const APP_DESCRIPTION = "Turn your text into awesome images to post to Facebook, Instagram, Twitter, etc."; //"Make your social media stand out with eye-catching posts.";
export const APP_TWITTER = "AlexMakesBits";
export const APP_FAVICON = "/socialimagecreator_white.png";
export const APP_EMAIL = "alex.makes.alex@gmail.com";

export const APP_META_THUMBNAIL = "https://www.socialimagecreator.com/socialimagecreator_thumbnail.png";
export const APP_URL = "https://www.socialimagecreator.com";
export const test_data = `[
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	}
]`
export const test_data_grid = `[
    [{
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	}
    ],
    [{
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	}
    ],
    [{
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	},
    {
		"html": "<div id='div_SQgQwz'><p id='p_jhVjvj'>a</p></div>",
		"stylesheet": "* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } "
	}
    ]
]`
// `[
//     {
//         "html":'<div id="div_8a8QEu"><p id="p_BBnL4g">a<span style="text-shadow:none;padding: 0 1px;font-size:1.15em;color:#b7dd8f"></p></div>',
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_8a8QEu { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_BBnL4g { font-size:3.485em; text-align:center; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_UePYjS"><p id="p_fm4eNS">a<span style="text-shadow:none;padding: 0 1px;font-size:1.15em;color:#b7dd8f"></p></div>',
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_UePYjS { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_fm4eNS { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_SQgQwz"><p id="p_jhVjvj">a</p></div>",
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  # {  } #div_SQgQwz { background-color:white; font-size:137.5%; height:500px; display:flex; align-items:center;  } #p_jhVjvj { font-size:3.485em; white-space: pre-line;  } '
//     },
//     {
//         "html":'<div id="div_G96j9E"><p id="p_CR9wGH">a<span style="text-shadow:none;padding: 0 1px;font-size:1.15em;color:#b7dd8f"></p></div>',
//         "stylesheet":'* { box-sizing:border-box; word-break:break-word; } p { padding: 0 15px; z-index: 2; } .read-me > div { background-color: white; } img { margin: auto; object-fit: cover; }  @import url("https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Indie+Flower|Gamja+Flower"); # {  } #div_G96j9E { background-color:rgb(131,175,155); font-size:137.5%; width:500px; display:flex; justify-content:center; flex-direction:column; height:500px;  } #div_G96j9E::after { n        left: 0; n        bottom: 0; n        z-index: 0; n        content: ""; n        position: absolute; n        background-repeat: no-repeat; n        background-size: cover; n        width: 500px; n        height: 500px; n        transform-origin: 50% 50%; n        transform: rotate(180deg) translateY(0px); n        background-image: url("data:image/svg+xml,        %3Csvg xmlns='http://www.w3.org/2000/svg'             width='1440'            height='320'            viewBox='0 0 1440 320'%3E            %3Cpath                vectorEffect='non-scaling-stroke'                fill='rgb%28249,205,173%29'                fill-opacity='1'                d='M0,128L40,149.3C80,171,160,213,240,192C320,171,400,85,480,90.7C560,96,640,192,720,245.3C800,299,880,309,960,261.3C1040,213,1120,107,1200,80C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'            /%3E        %3C/svg%3E    ");  } #p_CR9wGH { color:rgb(252,157,154); font-family: Gamja Flower, cursive; font-weight:800; margin:auto; text-align:center; font-size:3.485em; white-space: pre-line;  } '
//     }]`;