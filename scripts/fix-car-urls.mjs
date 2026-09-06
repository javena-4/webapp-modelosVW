import { readFileSync, writeFileSync } from "fs";

const fixes = JSON.parse(readFileSync("./scripts/fix-urls.json", "utf8"));
let src = readFileSync("./src/data/cars.ts", "utf8");

for (const [slug, url] of Object.entries(fixes)) {
  const re = new RegExp(
    `(slug: "${slug}",[\\s\\S]*?image:\\s*\\n\\s*")[^"]+(")`,
    "m",
  );
  if (!re.test(src)) {
    console.error("No match for", slug);
    process.exit(1);
  }
  src = src.replace(re, `$1${url}$2`);
  const head = await fetch(url, { method: "HEAD" });
  console.log(slug, head.status);
}

writeFileSync("./src/data/cars.ts", src);
console.log("updated cars.ts");
