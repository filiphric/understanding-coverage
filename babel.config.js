require("regenerator-runtime/runtime");

module.exports = {
  'presets': [
    [
      '@babel/preset-env'
    ]
  ],
  plugins: [
    ['babel-plugin-istanbul', {
      extension: ['.js']
    }],
    ['@babel/plugin-transform-runtime']
  ]
};