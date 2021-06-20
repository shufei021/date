module.exports = {
    title: 'Rdate.js', //网站名称
    parse: '/rdate/', //部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 parse 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }] //ico图标
    ],
    themeConfig: {
        logo: '/time.png',
        lastUpdated: '上次更新', //最后更新时间
        smoothScroll: true, //页面滚动效果。
        displayAllHeaders: false, //侧边栏只有活动的才展开
        nav: [
            //导航栏目
            { text: '首页', link: '/' },
            { text: '文档', link: '/library/' },
            { text: 'github', link: 'https://github.com/shufei021/rdate' },
            { text: '友情链接', link: 'https://github.com/shufei021/rutils' }
        ],
        sidebarDepth: 2,
        // sidebar: 'auto'
        sidebar: {
            '/library/': [
                {
                    title: '', // 必要的
                    path: '', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: ['/library/', '/library/display.md', '/library/parse.md', '/library/manipulate.md', '/library/query.md', '/library/other.md']
                }
            ]
        }
        // sidebar: [
        //     {
        //         title: '规范',   // 必要的
        //         path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/standard/',
        //             '/standard/appoint.md',
        //             '/standard/html.md',
        //             '/standard/css.md',
        //             '/standard/javascript.md',
        //         ]
        //     },
        //     {
        //         title: '项目文档',   // 必要的
        //         path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/work/'
        //         ]
        //     }
        // ]
        // sidebar: {
        //     '/standard/': [
        //         '',     /* /foo/ */
        //         'appoint',  /* /foo/appoint.html */
        //         'html',  /* /foo/html.html */
        //         'css',   /* /foo/css.html */
        //         'javascript'   /* /foo/javascript.html */
        //     ],
        //     '/work/': [
        //         '',     /* /foo/ */
        //     ]
        // },
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
}
