const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    "module-resolver",
    {
      "alias": {
        "@": "./src",
        "@comp": "./src/components",
        "@styles": "./src/styles"
      }
    }
  ]
];

module.exports = {
  presets,
  plugins
};
