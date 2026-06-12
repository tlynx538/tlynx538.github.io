'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { Theme } from "@chakra-ui/react"
import { ColorModeProvider } from './color-mode'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        terminalBg: { value: "#0d1117" },
        terminalText: { value: "#33ff99" },
        accentBlue: { value: "#58a6ff" },
        accentRed: { value: "#ff6b6b" },
        border: { value: "#30363d" },

        primary: { value: "#33ff99" },
        secondary: { value: "#58a6ff" },
      },

      fonts: {
        heading: {
          value: "Inter, system-ui, sans-serif",
        },
        body: {
          value: "Inter, system-ui, sans-serif",
        },
        mono: {
          value: "JetBrains Mono, Consolas, monospace",
        },
      },

      radii: {
        md: { value: "8px" },
        lg: { value: "12px" },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}>
      <Theme appearance="dark">
        {props.children}
        </Theme>
      </ColorModeProvider>
    </ChakraProvider>
  )
}
