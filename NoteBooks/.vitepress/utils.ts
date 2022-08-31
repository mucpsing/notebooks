/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date:
 * @Last Modified by: CPS
 * @Last Modified time: 2022-08-31 15:59:10.399542
 * @Projectname
 * @file_path "W:\CPS\MyProject\cps\NoteBooks\.vitepress"
 * @Filename "utils.ts"
 * @Description: 功能描述
 */

import * as path from "path";
import * as fs from "fs";
import * as globby from "globby";

const basePath = path.resolve("../../NoteBooks");
const exclude = ["public", "私人"];

function readD(dir: string) {
  console.log("dir: ", dir);
  let fullPath = path.resolve(basePath, dir);
  if (!fs.lstatSync(fullPath)) return [];

  let title = path.basename(dir);
  let reslut: any[] = [];

  for (let each of fs.readdirSync(fullPath, {
    withFileTypes: true,
  })) {
    let text = each.name.split(".")[0];
    let link = `/${basePath}/${dir}/${text}`;

    if (each.isDirectory()) {
      reslut.push({
        text,
        children: readD(path.join(dir, each.name)),
      });
    } else {
      if (!each.name.endsWith(".md")) continue;
      reslut.push({ text, link });
    }
  }

  return reslut;
}

const basePathInfo = fs
  .readdirSync(basePath, { withFileTypes: true })
  .filter(Dirrent => Dirrent.isDirectory() && !Dirrent.name.startsWith(".") && !exclude.includes(Dirrent.name))
  .map(item => item.name.toString());

let t = path.join(basePath, "/*.md");
console.log("t: ", t);
console.log(
  "basePathInfo: ",
  globby.sync(basePath, {
    expandDirectories: {
      extensions: ["md"],
    },
  })
);
