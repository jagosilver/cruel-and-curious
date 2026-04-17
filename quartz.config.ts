import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cruel & Curious",
    pageTitleSuffix: " — Cruel & Curious",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
    },
    locale: "en-GB",
    baseUrl: "jagosilver.github.io/cruel-and-curious",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5f0",
          lightgray: "#e2ddd6",
          gray: "#a09890",
          darkgray: "#3a3530",
          dark: "#1a1510",
          secondary: "#2d5a6e",
          tertiary: "#7aabbf",
          highlight: "rgba(45, 90, 110, 0.10)",
          textHighlight: "#b8dce888",
        },
        darkMode: {
          light: "#0e1318",
          lightgray: "#1e2830",
          gray: "#4a6070",
          darkgray: "#c8d8e0",
          dark: "#e8f0f5",
          secondary: "#7aabbf",
          tertiary: "#4a8fa8",
          highlight: "rgba(122, 171, 191, 0.12)",
          textHighlight: "#2d5a6e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
