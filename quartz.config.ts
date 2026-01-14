import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌙Tom's Docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: 'google', tagId: 'G-RQ53SEPBR4'},
    locale: "en-US",
    baseUrl: "docs.tominhisroom.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "Planning*", "planning*", "Student Assistent/", "Project Robotfleet/"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Lora",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "var(--background-primary-light)",
          lightgray: "#fcf5e4",
          gray: "#b8b8b8",
          darkgray: "var(--text-normal-light)",
          dark: "var(--text-normal-light)",
          secondary: "var(--text-muted-light)",
          tertiary: "var(--text-accent-hover-light)",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "var(--background-primary-dark)",
          lightgray: "var(--background-primary-alt-dark)",
          gray: "#646464",
          darkgray: "var(--text-normal-dark)",
          dark: "var(--text-normal-dark)",
          secondary: "var(--text-muted-dark)",
          tertiary: "var(--text-accent-hover-dark)",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
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
      Plugin.ExplicitPublish(),
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
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
     // Plugin.CustomOgImages(),
    ],
  },
}

export default config
