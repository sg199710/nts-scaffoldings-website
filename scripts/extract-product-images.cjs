/**
 * Extract product images from reference catalog (attachments).
 * Each reference image is a 2x2 grid: topLeft, topRight, bottomLeft, bottomRight.
 * Crops each quadrant and saves to public/products/{id}.jpg
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const REF_DIR = "c:\\Users\\vs19d\\Downloads\\attachments";
const OUT_DIR = path.join(__dirname, "..", "public", "products");

// Order: [topLeft, topRight, bottomLeft, bottomRight] per reference image
const REF_PRODUCTS = [
  // IMG_3408
  ["cuplock-standards", "ledgers", "adjustable-base-plates", "adjustable-u-head-jacks"],
  // IMG_3409
  ["challie", "telescopic-prop", "staircase-tower", "transoms"],
  // IMG_3410
  ["t-type-anchor", "toe-board-holder", "ladder", "cantilever-frame"],
  // IMG_3411
  ["wall-foam-panel", "toe-board-with-holder", "fixed-clamp", "walk-way-boards"],
  // IMG_3412
  ["swivel-couplers", "waller-washer-plate", "prop-sleeve", "hop-up-bracket"],
  // IMG_3413
  ["bottom-cup", "ledger-blade", "internal-joint-pin", "top-cup"],
  // IMG_3414
  ["board-retaining-coupler", "german-single-coupler", "pressed-putlog-coupler", "beam-coupler"],
  // IMG_3415
  ["british-double-coupler", "british-swivel-coupler", "wing-nut", "square-plate-wing-nut"],
  // IMG_3416
  ["water-stopper", "square-plate-wing-nut", "spigot", "brace"],
  // IMG_3417
  ["bay-brace", "steel-plank", "aluminium-ladder-beam", "adjustable-column-formwork"],
];

const REF_FILES = [
  "IMG_3408.jpeg", "IMG_3409.jpeg", "IMG_3410.jpeg", "IMG_3411.jpeg", "IMG_3412.jpeg",
  "IMG_3413.jpeg", "IMG_3414.jpeg", "IMG_3415.jpeg", "IMG_3416.jpeg", "IMG_3417.jpeg",
];

async function extract() {
  if (!fs.existsSync(REF_DIR)) {
    console.error("Reference folder not found:", REF_DIR);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (let i = 0; i < REF_FILES.length; i++) {
    const refPath = path.join(REF_DIR, REF_FILES[i]);
    if (!fs.existsSync(refPath)) {
      console.warn("Skip (not found):", refPath);
      continue;
    }
    const ids = REF_PRODUCTS[i];
    const img = sharp(refPath);
    const meta = await img.metadata();
    const w = meta.width || 800;
    const h = meta.height || 600;
    const hw = Math.floor(w / 2);
    const hh = Math.floor(h / 2 );
    const quadrants = [
      { left: 0, top: 0, width: hw, height: hh },
      { left: hw, top: 0, width: w - hw, height: hh },
      { left: 0, top: hh, width: hw, height: h - hh },
      { left: hw, top: hh, width: w - hw, height: h - hh },
    ];
    for (let q = 0; q < 4; q++) {
      const id = ids[q];
      const outPath = path.join(OUT_DIR, `${id}.jpg`);
      await sharp(refPath)
        .extract(quadrants[q])
        .jpeg({ quality: 88 })
        .toFile(outPath);
      console.log("Written:", outPath);
    }
  }
  console.log("Done.");
}

extract().catch((e) => {
  console.error(e);
  process.exit(1);
});
