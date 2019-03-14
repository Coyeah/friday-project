module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", modules: false }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["babel-plugin-lodash"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose : true }],
    ["@babel/plugin-transform-runtime", { corejs: 2 }],
    ["import", { libraryName: "antd", style: true, }],
    "@babel/plugin-syntax-dynamic-import",
  ]
}