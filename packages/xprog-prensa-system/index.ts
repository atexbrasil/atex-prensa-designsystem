import { createStitches } from '@stitches/react'
import { CSS } from '@stitches/react/types'
import defaults from '@atexbrasil/prensa-design-tokens/3-themes/default.json'
import queries from '@atexbrasil/prensa-design-tokens/configs/queries'
import radius from '@atexbrasil/prensa-design-tokens/configs/radius'
import sizes from '@atexbrasil/prensa-design-tokens/configs/sizes'
import spaces from '@atexbrasil/prensa-design-tokens/configs/spaces'
import utils from '@atexbrasil/prensa-design-tokens/configs/utils'
import variants from '@atexbrasil/prensa-design-tokens/configs/variants'

export const PrensaEngine = createStitches({
  prefix: 'pds',
  media: queries,
  theme: {
    colors: defaults.colors,
    fontSizes: defaults.fontSizes,
    fontWeights: defaults.fontWeights,
    lineHeights: defaults.lineHeights,
    radii: radius,
    sizes: sizes,
    space: spaces,
    
    /**
     * Accordion Variants
     */
    accordion: variants.accordion,
    /**
     * Drawer Variants
     */
    drawer: variants.drawer,
    /**
     * IconButton Variants
     */
    iconButton: variants.iconButton
  },
  utils: utils
})

export type PrensaEngineCSS = CSS<typeof PrensaEngine['config']>
export type PrensaEngineTypeof = typeof PrensaEngine