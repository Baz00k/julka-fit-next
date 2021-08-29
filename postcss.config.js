module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: { flexbox: "no-2009" },
        stage: 3,
        features: { "custom-properties": false }
      }
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./layouts/**/*.{js,jsx,ts,tsx}", './node_modules/react-bootstrap/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body", /nav/, /@media/, /col/, /row/]
      }
    ]
  ]
}