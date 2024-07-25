import data from '../data.json'
import { z } from 'zod'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
    // ohter: { params: { slug: string}}
    await new Promise(resolve => setTimeout(resolve, 1000))

    const slug = z.string().parse(params.slug) // pase != safeParse -> safeParse não envia msg Erro se estiver esrrado
    const product = data.products.find(product => product.slug === slug)

    if (!product) {
        return Response.json({ message: 'Product not found' }, { status: 400 })
    }
    return Response.json(product)
}