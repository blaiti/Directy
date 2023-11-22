module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: "./",
          alias: {
            "@fonts": "./assets/fonts",
            "@images": "./assets/images",
            "@utils": "./src/utils/index.ts",
            "@hooks": "./src/hooks/index.ts",
            "@store": "./src/store/index.tsx",
            "@icons": "./src/assets/icons/index.ts",
            "@styles": "./src/assets/styles/index.ts",
            "@models": "./src/models/index.ts",
            "@services": "./src/services/index.ts",
            "@components": "./src/components/index.ts",
          },
        },
      ],
    ],
  };
};
