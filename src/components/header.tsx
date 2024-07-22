import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"
import Image from "next/image"

export const Header = () => {

    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    <h1>{'<devStore />'}</h1>
                </Link>

                <form className="flex items-center gap-3 w-80 bg-zinc-900 ring-zinc-700 rounded-full px-5 py-3">
                    <Search className="size-5 text-zinc-500"/>

                    <input 
                    placeholder="Buscar produtos..." 
                    className="flex-1 bg-transparent outline-none placeholder:text-zinc-500" />
                </form>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2"> {/* futuro botão */}
                    <ShoppingBag className="size-4"/>
                    <p>Cart (0)</p>
                </div>

                <span className="h-4 border-r border-zinc-700" />
                
                <Link href="/" className="flex items-center gap-2 hover:underline"> 
                    <p>Account</p>
                    <Image 
                    src="https://github.com/vfgarciadev.png" 
                    width={24} height={24} 
                    alt=""
                    className="size-6 rounded-full"/>
                </Link>
            </div>
        </header>
    )
}