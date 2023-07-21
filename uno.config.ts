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
        "btn","shadow-md py-2 px-4 w-full rounded-xl text-2xl text-white font-extrabold disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
      ],
    ],
    theme: {
      colors: {
        clean: "#f9f9f9", // class="text-clean"
        primary: "#2FD7DD",
        primaryLight: "#92FBFF",
        primaryDark: "#2CB5BA",
        secondary: "#2CB5BA",
        brand: "#FFFFFF",
      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: "inline-block",
          "vertical-align": "middle",
          // ...
        },
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  });
  