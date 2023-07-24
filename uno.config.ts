// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    [
      "btn",
      "w-full cursor-pointer rounded-lg p-4 font-medium text-white transition hover:bg-opacity-90",
    ],
  ],
  theme: {
    colors: {
      primary: "#377cfb",
      secondary: "#66cc8a",
      accent: "#ea5234",
      neutral: "#333c4d",
      base: "#ffffff",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
      dark: "rgb(51, 60, 77)",
      bodydark2: "rgb(138, 153, 175)",
      bodydark1: "rgb(219, 224, 230)",
      graydark: "rgb(51, 58, 72)",
    },
  },
  safelist: ['i-solar:home-2-broken','i-solar:inbox-archive-broken','i-solar:dialog-2-broken','i-solar:users-group-two-rounded-broken','i-solar:album-broken','i-solar:settings-broken','i-solar:mailbox-broken','i-solar:shop-broken','i-solar:archive-broken','i-solar:user-broken'],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  
});
