/** Temporary product data — replace with backend later */

export const PRODUCTS = [
  {
    slug: "luna-liven",
    name: "Luna Liven İstirahət Kürsüsü",
    stock: { current: 13, total: 100 },
    mainImage: "/LunaLivenMain.png",
    thumbnails: Array(6).fill("/LunaLivenMain.png"),
    colors: [
      { id: "orange", hex: "#E07B2A", label: "Canlı Narıncı" },
      { id: "blue", hex: "#8CB4C9", label: "Açıq Mavi" },
      { id: "grey", hex: "#9A9690", label: "Boz" },
      { id: "teal", hex: "#4A7C7C", label: "Firuzəyi" },
      { id: "cream", hex: "#E8E2D8", label: "Krem" },
    ],
    description:
      "Luna Liven kürsüsü müasir interyer üçün yaradılıb: yumşaq oturacaq, təbii ağac detallar və zərif siluet. Evinizdə rahatlıq və estetikanı bir araya gətirir.",
    features: [
      "Yüksək keyfiyyətli kətan parça",
      "Ergonomik oturacaq dizaynı",
      "Asan təmizləmə və qulluq",
      "Davamlı mənbələrdən əldə edilmiş ağac",
    ],
    specs: [
      { label: "Material", value: "Kül Ağacı, Kətan Parça" },
      { label: "Rəng", value: "Canlı Narıncı" },
      { label: "Çəki", value: "11.5 Kg" },
      { label: "Yığılma", value: "Qismən (Alətlər Daxildir)" },
      { label: "Zəmanət", value: "2 il" },
    ],
    barLines: ["Gündəlik istirahət mərkəziniz.", "Funksional dizayn."],
  },
  {
    slug: "salis-istirahet-kursusu",
    name: "Salis İstirahət Kürsüsü",
    stock: { current: 24, total: 100 },
    mainImage: "/SalisIstirahetKursusu.png",
    thumbnails: Array(6).fill("/SalisIstirahetKursusu.png"),
    colors: [
      { id: "cream", hex: "#E8E2D8", label: "Krem" },
      { id: "grey", hex: "#9A9690", label: "Boz" },
      { id: "orange", hex: "#E07B2A", label: "Narıncı" },
    ],
    description:
      "Salis kürsüsü qonaq otağınız üçün ideal seçimdir: rahat oturacaq, davamlı karkas və zərif xətlər.",
    features: [
      "Premium parça örtük",
      "Möhkəm ağac karkas",
      "Zamanla forma saxlayır",
      "Davamlı mənbələrdən əldə edilmiş ağac",
    ],
    specs: [
      { label: "Material", value: "Meşə, Parça" },
      { label: "Rəng", value: "Krem" },
      { label: "Çəki", value: "10.2 Kg" },
      { label: "Yığılma", value: "Tam" },
      { label: "Zəmanət", value: "2 il" },
    ],
    barLines: ["Gündəlik istirahət mərkəziniz.", "Funksional dizayn."],
  },
  {
    slug: "aria-palid-masasi",
    name: "Aria Palıd Masası",
    stock: { current: 8, total: 50 },
    mainImage: "/AriaPalidMasasi.png",
    thumbnails: Array(6).fill("/AriaPalidMasasi.png"),
    colors: [{ id: "wood", hex: "#C4A574", label: "Təbii Ağac" }],
    description:
      "Aria Palıd masası yemək otağınız üçün isti və zərif bir mərkəz yaradır. Təbii ağac toxuması və uzunömürlü konstruksiya.",
    features: [
      "Massiv palıd ağacı",
      "Zərif minimal dizayn",
      "Geniş oturacaq sahəsi",
      "Davamlı mənbələrdən əldə edilmiş ağac",
    ],
    specs: [
      { label: "Material", value: "Palıd Ağacı" },
      { label: "Rəng", value: "Təbii" },
      { label: "Çəki", value: "42 Kg" },
      { label: "Yığılma", value: "Qismən" },
      { label: "Zəmanət", value: "3 il" },
    ],
    barLines: ["Gündəlik istirahət mərkəziniz.", "Funksional dizayn."],
  },
  {
    slug: "luna-asma-cilciraq",
    name: "Luna Asma Çılçıraq",
    stock: { current: 31, total: 80 },
    mainImage: "/LunaAsmaCilciraq.png",
    thumbnails: Array(6).fill("/LunaAsmaCilciraq.png"),
    colors: [{ id: "gold", hex: "#C9A227", label: "Qızılı" }],
    description:
      "Luna asma çılçıraq interyerinizə isti işıq və zəriflik gətirir. Müasir metal detallar və yumşaq işıq paylanması.",
    features: [
      "Tənzimlənən işıq intensivliyi",
      "Metal konstruksiya",
      "Asan quraşdırma",
      "Enerji effektiv LED",
    ],
    specs: [
      { label: "Material", value: "Metal, Şüşə" },
      { label: "Rəng", value: "Qızılı" },
      { label: "Çəki", value: "3.2 Kg" },
      { label: "Yığılma", value: "Tam" },
      { label: "Zəmanət", value: "2 il" },
    ],
    barLines: ["Gündəlik istirahət mərkəziniz.", "Funksional dizayn."],
  },
  {
    slug: "linear-komod",
    name: "Linear Komod",
    stock: { current: 5, total: 30 },
    mainImage: "/LinearKomod.png",
    thumbnails: Array(6).fill("/LinearKomod.png"),
    colors: [{ id: "wood", hex: "#8B6914", label: "Tünd Ağac" }],
    description:
      "Linear komod funksionallıq və estetikanı birləşdirir. Geniş saxlama və müasir xətlər.",
    features: [
      "Geniş çekməcələr",
      "Möhkəm konstruksiya",
      "Minimal dizayn",
      "Davamlı mənbələrdən əldə edilmiş ağac",
    ],
    specs: [
      { label: "Material", value: "MDF, Ağac veneer" },
      { label: "Rəng", value: "Tünd qəhvəyi" },
      { label: "Çəki", value: "38 Kg" },
      { label: "Yığılma", value: "Qismən" },
      { label: "Zəmanət", value: "2 il" },
    ],
    barLines: ["Gündəlik istirahət mərkəziniz.", "Funksional dizayn."],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export const CATALOG_SLUG_BY_BASE_NAME = {
  "Aria Palıd Masası": "aria-palid-masasi",
  "Salis İstirahət Kürsüsü": "salis-istirahet-kursusu",
  "Luna Asma Çılçıraq": "luna-asma-cilciraq",
  "Linear Komod": "linear-komod",
};

export function slugFromCatalogName(name) {
  const base = name.replace(/\s+\d+$/, "").trim();
  return CATALOG_SLUG_BY_BASE_NAME[base] ?? "luna-liven";
}

/** Similar products list (temporary — backend later) */
export const SIMILAR_PRODUCTS = [
  {
    id: "sim-1",
    slug: "luna-asma-cilciraq",
    title: "Aura Masa Lampası",
    subtitle: "Yataq otağı üçün minimalist masa lampası.",
    price: "$79",
  },
  {
    id: "sim-2",
    slug: "luna-liven",
    title: "Lunna İstirahət Kürsüsü",
    subtitle:
      "Yumşaq parça və təbii ağac kombinasiyası ilə rahat oturacaq. Gündəlik istifadə üçün ideal.",
    price: "$109",
  },
  {
    id: "sim-3",
    slug: "salis-istirahet-kursusu",
    title: "Salis İstirahət Kürsüsü",
    subtitle: "Qonaq otağı üçün zərif və rahat kürsü.",
    price: "$240",
  },
  {
    id: "sim-4",
    slug: "aria-palid-masasi",
    title: "Aria Palıd Masası",
    subtitle: "Yemək otağı üçün təbii ağac masa.",
    price: "$1,850",
  },
  {
    id: "sim-5",
    slug: "linear-komod",
    title: "Linear Komod",
    subtitle: "Saxlama və funksionallıq bir arada.",
    price: "$3,200",
  },
];

export function getSimilarProducts(currentSlug, limit = 5) {
  return SIMILAR_PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

/** Other collections grid (temporary — backend later) */
export const COLLECTION_ITEMS = [
  { id: "col-1", slug: "salis-istirahet-kursusu", name: "Yellənən Kürsü", price: "$79", img: "/SalisIstirahetKursusu.png" },
  { id: "col-2", slug: "luna-asma-cilciraq", name: "Aura Bitki Vazası", price: "$45", img: "/LunaAsmaCilciraq.png" },
  { id: "col-3", slug: "linear-komod", name: "Hasır Puf", price: "$129", img: "/LinearKomod.png" },
  { id: "col-4", slug: "aria-palid-masasi", name: "Dairəvi Yemək Masası", price: "$890", img: "/AriaPalidMasasi.png" },
  { id: "col-5", slug: "luna-asma-cilciraq", name: "Masa Lampası", price: "$79", img: "/LunaAsmaCilciraq.png" },
  { id: "col-6", slug: "luna-liven", name: "Geyim Asqısı", price: "$65", img: "/LunaLivenMain.png" },
  { id: "col-7", slug: "linear-komod", name: "Divar Rəfi", price: "$120", img: "/LinearKomod.png" },
  { id: "col-8", slug: "aria-palid-masasi", name: "Ağac Şkaf", price: "$450", img: "/AriaPalidMasasi.png" },
  { id: "col-9", slug: "aria-palid-masasi", name: "Kofe Masası", price: "$320", img: "/AriaPalidMasasi.png" },
  { id: "col-10", slug: "luna-liven", name: "Yemək Kürsüsü", price: "$189", img: "/LunaLivenMain.png" },
];

export function getCollectionItems() {
  return COLLECTION_ITEMS;
}
