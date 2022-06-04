module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@dataStore': './src/dataStore',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@config': './src/config',
          '@icons': './src/icons',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
