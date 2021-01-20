// 插件配置
module.exports = [
    // 本地插件
    [require('./plugins/love-me'), { // 鼠标点击爱心特效
        color: '#11a8cd', // 爱心颜色，默认随机色
        excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    ['vuepress-plugin-mermaidjs', {}],


    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）


    [
        'one-click-copy',
        {
            // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },
    ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
        },
    ],
    [
        'vuepress-plugin-baidu-tongji', // 百度统计
        {
            hm: 'e8e310c0a2588005c9569e6b383d8f2c',
        },
    ],
    [

        '@vssue/vuepress-plugin-vssue', // 评论
        {
            platform: 'github-v4', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'yxw839841231', //github账户名
            repo: 'studying-comment', //github一个项目的名称
            clientId: '2157eb165ce0edbddfbe',//注册的Client ID
            clientSecret: 'ca392aaa1b2981bce7b4f7dd045c36eaf2294bb2',//注册的Client Secret
            autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。

        },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: '2157eb165ce0edbddfbe',
    //       clientSecret: 'ca392aaa1b2981bce7b4f7dd045c36eaf2294bb2',
    //       repo: 'studying-comment', // GitHub 仓库
    //       owner: 'yxw839841231', // GitHub仓库所有者
    //       admin: ['yxw839841231'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //           '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        },
    ],
]
