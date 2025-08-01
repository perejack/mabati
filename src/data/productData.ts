
export type ProductVariant = {
  name: string;
  price: string;
};

export const productData = [
  {
    title: "BOX PROFILE",
    slug: "box-profile",
    description: "This wide span profile is for roofing and cladding. It is designed to provide the building and construction industry with an economical alternative to Invented Box Rib profiles. It is widely used for domestic roofing, industrial roofing, farmhouses, airport hangars and factory sheds.",
    features: [
      "Available in multiple colors",
      "High corrosion resistance",
      "KEBS Diamond Mark of Quality certified",
      "Ideal for both residential and commercial roofing",
    ],
    priceVariants: [
      { name: "Box profile gauge 28", price: "KSh 530 / meter" },
      { name: "Box profile gauge 30", price: "KSh 470 / meter" }
    ],
    availableColors: "GREEN, TILE RED, SKY BLUE, GRAPHITE, BRIGHT RED, BRICK RED, MAROON, SAFARICOM GREEN, REGAL RED",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg",
    sale: true
  },
  {
    title: "VERSATILE",
    slug: "versatile",
    description: "With a great aesthetic value, it is currently one of the most popular and affordable ranges of Maisha. It is manufactured with high standard Mild Steel and Coated with UV Resistant paint. It is available in standard corrugation and is suitable for versatile applications.",
    features: [
      "Elegant appearance",
      "Superior durability",
      "Heat reflection capabilities",
      "Easy installation",
    ],
    priceVariants: [
      { name: "Versatile gauge 28", price: "KSh 650 / meter" },
      { name: "Versatile gauge 30", price: "KSh 555 / meter" }
    ],
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-PREMIUM-TILE.jpg",
    sale: true
  },
  {
    title: "ROMANTILE",
    slug: "romantile",
    description: "Maisha roman tile is, a prestigious and a premium roofing profile. It gives the roof a look resembling 'Roman Clay Tiles.' This is for those who want the beauty of roof tiles without the leaks, maintenance and the added cost of the structure to hold the weight. Due to construction, Maisha roman tile is the most rigid of profiles. And since aluminum has high thermal efficiency one enjoys the benefit of being under a coda roof.",
    features: [
      "Timeless aesthetic appeal",
      "Strong structural integrity",
      "Weather resistant",
      "Long-lasting color retention",
    ],
    priceVariants: [
      { name: "Romantile gauge 28", price: "KSh 640 / meter" },
      { name: "Romantile gauge 30", price: "KSh 550 / meter" }
    ],
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-ROMAN-TILE.jpg",
    sale: true
  },
  {
    title: "CORRUGATED IRON SHEET",
    slug: "corrugated-iron-sheet",
    description: "It is a widely used profile for roofing and cladding applications. This is due to its ease of handling and fixing, relative strength, cost effectiveness and use in common design. Maisha Mabati Colour 11/3 is available in a diverse range of attractive colours with 11/3 corrugation style.",
    features: [
      "Cost-effective solution",
      "Versatile application",
      "Easy installation",
      "Multiple color options",
    ],
    priceVariants: [
      { name: "Corrugated iron sheet gauge 28", price: "KSh 440 / meter" },
      { name: "Corrugated iron sheet gauge 30", price: "KSh 390 / meter" }
    ],
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED, SKY BLUE, MAROON, SAFARICOM GREEN, REGAL RED",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-COLOUR-11_3-PROFILE.jpg",
    sale: false
  },
  {
    title: "MAISHA ALU-ZINC MABATI",
    slug: "maisha-alu-zinc-mabati",
    description: "Maisha Alu-zinc is a flat carbon steel sheet from Maisha Mabati Mills Ltd, setting the regular for dry and protected roofing. This product combines attractive aesthetics with proven resilience. Aesthetically attractive, determinately durable Maisha Alu-zinc's natural spangled silver aspect lends an attractive aesthetical appearance to the steel sheet. Also given the transparent layer of Aluminium oxide on its top surface, the steel will continue to shine over time. In fact, Maisha Alu-zinc's unique combination of Aluminium and zinc has a proven track record for outstanding resistance to corrosion even in highly corrosive environments with 5 times longer product life.",
    features: [
      "Extended lifespan",
      "Heat reflective surface",
      "Rust resistant",
      "Natural metallic finish",
    ],
    priceVariants: [
      { name: "Corrugated iron sheet gauge 28", price: "KSh 440 / meter" },
      { name: "Corrugated iron sheet gauge 30", price: "KSh 390 / meter" }
    ],
    availableColors: "",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-ALU-ZINC-MABATI-11_3.jpg",
    sale: false
  },
  {
    title: "MAISHA TILE",
    slug: "maisha-tile",
    description: "Maisha Tile is popular alternative to convenient roofing tiles. Its appearance and light-weight make it suitable for any architectural concept. Maisha also has vast range of applications.",
    features: [
      "Modern appearance",
      "High wind resistance",
      "Suitable for all applications",
      "Available in various gauges",
    ],
    priceVariants: [
      { name: "Versatile gauge 28", price: "KSh 650 / meter" },
      { name: "Versatile gauge 30", price: "KSh 555 / meter" }
    ],
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
    imageSrc: "/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-TILE.jpeg",
    sale: true
  },
];
