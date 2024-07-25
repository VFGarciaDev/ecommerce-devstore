import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
    return (
        <div className="h-full grid grid-cols-[2fr_1fr] gap-6">
            <Skeleton className="row-span-2 h-[800px]" />
            <Skeleton />
            <Skeleton />
        </div>
    )
}