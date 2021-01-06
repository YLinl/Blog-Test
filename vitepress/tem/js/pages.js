const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');
const path =  require('path')

function rTime(date){
    const json_data = new Date(date).toJSON();
    return json_data.split("T")[0];
}

var compareDate = function (obj1,obj2){
    return obj1.frontMatter.date<obj2.frontMatter.date? 1: -1;
}

// module.exports = async ()=>{
//     const paths = await globby(["**.md"],{
//         ignore:["node_modules"],
//     })
//     let pages = await Promise.all(
//         paths.map(async (item) => {
//             const content = await fs.readFile(item, "utf-8");
//             const {
//                 data
//             } = matter(content);
//             console.log(content)
//             data.date = rTime(data.date);
//             return {
//                 frontMatter: data,
//                 regularPath: `/${item.replace(".md", ".html")}`,
//                 relativePath: item,
//             };
//         })
//     );
//     // 此处为过滤掉不是文章的 Markdown 文件
//     pages = pages.filter((item) => !item.frontMatter.page);

//     pages.sort(compareDate);

//     return pages;

    
// }

module.exports = (  async function() {
    let a=[]
    const paths = await globby(["**.md"], {
                        ignore:["node_modules"],
                    })
    let pages = await Promise.all(
             paths.map(async (item) => {
                // const content = await fs.readFile(item, "utf-8");
                const content = await matter.read(item);
               return content

            }

    ))
    console.log(pages[0].data)
 
})
