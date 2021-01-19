const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  title: "研究院",
  description: "Java学习分享，包含 Java 基础知识，面试问题、一些框架和中间件等的实践。",
  // base: "/",
  theme: 'vdoing',
  markdown: {
    lineNumbers: true // 代码行号
  },
  head,
  plugins: plugins,
  themeConfig: themeConfig,
};
