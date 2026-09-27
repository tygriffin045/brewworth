import fs from "fs";
import { products } from "../src/data/products.ts";
import type { Product } from "../src/data/types.ts";

const final: Product[] = [];
for (const p of products) {
  if (p.slug === "breville-54mm-dosing-funnel") {
    console.log("drop funnel");
    continue;
  }
  if (!p.imageUrl || !fs.existsSync("public" + p.imageUrl) || fs.statSync("public" + p.imageUrl).size < 1000) {
    console.log("drop bad image", p.slug, p.imageUrl);
    continue;
  }
  if (p.amazonAsin && !p.imageUrl.includes(p.amazonAsin)) {
    console.log("clear asin mismatch", p.slug);
    delete (p as any).amazonAsin;
  }
  final.push(p);
}
const slugSet = new Set(final.map((p) => p.slug));
for (const p of final) p.relatedSlugs = p.relatedSlugs.filter((s) => slugSet.has(s));

function emit(p: Product): string {
  const o: Record<string, unknown> = { ...p };
  if (!o.amazonAsin) delete o.amazonAsin;
  let json = JSON.stringify(o, null, 2).replace(/"([^"]+)":/g, "$1:").replace(/\n/g, "\n  ");
  return `  ${json}`;
}
const original = fs.readFileSync("src/data/products.ts", "utf8");
const helperMatch = original.match(/\nexport function[\s\S]*$/);
fs.writeFileSync(
  "src/data/products.ts",
  `import type { Product } from "./types";\n\nexport const products: Product[] = [\n` +
    final.map(emit).join(",\n") +
    `\n];\n` +
    (helperMatch ? helperMatch[0] : ""),
);
console.log("final", final.length);
