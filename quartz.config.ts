import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
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
    baseUrl: "pr0xximity999.github.io/Quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "iA Writer Quattro S",
        body: "iA Writer Quattro S",
        code: "iA Writer Mono V",
      },
      colors: {
        lightMode: {
          light: "var(--background-primary-light)",
          lightgray: "var(--background-primary-alt-light)",
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
        priority: ["frontmatter", "filesystem"],
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
