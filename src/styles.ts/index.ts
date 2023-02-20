import { createStitches } from "@stitches/react";
import { colors, fontSizes, fontWeights, fonts, lineHeights, medias, radii, space } from "./tokens";
export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    styled,
    theme
} = createStitches({
    theme: {
        colors, fontSizes, fontWeights, fonts, lineHeights, medias, radii, space
    }
})