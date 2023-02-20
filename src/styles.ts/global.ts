import { globalCss } from ".";


export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },


    "body": {
        width: "100%",
        height: "100%",
        margin: 0,
        "-webkit-font-smoothing": "antialiased",
    },

    'body, input, button': {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        background: "#00588d",
        margin: 0,
    },

    "#root": {
        height: "100%",
        width: "100%",
    }
})