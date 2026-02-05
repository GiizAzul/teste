import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary hover:shadow-md">
      <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
        <div className="text-center p-4">
          <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <span className="font-serif text-lg text-primary">{product.name.charAt(0)}</span>
          </div>
          <p className="text-xs text-muted-foreground">{product.categoryLabel}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge variant="secondary" className="w-fit text-xs mb-2">
          {product.categoryLabel}
        </Badge>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span key={benefit} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              {benefit}
            </span>
          ))}
        </div>
        <Link 
          href={`/products/${product.id}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
