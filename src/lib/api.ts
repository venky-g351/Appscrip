// src/lib/api.ts
import { Product } from "@/types";

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 201,
    title: "Seaside Linen Blazer",
    price: 79.99,
    description: "Lightweight linen blazer with a relaxed summer fit.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/product-201/500/500",
    rating: { rate: 4.4, count: 210 },
  },
  {
    id: 202,
    title: "Vintage Leather Satchel",
    price: 149.99,
    description: "Handcrafted leather satchel with polished brass hardware.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/product-202/500/500",
    rating: { rate: 4.7, count: 88 },
  },
  {
    id: 203,
    title: "Modern Track Sneakers",
    price: 89.99,
    description: "Cushioned running sneakers built for daily comfort.",
    category: "shoes",
    image: "https://picsum.photos/seed/product-203/500/500",
    rating: { rate: 4.3, count: 134 },
  },
  {
    id: 204,
    title: "Sterling Silver Bracelet",
    price: 59.99,
    description: "Polished silver bracelet with a minimalist design.",
    category: "jewelery",
    image: "https://picsum.photos/seed/product-204/500/500",
    rating: { rate: 4.6, count: 72 },
  },
  {
    id: 205,
    title: "Retro Graphic Tee",
    price: 24.99,
    description: "Soft cotton tee with a bold vintage graphic print.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/product-205/500/500",
    rating: { rate: 4.2, count: 145 },
  },
  {
    id: 206,
    title: "Soft Cashmere Scarf",
    price: 39.99,
    description: "Cozy cashmere scarf for chilly evenings.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/product-206/500/500",
    rating: { rate: 4.8, count: 64 },
  },
  {
    id: 207,
    title: "Tech Fitness Watch",
    price: 129.99,
    description: "Water-resistant smartwatch with activity tracking.",
    category: "electronics",
    image: "https://picsum.photos/seed/product-207/500/500",
    rating: { rate: 4.5, count: 93 },
  },
  {
    id: 208,
    title: "Classic Chelsea Boots",
    price: 119.99,
    description: "Timeless leather Chelsea boots with a sleek profile.",
    category: "shoes",
    image: "https://picsum.photos/seed/product-208/500/500",
    rating: { rate: 4.1, count: 47 },
  },
  {
    id: 209,
    title: "Elegant Drop Earrings",
    price: 44.99,
    description: "Refined drop earrings with faceted crystal accents.",
    category: "jewelery",
    image: "https://picsum.photos/seed/product-209/500/500",
    rating: { rate: 4.3, count: 59 },
  },
  {
    id: 210,
    title: "Denim Relaxed Jeans",
    price: 54.99,
    description: "Relaxed fit jeans with a soft worn-in finish.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/product-210/500/500",
    rating: { rate: 4.0, count: 110 },
  },
  {
    id: 211,
    title: "Silk Evening Gown",
    price: 199.99,
    description: "Floor-length silk gown with elegant draping.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/product-211/500/500",
    rating: { rate: 4.9, count: 28 },
  },
  {
    id: 212,
    title: "Noise-Canceling Earbuds",
    price: 79.99,
    description: "Compact earbuds with immersive sound and noise reduction.",
    category: "electronics",
    image: "https://picsum.photos/seed/product-212/500/500",
    rating: { rate: 4.2, count: 102 },
  },
  {
    id: 213,
    title: "Brown Riding Jacket",
    price: 159.99,
    description: "Structured jacket with fine stitching and luxe details.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/product-213/500/500",
    rating: { rate: 4.6, count: 65 },
  },
  {
    id: 214,
    title: "Pearl Pendant Necklace",
    price: 89.99,
    description: "Classic pearl necklace set on a delicate chain.",
    category: "jewelery",
    image: "https://picsum.photos/seed/product-214/500/500",
    rating: { rate: 4.4, count: 44 },
  },
  {
    id: 215,
    title: "Running Performance Shoes",
    price: 99.99,
    description: "Lightweight running shoes built for speed and support.",
    category: "shoes",
    image: "https://picsum.photos/seed/product-215/500/500",
    rating: { rate: 4.7, count: 121 },
  },
  {
    id: 216,
    title: "Comfort Cotton Shorts",
    price: 29.99,
    description: "Everyday cotton shorts with an elastic waist.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/product-216/500/500",
    rating: { rate: 4.1, count: 81 },
  },
  {
    id: 217,
    title: "Saturn Smart Bracelet",
    price: 49.99,
    description: "Stylish smart bracelet with gesture controls.",
    category: "electronics",
    image: "https://picsum.photos/seed/product-217/500/500",
    rating: { rate: 4.0, count: 59 },
  },
  {
    id: 218,
    title: "Floral A-Line Dress",
    price: 69.99,
    description: "A-line dress with a soft floral print.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/product-218/500/500",
    rating: { rate: 4.5, count: 78 },
  },
  {
    id: 219,
    title: "Bold Statement Ring",
    price: 129.99,
    description: "Bold designer ring with a polished finish.",
    category: "jewelery",
    image: "https://picsum.photos/seed/product-219/500/500",
    rating: { rate: 4.8, count: 31 },
  },
  {
    id: 220,
    title: "All-Weather Trail Boots",
    price: 139.99,
    description: "Durable trail boots ready for any weather.",
    category: "shoes",
    image: "https://picsum.photos/seed/product-220/500/500",
    rating: { rate: 4.6, count: 52 },
  },
];

const DEFAULT_CATEGORIES = ["men's clothing", "women's clothing", "jewelery", "electronics", "shoes"];

export async function getAllProducts(): Promise<Product[]> {
  // No API calls, return local products
  return DEFAULT_PRODUCTS;
}

export async function getCategories(): Promise<string[]> {
  return DEFAULT_CATEGORIES;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return DEFAULT_PRODUCTS.filter((p) => p.category === category);
}

export function formatPrice(price: number | string | undefined | null): string {
  const value = Number(price);
  if (Number.isNaN(value)) {
    return "--";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function buildProductSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Women's Fashion Collection",
    description:
      "Curated women's fashion — clothing, jewellery and accessories",
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.title,
        description: p.description,
        image: p.image,
        offers: {
          "@type": "Offer",
          price: p.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating.rate,
          reviewCount: p.rating.count,
        },
      },
    })),
  };
}