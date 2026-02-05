export type ProductCategory = 
  | "hormone-therapy" 
  | "dermatology" 
  | "pain-management" 
  | "wellness"

export interface Product {
  id: string
  name: string
  description: string
  category: ProductCategory
  categoryLabel: string
  benefits: string[]
  image: string
  tags: string[]
}

export const products: Product[] = [
  // Hormone Therapy
  {
    id: "bioidentical-estrogen",
    name: "Bioidentical Estrogen Cream",
    description: "Custom-compounded bioidentical estrogen cream formulated to match your body's natural hormones. Helps manage menopausal symptoms and supports hormonal balance.",
    category: "hormone-therapy",
    categoryLabel: "Hormone Therapy",
    benefits: ["Reduces hot flashes", "Improves sleep quality", "Supports bone health", "Enhances mood stability"],
    image: "/products/estrogen-cream.jpg",
    tags: ["menopause", "hot-flashes", "sleep", "women"]
  },
  {
    id: "testosterone-cream",
    name: "Testosterone Cream",
    description: "Precision-dosed testosterone cream for men and women experiencing low testosterone levels. Customized to your specific hormone needs.",
    category: "hormone-therapy",
    categoryLabel: "Hormone Therapy",
    benefits: ["Increases energy levels", "Supports muscle mass", "Improves libido", "Enhances mental clarity"],
    image: "/products/testosterone-cream.jpg",
    tags: ["energy", "muscle", "libido", "men", "women"]
  },
  {
    id: "thyroid-compound",
    name: "Custom Thyroid Compound",
    description: "Personalized thyroid hormone formulation combining T3 and T4 in the exact ratio your body needs for optimal thyroid function.",
    category: "hormone-therapy",
    categoryLabel: "Hormone Therapy",
    benefits: ["Regulates metabolism", "Improves energy", "Supports weight management", "Enhances cognitive function"],
    image: "/products/thyroid-compound.jpg",
    tags: ["thyroid", "metabolism", "energy", "weight"]
  },
  {
    id: "progesterone-capsules",
    name: "Micronized Progesterone",
    description: "Bioidentical progesterone capsules that support hormonal balance, healthy sleep patterns, and overall well-being.",
    category: "hormone-therapy",
    categoryLabel: "Hormone Therapy",
    benefits: ["Promotes restful sleep", "Balances estrogen", "Reduces anxiety", "Supports uterine health"],
    image: "/products/progesterone.jpg",
    tags: ["sleep", "anxiety", "balance", "women"]
  },

  // Dermatology
  {
    id: "anti-aging-serum",
    name: "Custom Anti-Aging Serum",
    description: "Powerful anti-aging formulation combining retinoids, peptides, and antioxidants tailored to your skin type and concerns.",
    category: "dermatology",
    categoryLabel: "Dermatology",
    benefits: ["Reduces fine lines", "Improves skin texture", "Boosts collagen", "Evens skin tone"],
    image: "/products/anti-aging-serum.jpg",
    tags: ["aging", "wrinkles", "collagen", "skin"]
  },
  {
    id: "acne-treatment",
    name: "Prescription Acne Treatment",
    description: "Custom-strength acne treatment combining multiple active ingredients for effective control of acne and prevention of scarring.",
    category: "dermatology",
    categoryLabel: "Dermatology",
    benefits: ["Clears active breakouts", "Reduces inflammation", "Prevents new acne", "Minimizes scarring"],
    image: "/products/acne-treatment.jpg",
    tags: ["acne", "breakouts", "inflammation", "skin"]
  },
  {
    id: "hydroquinone-cream",
    name: "Hydroquinone Bleaching Cream",
    description: "Professional-strength skin lightening cream for treating hyperpigmentation, dark spots, and melasma.",
    category: "dermatology",
    categoryLabel: "Dermatology",
    benefits: ["Fades dark spots", "Treats melasma", "Evens skin tone", "Reduces hyperpigmentation"],
    image: "/products/hydroquinone.jpg",
    tags: ["dark-spots", "melasma", "pigmentation", "skin"]
  },
  {
    id: "eczema-relief",
    name: "Eczema Relief Cream",
    description: "Soothing, custom-formulated cream for eczema relief that reduces inflammation and restores the skin barrier.",
    category: "dermatology",
    categoryLabel: "Dermatology",
    benefits: ["Relieves itching", "Reduces inflammation", "Repairs skin barrier", "Moisturizes deeply"],
    image: "/products/eczema-relief.jpg",
    tags: ["eczema", "itching", "inflammation", "dry-skin"]
  },

  // Pain Management
  {
    id: "topical-pain-cream",
    name: "Multi-Action Pain Cream",
    description: "Powerful topical pain relief combining multiple active ingredients for effective management of chronic and acute pain.",
    category: "pain-management",
    categoryLabel: "Pain Management",
    benefits: ["Reduces inflammation", "Relieves muscle pain", "Eases joint discomfort", "Fast-acting relief"],
    image: "/products/pain-cream.jpg",
    tags: ["pain", "inflammation", "muscle", "joint"]
  },
  {
    id: "nerve-pain-gel",
    name: "Neuropathy Relief Gel",
    description: "Specialized gel formulation for nerve pain and neuropathy, providing targeted relief for burning, tingling sensations.",
    category: "pain-management",
    categoryLabel: "Pain Management",
    benefits: ["Soothes nerve pain", "Reduces tingling", "Improves sensation", "Non-systemic relief"],
    image: "/products/nerve-pain-gel.jpg",
    tags: ["neuropathy", "nerve-pain", "tingling", "numbness"]
  },
  {
    id: "migraine-compound",
    name: "Migraine Relief Compound",
    description: "Custom nasal spray or oral formulation designed for fast-acting migraine relief and prevention.",
    category: "pain-management",
    categoryLabel: "Pain Management",
    benefits: ["Fast relief onset", "Reduces nausea", "Prevents migraines", "Multiple delivery options"],
    image: "/products/migraine-compound.jpg",
    tags: ["migraine", "headache", "nausea", "prevention"]
  },
  {
    id: "arthritis-cream",
    name: "Arthritis Joint Cream",
    description: "Targeted joint pain relief cream specifically formulated for arthritis sufferers with anti-inflammatory compounds.",
    category: "pain-management",
    categoryLabel: "Pain Management",
    benefits: ["Eases joint stiffness", "Reduces swelling", "Improves mobility", "Long-lasting relief"],
    image: "/products/arthritis-cream.jpg",
    tags: ["arthritis", "joints", "stiffness", "swelling"]
  },

  // Wellness
  {
    id: "vitamin-d3-drops",
    name: "High-Potency Vitamin D3",
    description: "Pharmaceutical-grade vitamin D3 drops in custom dosages for optimal absorption and immune support.",
    category: "wellness",
    categoryLabel: "Wellness",
    benefits: ["Supports immune function", "Enhances bone health", "Improves mood", "Easy absorption"],
    image: "/products/vitamin-d3.jpg",
    tags: ["immune", "vitamins", "bones", "mood"]
  },
  {
    id: "b12-injections",
    name: "B12 Injection Kit",
    description: "Methylcobalamin B12 injection kit for maximum energy support and neurological health.",
    category: "wellness",
    categoryLabel: "Wellness",
    benefits: ["Boosts energy", "Supports nerve health", "Improves focus", "Enhances metabolism"],
    image: "/products/b12-injection.jpg",
    tags: ["energy", "b12", "focus", "metabolism"]
  },
  {
    id: "weight-management",
    name: "Weight Management Formula",
    description: "Comprehensive weight management compound supporting metabolism, appetite control, and healthy weight loss.",
    category: "wellness",
    categoryLabel: "Wellness",
    benefits: ["Supports metabolism", "Controls appetite", "Increases energy", "Promotes fat burning"],
    image: "/products/weight-management.jpg",
    tags: ["weight-loss", "metabolism", "appetite", "energy"]
  },
  {
    id: "sleep-support",
    name: "Custom Sleep Support",
    description: "Natural sleep support formula combining melatonin with calming compounds for restful, restorative sleep.",
    category: "wellness",
    categoryLabel: "Wellness",
    benefits: ["Promotes relaxation", "Improves sleep quality", "Reduces sleep latency", "Non-habit forming"],
    image: "/products/sleep-support.jpg",
    tags: ["sleep", "insomnia", "relaxation", "melatonin"]
  }
]

export const categories = [
  {
    id: "hormone-therapy",
    name: "Hormone Therapy",
    description: "Bioidentical hormone replacement therapy customized to your body's unique needs.",
    icon: "activity"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Custom skincare solutions for acne, aging, pigmentation, and skin conditions.",
    icon: "sparkles"
  },
  {
    id: "pain-management",
    name: "Pain Management",
    description: "Targeted pain relief compounds for chronic and acute pain conditions.",
    icon: "heart-pulse"
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Vitamins, supplements, and compounds to support your overall health.",
    icon: "leaf"
  }
]

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByTags(tags: string[]): Product[] {
  return products.filter(p => 
    tags.some(tag => p.tags.includes(tag))
  ).sort((a, b) => {
    const aMatches = a.tags.filter(t => tags.includes(t)).length
    const bMatches = b.tags.filter(t => tags.includes(t)).length
    return bMatches - aMatches
  })
}
