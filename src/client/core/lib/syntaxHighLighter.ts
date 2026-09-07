import { createHighlighter } from "@tanstack/highlight/core";

import { ts } from "@tanstack/highlight/languages/ts";
import { js } from "@tanstack/highlight/languages/js";
import { tsx } from "@tanstack/highlight/languages/tsx";
import { python } from "@tanstack/highlight/languages/python";

import { createTanStackMarkdownHighlighter } from "@tanstack/highlight/markdown";
import { createThemeCss } from "@tanstack/highlight/theme";
import { auroraXTheme } from "@tanstack/highlight/themes/aurora-x"
import { solarizedLightTheme } from "@tanstack/highlight/themes/solarized-light";
import type { CodeHighlighter } from "@tanstack/markdown";

export const highlighter = createHighlighter({
    languages: [ts, tsx, js, python]
});

export const highlightMarkdownCode: CodeHighlighter = createTanStackMarkdownHighlighter(highlighter);

const generatedCss = createThemeCss({
    light: solarizedLightTheme,
    dark: auroraXTheme,
    lightSelector: ".markdown-renderer",
    // This is key: it points the theme at your specific wrapper class.
    darkSelector: ".dark .markdown-renderer",
    codeBlockSelector: ".markdown-renderer pre.tm-code",
    lineNumbersSelector: ".markdown-renderer .tm-code--line-numbers",
});

// 4. Export the CSS as a string to be injected into your app
export const markdownHighlightCss = generatedCss;