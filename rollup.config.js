import path from "path";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import autoExternal from "rollup-plugin-auto-external";

import pkg from "./package.json";

const rootDir = path.resolve(__dirname, "src");

export default {
  input: pkg.main,
  output: [
    {
      file: pkg.module,
      inlineDynamicImports: true,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      mainFields: ["jsnext", "preferBuiltins", "browser"],
    }),
    alias({
      entries: [
        { find: "components", replacement: rootDir + "/components" },
        { find: "hooks", replacement: rootDir + "/hooks" },
        { find: "helpers", replacement: rootDir + "/helpers" },
        { find: "scss", replacement: rootDir + "/scss" },
        { find: "icons", replacement: rootDir + "/icons" },
        { find: "widgets", replacement: rootDir + "/widgets" },
        { find: "redux", replacement: rootDir + "/redux" },
      ],
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/react"],
      plugins: ["@babel/plugin-proposal-optional-chaining"],
      babelHelpers: "bundled",
    }),
    url(),
    json(),
    svgr(),
    postcss({
      modules: false,
      extract: true,
      minimize: false,
      sourceMap: true,
    }),
    commonjs({
      browser: true,
    }),
    autoExternal(),
    globals(),
    builtins(),
  ],
};
