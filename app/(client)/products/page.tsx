"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Activity, Sparkles, HeartPulse, Leaf, Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categoryFilters = [
  { id: "all", name: "All Products", icon: null },
  { id: "hormone-therapy", name: "Hormone Therapy", icon: Activity },
  { id: "dermatology", name: "Dermatology", icon: Sparkles },
  { id: "pain-management", name: "Pain Management", icon: HeartPulse },
  { id: "wellness", name: "Wellness", icon: Leaf },
]

export default function ProductsContent({ initialProducts }: { initialProducts: any[] }) {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    let filtered = initialProducts

    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.category === activeCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [activeCategory, searchQuery, initialProducts])

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                {category.name}
              </Button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            // Note: product.id is now product._id from Sanity []
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No products found.</p>
            <Button variant="link" onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}