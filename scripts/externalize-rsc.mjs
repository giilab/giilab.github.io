// Post-build: move each page's inline React Server Component payload
// (`self.__next_f.push(...)` scripts, ~half of every HTML file) into one
// content-hashed, long-cached file per page. The browser runs it before
// DOMContentLoaded (defer), which is when Next closes the payload stream,
// so hydration sees the same data in the same order.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const DIR = "_next/static/rsc";
const RSC = /<script>((?:\(self\.__next_f=self\.__next_f\|\|\[\]\)|self\.__next_f)\.push\([\s\S]*?)<\/script>/g;

mkdirSync(join(OUT, DIR), { recursive: true });

const pages = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? (e.name === "_next" ? [] : pages(join(dir, e.name)))
    : e.name.endsWith(".html") ? [join(dir, e.name)] : [],
  );

for (const file of pages(OUT)) {
  const html = readFileSync(file, "utf8");
  const chunks = [...html.matchAll(RSC)].map((m) => m[1]);
  if (!chunks.length) continue;

  const js = chunks.join(";\n");
  const name = `${createHash("sha256").update(js).digest("hex").slice(0, 16)}.js`;
  writeFileSync(join(OUT, DIR, name), js);

  const tag = `<script src="/${DIR}/${name}" defer></script>`;
  writeFileSync(file, html.replace(RSC, "").replace("</head>", `${tag}</head>`));
  console.log(`${file}: ${chunks.length} payload scripts -> /${DIR}/${name}`);
}
