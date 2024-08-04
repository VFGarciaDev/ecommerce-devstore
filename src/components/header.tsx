import Link from "next/link"
import Image from "next/image"
import { CartWidget } from "./cart-widget"
import { SearchForm } from "./search-form"

export const Header = () => {

    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    <h1>{'<devStore />'}</h1>
                </Link>

            <SearchForm />
            </div>
            <div className="flex items-center gap-4">
                <CartWidget />

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