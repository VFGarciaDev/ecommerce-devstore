import { api } from "@/data/data";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";

const sizes = ["P", "M", "G", "GG"]

type ProductProps = {
    params: {
        slug: string
    }
}

async function getProductDetails(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 60 * 60
        }
    })
    const product = await response.json()
    return product
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
    const product = await getProductDetails(params.slug)

    return {
        title: product.title
    }
}

export async function generateStaticParams() {
    const response = await api('/product/features')
    const products: Product[] = await response.json()

    return products.map(product => {
        return {
            slug: product.slug
        }})
}

export default async function ProductPage({ params }: ProductProps) {
    const product = await getProductDetails(params.slug)
    console.log(product)

    const price = (split: number = 1) => {
        return (product.price / split)
            .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: split > 1 ? 2 : 0,
                maximumFractionDigits: split > 1 ? 2 : 0,
            })
    }

    return (
        <main className="grid grid-cols-[3fr_2fr]">
            <Image src={product.image} alt={product.title}
                width={1024} height={1024} quality={100}
                className="overflow-hidden" />
            <aside className="flex flex-col justify-center gap-8 px-12">
                <section>
                    <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
                    <p className="mt-2 leading-relaxed text-zinc-400">{product.description}</p>
                </section>
                <div className="flex items-center gap-3">
                    <span
                        className="inline-block text-nowrap py-3 px-5 bg-violet-500 rounded-full font-semibold">
                        {price()}
                    </span>
                    <span>Em até 12x s/ juros de {price(12)}</span>
                </div>
                <section className="font-semibold">
                    <h2 className="text-lg">Tamanhos</h2>
                    <div className="flex gap-2 mt-4 list-none text-sm">
                        {sizes.map(size => (
                            <button className="py-3 px-6 bg-zinc-800 border-2 border-zinc-700 rounded-full hover:cursor-pointer hover:bg-emerald-500 transition-colors">{size}</button>
                        ))}
                    </div>
                </section>
                <button>
                    Adicionar ao carrinho
                </button>
            </aside>
        </main>
    )
}