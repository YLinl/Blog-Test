
// const getPages = require("../../utils/pages");

async function getConfig() {
    const config = {
        head: [
            [
                "meta",
                {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
                },
            ],
            ["meta", {
                name: "keywords",
                content: "足生的个人博客"
            }],
            ["link", {
                rel: "icon",
                href: "/favicon.ico"
            }],
            // 引入 Gitalk
            [
                "link",
                {
                    rel: "stylesheet",
                    href: "https://unpkg.com/gitalk/dist/gitalk.css"
                },
            ],
            ["script", {
                src: "https://unpkg.com/gitalk/dist/gitalk.min.js"
            }],
        ],
        title: "PCBLib",
        themeConfig: {
            search: true,
            // 保存解析 Markdown 的元数据
            // pages: await getPages(),
            author: "lin",
            nav: [{
                    text: "首页",
                    link: "/"
                },
                {
                    text: "归档",
                    link: "/docs"
                },
                {
                    text: "分类",
                    link: "/tags"
                },
            ],
        },
        dest: "public",
    };

    return config;
}
module.exports = getConfig();

// module.exports={
//     title:'Hello VitePress',
//     description:"Just playing around."
// }
