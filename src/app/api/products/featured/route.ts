import data from '../data.json'

export function GET() {
    const featuredProducts = data.products.filter(product => product.featured)
    return Response.json(featuredProducts)
}