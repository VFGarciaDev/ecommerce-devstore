import { ProductCard } from "@/components/product-card";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()
  return products
}

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  const [hlProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className="max-h-[800px] grid grid-cols-[2fr_1fr] gap-6">
      <ProductCard mainCard
        slug={hlProduct.slug}
        image={hlProduct.image}
        name={hlProduct.title}
        value={hlProduct.price
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })} />

      {otherProducts.map(p =>
        <ProductCard
          slug={p.slug}
          image={p.image}
          name={p.title}
          value={p.price
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })} />
      )}
    </main>
  );
}