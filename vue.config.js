module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    externals: {
      simplemde: {
        commonjs: 'simplemde',
        commonjs2: 'simplemde',
        amd: 'simplemde',
        root: 'SimpleMDE',
      },
      marked: 'marked',
    },
  },
};
