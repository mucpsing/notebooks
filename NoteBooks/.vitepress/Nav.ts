/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-05-17 15:21:10.732487
 * @Last Modified by: CPS
 * @Last Modified time: 2022-05-17 15:21:10.732487
 * @Projectname
 * @file_path "W:\CPS\MyProject\cps\NoteBooks\.vitepress"
 * @Filename "Nav.ts"
 * @Description: 功能描述
 */

import path from "path";

// 导航栏的基本格式
const DEFAULT_FORMAT = {
  nav: [
    { text: "入门", link: "/getting/why.html" },
    {
      text: "码云",
      link: "https://gitee.com/wushijiang13/vue3-vite-cli",
    },
  ],
};

interface navItems {
  text?: string;
  items?: any[];
  link?: string;
}

function getNavByDir({ dir = "", title = "" }) {
  const result: navItems = {};

  const fullPath: string = path.resolve(basePath, dir);
  console.log("fullPath: ", fullPath);
  const text: string = path.basename(fullPath).split(".")[0];
  const items: any[] = [];

  const res = fs.readdirSync(fullPath, { withFileTypes: true }).forEach(item => {
    if (item.isDirectory() && !item.name.startsWith(".")) {
      let text = item.name.toString();
      let link = `/${basePath}/${dir}${text}`;
      items.push({ text, link });
    }
  });

  if (items.length > 0) {
    result.items = items;
    result.text = title ? title : text;
    // console.log(`${result.text}: `, result);
  }

  return result;
}
