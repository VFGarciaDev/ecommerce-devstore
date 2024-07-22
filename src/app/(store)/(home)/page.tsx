import { ProductCard } from "@/components/product-card";
import { api } from "@/data/data";
import { Product } from "@/data/types/product";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')
  const products = await response.json()
  return products
}

export default async function Home() {
  const [hlProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className="max-w-screen max-h-[720px] grid grid-cols-[2fr_1fr] gap-6">
      <ProductCard mainCard
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