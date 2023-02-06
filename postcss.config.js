import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";

const production = process.env.NODE_ENV === "production";

const plugins = [postcssImport, tailwindcss];

if (production) {
  plugins.push(
    purgecss({
      content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [":root"],
    })
  );
}

export default { plugins };