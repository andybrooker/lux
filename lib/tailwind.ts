import resolveConfig from "tailwindcss/resolveConfig"
import {content, theme} from "@/tailwind.config.js"

export const fullConfig = resolveConfig({content, theme})

