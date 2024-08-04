'use client'
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";


export async function SearchForm() {
    const router = useRouter()

    const searchParams = useSearchParams()
    const query = searchParams.get('q')

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget) // busca todos os dados do 'target'
        const data = Object.fromEntries(formData) // transf. 'formData' em um objeto

        const query = data.q

        if(!query) return

        router.push(`/search?q=${query}`)
    }

    return (
        <form
        onSubmit={handleSearch} 
        className="flex items-center gap-3 w-80 bg-zinc-900 ring-zinc-700 rounded-full px-5 py-3">
        <Search className="size-5 text-zinc-500"/>

        <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..." 
        className="flex-1 bg-transparent outline-none placeholder:text-zinc-500" />
    </form>
    )
}