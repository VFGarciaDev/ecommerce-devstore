import { api } from "@/data/data";
import { Product } from "@/data/types/product";
import Image from "next/image";

const sizes = ["P", "M", "G", "GG"]

async function getProductDetails(): Promise<Product> {
    const response = await api('/products/[slug]', {
        next: {
            revalidate: 10
        }
    })
    const product = await response.json()
    return product
}

export default async function ProductPage(props: any) {
    const p = await getProductDetails()
    console.log(p)

    return (
        <main className="grid grid-cols-[3fr_2fr]">
            <Image src="/" alt=""
                width={1024} height={1024} quality={100}
                className="overflow-hidden" />
            <aside className="flex flex-col justify-center gap-8 px-12">
                <section>
                    <h1 className="text-3xl font-bold leading-tight">{JSON.stringify(props)}</h1>
                    <p className="mt-2 leading-relaxed text-zinc-400"></p>
                </section>
                <div className="flex items-center gap-3">
                    <span className="inline-block text-nowrap py-3 px-5 bg-violet-500 rounded-full font-semibold">124</span>
                    <span>Em 12x s/ juros de R$</span>
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