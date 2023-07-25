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
  safelist: ['i-solar:home-2-linear','i-solar:inbox-archive-linear','i-solar:dialog-2-linear','i-solar:users-group-two-rounded-linear','i-solar:album-linear','i-solar:settings-linear','i-solar:mailbox-linear','i-solar:shop-linear','i-solar:archive-linear','i-solar:user-linear'],
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
