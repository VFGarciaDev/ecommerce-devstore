import Image from "next/image";
import Link from "next/link";

export default function Search() {

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">Resultados para: <span className="font-semibold"></span></p>

            <div className="grid grid-cols-3 gap-6">
                {/* <Link href={`/product/${slug}`} className="group relative bg-zinc-900 overflow-hidden">
                    <Image src={""} width={480} height={480} quality={100} alt="" className="size-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute flex items-center gap-2 h-12 max-w-[280px] bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-4">
                        <span className="text-sm truncate">{name}</span>
                        <span className="h-full flex items-center justify-center text-nowrap px-4 bg-violet-500 rounded-full font-semibold">{value}</span>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}