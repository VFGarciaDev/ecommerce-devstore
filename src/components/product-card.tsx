import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
    image: string,
    name: string,
    value: string,
    mainCard?: boolean,
}

export const ProductCard = ({image, name, value, mainCard}:ProductCardProps) => {

    return (
        <Link href="/" className={cn("group relative bg-zinc-900 overflow-hidden", mainCard && "row-span-2")}>
            <Image src={image} width={920} height={920} quality={100} alt="" className="size-full group-hover:scale-105 transition-transform duration-500" />
            <div className={
                cn("absolute flex items-center gap-2 h-12 max-w-[280px] bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-4", 
                mainCard ? "bottom-[16%] right-[16%]" : "bottom-[8%] right-[8%]")}>
                <span className="text-sm truncate">{name}</span>
                <span className="h-full flex items-center justify-center text-nowrap px-4 bg-violet-500 rounded-full font-semibold">{value}</span>
            </div>
        </Link>
    )
}