export type ProductCategory =
  | "Cuplock System"
  | "Props & Jacks"
  | "Couplers & Clamps"
  | "Access & Safety"
  | "Formwork"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  sizes?: string;
  finishes?: string;
  category: ProductCategory;
  image: string;
}

export const products: Product[] = [
  // ── Cuplock System ──
  {
    id: "cuplock-standards",
    name: "Cuplock Standards",
    sizes: "3m / 2.5m / 2m / 1.5m / 1m / 0.5m",
    finishes: "Mild Steel / Galvanized Iron",
    category: "Cuplock System",
    image: "/products/hex15.jpg",
  },
  {
    id: "ledgers",
    name: "Ledgers",
    sizes: "2.5m / 2m / 1.8m / 1.6m / 1.5m / 1.2m / 1m / 0.9m / 0.6m",
    finishes: "Mild Steel / Galvanized Steel",
    category: "Cuplock System",
    image: "/products/hex18.jpg",
  },
  {
    id: "transoms",
    name: "Transoms",
    sizes: "2.5m / 2m / 1.5m / 1.2m / 1m / 0.6m",
    category: "Cuplock System",
    image: "/products/hex7.jpg",
  },
  {
    id: "top-cup",
    name: "Top Cup",
    category: "Cuplock System",
    image: "/products/hex38.jpg",
  },
  {
    id: "bottom-cup",
    name: "Bottom Cup",
    category: "Cuplock System",
    image: "/products/hex31.jpg",
  },
  {
    id: "ledger-blade",
    name: "Ledger Blade",
    category: "Cuplock System",
    image: "/products/hex29.jpg",
  },
  {
    id: "internal-joint-pin",
    name: "Internal Joint Pin",
    category: "Cuplock System",
    image: "/products/hex32.jpg",
  },
  {
    id: "spigot",
    name: "Spigot",
    category: "Cuplock System",
    image: "/products/hex42.jpg",
  },

  // ── Props & Jacks ──
  {
    id: "adjustable-base-plates",
    name: "Adjustable Base Plates",
    sizes: "350mm / 450mm / 700mm",
    category: "Props & Jacks",
    image: "/products/hex13.jpg",
  },
  {
    id: "adjustable-u-head-jacks",
    name: "Adjustable U Head Jacks",
    sizes: "350mm / 450mm / 700mm",
    category: "Props & Jacks",
    image: "/products/hex11.jpg",
  },
  {
    id: "telescopic-prop",
    name: "Telescopic Prop",
    sizes: "2×3m / 2×2m / 2m (inner) / 3m (inner) / 2m (outer)",
    category: "Props & Jacks",
    image: "/products/hex12.jpg",
  },
  {
    id: "prop-sleeve",
    name: "Prop Sleeve",
    category: "Props & Jacks",
    image: "/products/hex14.jpg",
  },

  // ── Couplers & Clamps ──
  {
    id: "fixed-clamp",
    name: "Fixed Clamp",
    category: "Couplers & Clamps",
    image: "/products/hex9.jpg",
  },
  {
    id: "swivel-couplers",
    name: "Swivel Couplers",
    finishes: "Forged",
    category: "Couplers & Clamps",
    image: "/products/hex22.jpg",
  },
  {
    id: "board-retaining-coupler",
    name: "Board Retaining Coupler",
    category: "Couplers & Clamps",
    image: "/products/hex25.jpg",
  },
  {
    id: "german-single-coupler",
    name: "German Type Single Coupler with Welded L-Plank",
    category: "Couplers & Clamps",
    image: "/products/hex30.jpg",
  },
  {
    id: "pressed-putlog-coupler",
    name: "Pressed Putlog Coupler",
    category: "Couplers & Clamps",
    image: "/products/hex23.jpg",
  },
  {
    id: "beam-coupler",
    name: "Beam Coupler",
    category: "Couplers & Clamps",
    image: "/products/hex26.jpg",
  },
  {
    id: "british-double-coupler",
    name: "British Type Double Coupler",
    category: "Couplers & Clamps",
    image: "/products/hex36.jpg",
  },
  {
    id: "british-swivel-coupler",
    name: "British Type Swivel Coupler",
    category: "Couplers & Clamps",
    image: "/products/hex41.jpg",
  },

  // ── Access & Safety ──
  {
    id: "staircase-tower",
    name: "Staircase Tower",
    category: "Access & Safety",
    image: "/products/hex17.jpg",
  },
  {
    id: "ladder",
    name: "Ladder",
    sizes: "3m / 4m / 6m",
    finishes: "Mild Steel / Galvanized Iron",
    category: "Access & Safety",
    image: "/products/hex35.jpg",
  },
  {
    id: "walk-way-boards",
    name: "Walk Way Boards",
    sizes: "2.5m / 2m / 1.8m / 1.6m / 1.5m / 1.2m / 1m",
    category: "Access & Safety",
    image: "/products/hex5.jpg",
  },
  {
    id: "steel-plank",
    name: "Steel Plank",
    category: "Access & Safety",
    image: "/products/hex20.jpg",
  },
  {
    id: "toe-board-holder",
    name: "Toe Board Holder",
    category: "Access & Safety",
    image: "/products/hex21.jpg",
  },
  {
    id: "toe-board-with-holder",
    name: "Toe Board with Holder",
    category: "Access & Safety",
    image: "/products/hex33.jpg",
  },
  {
    id: "hop-up-bracket",
    name: "Hop Up Bracket",
    category: "Access & Safety",
    image: "/products/hex37.jpg",
  },

  // ── Formwork ──
  {
    id: "adjustable-column-formwork",
    name: "Adjustable Column Formwork",
    category: "Formwork",
    image: "/products/hex2.jpg",
  },
  {
    id: "pier-formwork",
    name: "Pier Formwork",
    category: "Formwork",
    image: "/products/hex4.jpg",
  },
  {
    id: "wall-foam-panel",
    name: "Wall Foam Panel",
    category: "Formwork",
    image: "/products/hex39.jpg",
  },
  {
    id: "aluminium-ladder-beam",
    name: "Aluminium Ladder Beam",
    category: "Formwork",
    image: "/products/hex0.jpg",
  },

  // ── Accessories ──
  {
    id: "challie",
    name: "Challie",
    sizes: "6m / 3m / 2.5m",
    category: "Accessories",
    image: "/products/hex44.jpg",
  },
  {
    id: "t-type-anchor",
    name: "T Type Anchor",
    sizes: "6m / 3m / 2.5m",
    category: "Accessories",
    image: "/products/hex34.jpg",
  },
  {
    id: "cantilever-frame",
    name: "Cantilever Frame",
    category: "Accessories",
    image: "/products/hex43.jpg",
  },
  {
    id: "waller-washer-plate",
    name: "Waller Washer Plate",
    category: "Accessories",
    image: "/products/hex19.jpg",
  },
  {
    id: "wing-nut",
    name: "Wing Nut",
    category: "Accessories",
    image: "/products/hex27.jpg",
  },
  {
    id: "square-plate-wing-nut",
    name: "Square Plate Wing Nut",
    category: "Accessories",
    image: "/products/hex8.jpg",
  },
  {
    id: "water-stopper",
    name: "Water Stopper",
    category: "Accessories",
    image: "/products/hex28.jpg",
  },
  {
    id: "brace",
    name: "Brace",
    category: "Accessories",
    image: "/products/hex40.jpg",
  },
  {
    id: "bay-brace",
    name: "Bay Brace",
    category: "Accessories",
    image: "/products/hex10.jpg",
  },
];

export const productCategories: ProductCategory[] = [
  "Cuplock System",
  "Props & Jacks",
  "Couplers & Clamps",
  "Access & Safety",
  "Formwork",
  "Accessories",
];
