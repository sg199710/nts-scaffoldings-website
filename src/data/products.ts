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
    image: "/products/Cuplock%20Standards.jpg",
  },
  {
    id: "ledgers",
    name: "Ledgers",
    sizes: "2.5m / 2m / 1.8m / 1.6m / 1.5m / 1.2m / 1m / 0.9m / 0.6m",
    finishes: "Mild Steel / Galvanized Steel",
    category: "Cuplock System",
    image: "/products/Ledgers.jpg",
  },
  {
    id: "transoms",
    name: "Transoms",
    sizes: "2.5m / 2m / 1.5m / 1.2m / 1m / 0.6m",
    category: "Cuplock System",
    image: "/products/Transoms.jpg",
  },
  {
    id: "top-cup",
    name: "Top Cup",
    category: "Cuplock System",
    image: "/products/Top%20Cup.jpg",
  },
  {
    id: "bottom-cup",
    name: "Bottom Cup",
    category: "Cuplock System",
    image: "/products/Bottom%20Cup.jpg",
  },
  {
    id: "ledger-blade",
    name: "Ledger Blade",
    category: "Cuplock System",
    image: "/products/Ledger%20Blade.jpg",
  },
  {
    id: "internal-joint-pin",
    name: "Internal Joint Pin",
    category: "Cuplock System",
    image: "/products/Forged%20Internal%20Joint%20Pin.jpg",
  },
  {
    id: "spigot",
    name: "Spigot",
    category: "Cuplock System",
    image: "/products/Spigot.png",
  },

  // ── Props & Jacks ──
  {
    id: "adjustable-base-plates",
    name: "Adjustable Base Plates",
    sizes: "350mm / 450mm / 700mm",
    category: "Props & Jacks",
    image: "/products/Adjustable%20Base%20Plates.jpg",
  },
  {
    id: "adjustable-u-head-jacks",
    name: "Adjustable U Head Jacks",
    sizes: "350mm / 450mm / 700mm",
    category: "Props & Jacks",
    image: "/products/Adjustable%20U%20Head%20Jack.jpg",
  },
  {
    id: "telescopic-prop",
    name: "Telescopic Prop",
    sizes: "2×3m / 2×2m / 2m (inner) / 3m (inner) / 2m (outer)",
    category: "Props & Jacks",
    image: "/products/Telescopic%20Prop.jpg",
  },
  {
    id: "prop-sleeve",
    name: "Prop Sleeve",
    category: "Props & Jacks",
    image: "/products/Prop%20Sleeve.jpg",
  },

  // ── Couplers & Clamps ──
  {
    id: "fixed-clamp",
    name: "Fixed Clamp",
    category: "Couplers & Clamps",
    image: "/products/Fixed%20Clamp.jpg",
  },
  {
    id: "swivel-couplers",
    name: "Swivel Couplers",
    finishes: "Forged",
    category: "Couplers & Clamps",
    image: "/products/Swivel%20Coupler.jpg",
  },
  {
    id: "board-retaining-coupler",
    name: "Board Retaining Coupler",
    category: "Couplers & Clamps",
    image: "/products/Board%20Retaining%20Coupler.jpg",
  },
  {
    id: "german-single-coupler",
    name: "German Type Single Coupler with Welded L-Plank",
    category: "Couplers & Clamps",
    image: "/products/German%20Type%20Single%20Coupler%20With%20Welded%20L-Plank.jpg",
  },
  {
    id: "pressed-putlog-coupler",
    name: "Pressed Putlog Coupler",
    category: "Couplers & Clamps",
    image: "/products/Pressed%20Putlog%20Coupler.jpg",
  },
  {
    id: "beam-coupler",
    name: "Beam Coupler",
    category: "Couplers & Clamps",
    image: "/products/Beam%20Coupler.jpg",
  },
  {
    id: "british-double-coupler",
    name: "British Type Double Coupler",
    category: "Couplers & Clamps",
    image: "/products/British%20Type%20Double%20Coupler.jpg",
  },
  {
    id: "british-swivel-coupler",
    name: "British Type Swivel Coupler",
    category: "Couplers & Clamps",
    image: "/products/British%20Type%20Swivel%20Coupler.jpg",
  },

  // ── Access & Safety ──
  {
    id: "staircase-tower",
    name: "Staircase Tower",
    category: "Access & Safety",
    image: "/products/Stairecase%20Tower.jpg",
  },
  {
    id: "ladder",
    name: "Ladder",
    sizes: "3m / 4m / 6m",
    finishes: "Mild Steel / Galvanized Iron",
    category: "Access & Safety",
    image: "/products/Ladder.jpg",
  },
  {
    id: "walk-way-boards",
    name: "Walk Way Boards",
    sizes: "2.5m / 2m / 1.8m / 1.6m / 1.5m / 1.2m / 1m",
    category: "Access & Safety",
    image: "/products/Walk%20Way%20Board.jpg",
  },
  {
    id: "steel-plank",
    name: "Steel Plank",
    category: "Access & Safety",
    image: "/products/Steel%20Plank.jpg",
  },
  {
    id: "toe-board-holder",
    name: "Toe Board Holder",
    category: "Access & Safety",
    image: "/products/Toe%20Board%20Holder.jpg",
  },
  {
    id: "toe-board-with-holder",
    name: "Toe Board with Holder",
    category: "Access & Safety",
    image: "/products/Toe%20Board%20with%20Holder.jpg",
  },
  {
    id: "hold-up-bracket",
    name: "Hold Up Bracket",
    category: "Access & Safety",
    image: "/products/hold%20up%20bracket.jpg",
  },

  // ── Formwork ──
  {
    id: "adjustable-column-formwork",
    name: "Adjustable Column Formwork",
    category: "Formwork",
    image: "/products/Adjustable%20Column%20Formwork.jpg",
  },
  {
    id: "pier-formwork",
    name: "Pier Formwork",
    category: "Formwork",
    image: "/products/Pier%20Formwork.jpg",
  },
  {
    id: "wall-foam-panel",
    name: "Wall Foam Panel",
    category: "Formwork",
    image: "/products/Wall%20Foam%20Panel.jpg",
  },
  {
    id: "aluminium-ladder-beam",
    name: "Aluminium Ladder Beam",
    category: "Formwork",
    image: "/products/Alluminium%20Ladder%20Beam.jpg",
  },

  // ── Accessories ──
  {
    id: "challie",
    name: "Challie",
    sizes: "6m / 3m / 2.5m",
    category: "Accessories",
    image: "/products/Challie.jpg",
  },
  {
    id: "t-type-anchor",
    name: "T Type Anchor",
    sizes: "6m / 3m / 2.5m",
    category: "Accessories",
    image: "/products/T%20Type%20Anchor.jpg",
  },
  {
    id: "cantilever-frame",
    name: "Cantilever Frame",
    category: "Accessories",
    image: "/products/Cantilever%20Frame.jpg",
  },
  {
    id: "waller-washer-plate",
    name: "Waller Washer Plate",
    category: "Accessories",
    image: "/products/Waller%20Washer%20Plate.jpg",
  },
  {
    id: "wing-nut",
    name: "Wing Nut",
    category: "Accessories",
    image: "/products/Wing%20Nut.jpg",
  },
  {
    id: "square-plate-wing-nut",
    name: "Square Plate Wing Nut",
    category: "Accessories",
    image: "/products/Square%20Plate%20Wing%20Nut.jpg",
  },
  {
    id: "water-stopper",
    name: "Water Stopper",
    category: "Accessories",
    image: "/products/Water%20Stopper.jpg",
  },
  {
    id: "brace",
    name: "Brace",
    category: "Accessories",
    image: "/products/Brace.jpg",
  },
  {
    id: "bay-brace",
    name: "Bay Brace",
    category: "Accessories",
    image: "/products/Bay%20Brace.jpg",
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
