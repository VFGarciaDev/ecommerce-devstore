import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Skeleton({className, ...props}: ComponentProps<'div'>) {
    return (
        <div className={cn("bg-zinc-50/10 animate-pulse rounded-md", className)} {...props}/>
    )
}