/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date:
 * @Last Modified by: CPS
 * @Last Modified time: 2021-10-21 16:04:34.524514
 * @Projectname
 * @file_path "W:\CPS\MyProject\cps\NoteBooks\.vitepress"
 * @Filename "config.ts"
 * @Description: 功能描述
 */

"use strict";
// import * as path from "path";
// import * as fs from "fs";

import { defineConfig, MarkdownOptions } from "vitepress";
import { Header } from "./Header";
import * as replace from "markdown-it-replace-link";

// import { getHeader } from "./Header";

// interface sideBarItems {
//   text: string;
//   children?: sideBarItems[];
//   link?: string;
// }

// const [mode, basePath = path.resolve("../")] = process.argv.slice(2);

// const currtDir = fs
//   .readdirSync(basePath, { withFileTypes: true })
//   .filter(Dirrent => Dirrent.isDirectory() && !Dirrent.name.startsWith("."))
//   .map(item => item.name.toString());
interface MarkdownOptions {
  replaceLink?: (link: any, env: any) => string;
}
const config = defineConfig({
  title: "Capsion",
  titleTemplate: "个人学习笔记",
  lang: "zh-CN",
  description: "好记性不如烂笔头",

  head: Header,

  base: "/", // 部署时的路径 默认 /  可以使用二级地址 /base/
  cleanUrls: "without-subfolders",

  themeConfig: {
    logo: "mimi.png",
    siteTitle: "Capsion的学习笔记",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mucpsing",
      },
    ],
  },

  markdown: {
    config: md => {
      md.replaceLink = function (link, env) {
        return "http://me.com/" + link;
      };

      md.use(replace);
    },
  },
});

export default config;
