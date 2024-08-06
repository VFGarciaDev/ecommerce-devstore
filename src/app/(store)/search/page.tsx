import { ProductCard } from "@/components/product-card";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { redirect } from "next/navigation";

type SearchProps = {
    searchParams: {
        q: string
    }
}

async function getSearchProducts(query: string): Promise<Product[]> {
    const response = await api(`/products/search?q=${query}`, {
        next: {
            revalidate: 60 * 60, // 1 hour
        },
    })
    const products = await response.json()
    return products
}

export default async function Search({ searchParams }: SearchProps) {
    // props: { params: { slug: string }, searchParams: { q: string } }
    const { q: query } = searchParams
    if (!query) {
        redirect('/')
    }
    const products = await getSearchProducts(query)
    console.log(products)

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">Resultados para: <span className="font-semibold">{query}</span></p>

            <div className="grid grid-cols-3 gap-6">
                {products.map((products, index) => (
                    <ProductCard
                        key={index}
                        slug={products.slug}
                        image={products.image}
                        name={products.title}
                        value={products.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })} />
                ))}
            </div>
        </div>
    )
}