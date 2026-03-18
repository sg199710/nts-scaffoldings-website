const fs = require("fs");
const path = require("path");
const xmlPath = process.argv[2] || "c:/Users/vs19d/Downloads/NTS_Projects_extract/word/document.xml";
const xml = fs.readFileSync(xmlPath, "utf8");

// Extract all w:t text content
const textRegex = /<w:t[^>]*>([^<]*)<\/w:t>/g;
const texts = [];
let match;
while ((match = textRegex.exec(xml)) !== null) {
  const t = match[1].trim();
  if (t) texts.push(t);
}

// Extract r:embed to get image order (rId9, rId10, ...)
const embedRegex = /r:embed="(rId\d+)"/g;
const embeds = [];
while ((match = embedRegex.exec(xml)) !== null) {
  embeds.push(match[1]);
}

const out = { texts, embedsCount: embeds.length };
fs.writeFileSync(path.join(__dirname, "docx-extract.json"), JSON.stringify(out, null, 2));
console.log("Texts:", texts.length, "Embeds:", embeds.length);
