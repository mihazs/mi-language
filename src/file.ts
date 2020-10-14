import fs from "fs";

export function read(path: string) {
  return fs.readFileSync(path, "utf8");
}
export function write(path: string, content: string) {
  console.log(path);
  fs.writeFileSync(path, content, "utf-8");
}
