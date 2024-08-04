import { api } from "@/data/api"
import { Product } from "@/data/types/product"
import { env } from "@/env"
import { ImageResponse } from "next/og"
import colors from "tailwindcss/colors"

export const runtime = 'edge'

export const alt = ''

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

async function getProductDetails(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 60 * 60
        }
    })
    const product = await response.json()
    return product
}

export default async function OgImage({ params }: { params: { slug: string } }) {
    const product = await getProductDetails(params.slug)
    const productImageURL = new URL(product.image, env.APP_URL).toString()

    return new ImageResponse((
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.zinc[950],
            display: 'flex',
            flexDirection: 'column',
        }}>
            <img src={productImageURL} alt="" style={{ width: '100%' }} />
        </div>
    ),
        {
            ...size,
        }
    )
}