import { Header } from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            <section className="mx-auto min-h-screen w-full max-w-[1600px] grid grid-rows-[min-content_max-content] gap-5 p-8">
                <Header />
                {children}
            </section>
        </CartProvider>
    )
}