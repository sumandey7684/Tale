import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

(globalThis as typeof globalThis & { React: typeof React }).React = React;

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
const distIndexPath = path.resolve(currentDir, "../dist/index.html");

async function prerender() {
  const htmlTemplate = await readFile(distIndexPath, "utf8");
  const appHtml = renderToString(React.createElement(App));
  const html = htmlTemplate.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  await writeFile(distIndexPath, html, "utf8");
  console.log("Prerendered route: /");
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
