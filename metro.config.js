const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
// @ts-ignore
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = defaultConfig;
