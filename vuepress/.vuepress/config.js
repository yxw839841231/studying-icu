const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  title: "江山如此多骄",
  description: "杨小伟的Java学习分享，包含 Java 基础知识、框架和中间件等的实践。",
  // base: "/",
  theme: 'vdoing',
  markdown: {
    lineNumbers: true // 代码行号
  },
  head,
  plugins: plugins,
  themeConfig: themeConfig,
};
