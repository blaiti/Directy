module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
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
            "@icons": "src/assets/icons/index.ts",
            "@styles": "src/assets/styles/index.ts",
            "@components": "./src/components/index.ts",
					},
				},
			],
    ]
  };
};
