import { globSync } from "glob";
import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import preact from "@preact/preset-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        preact({
            prerender: {
                enabled: true,
                renderTarget: "#root"
            }
        }),
    ],
    build: {
        rolldownOptions: {
            input: Object.fromEntries(
                globSync("src/**/index.html").map((file) => [
                    path.basename(path.dirname(file.slice(0, file.length - path.extname(file).length))),
                    resolve(__dirname, file),
                ]),
            ),
        },
    },
})
