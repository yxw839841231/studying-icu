// head
module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', {rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/yxw839841231/images/studying-icu/20210119170411.ico'}], //favicons，资源放在public文件夹
    [
        'meta',
        {
            name: 'keywords',
            content: 'Java,seata,dubbo,Spring,数据库,框架,中间件,线程,研究院',
        },
    ],
    // ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}], // 百度统计的站长验证
    ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    [
        'script',
        {
            'data-ad-client': 'ca-pub-5656294142997372',
            async: 'async',
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        },
    ], // 网站关联Google AdSense 与 html格式广告支持
    ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                //百度统计
                // var hm = document.createElement("script");
                // hm.src = "https://hm.baidu.com/hm.js?e8e310c0a2588005c9569e6b383d8f2c
                // var s = document.getElementsByTagName("script")[0]; 
                // s.parentNode.insertBefore(hm, s);
                
                // 引入谷歌,不需要可删除这段
                // var hm1 = document.createElement("script");
                // hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-00000000-1";
                // var s1 = document.getElementsByTagName("script")[0]; 
                // s1.parentNode.insertBefore(hm1, s1);
                
                //360
                var hm2 = document.createElement("script");
                hm2.src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
                var s2 = document.getElementsByTagName("script")[0]; 
                s2.parentNode.insertBefore(hm2, s2);
                
                //头条
                var el = document.createElement("script");
                el.src = "https://sf1-scmcdn-tos.pstatp.com/goofy/ttzz/push.js?eec1db1fc73574ec3b1d33ba961807ea71ace1ff2eb0afe1a054c45b4ba99c0d9cc083c9237a1e5a4bd4c657c9b51f8896652c2958e0611241fc954fb92a70e12b8d7c8c6655c9b00211740aa8a98e2e";
                el.id = "ttzz";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(el, s);

            })();

            // 谷歌加载,不需要可删除
            
            // window.dataLayer = window.dataLayer || [];
            // function gtag(){dataLayer.push(arguments);}
            // gtag('js', new Date());
            // gtag('config', 'UA-00000000-1');
            
        `]


]
