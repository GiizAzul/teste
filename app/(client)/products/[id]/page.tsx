import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-serif text-4xl text-primary">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.categoryLabel}</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {product.categoryLabel}
                </Badge>
                <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8">
                  <h2 className="font-semibold text-foreground">Key Benefits</h2>
                  <ul className="mt-4 space-y-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/questionnaire">
                      Check if This is Right for You
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      Speak with a Pharmacist
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-secondary/30 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> All compounded medications 
                    require a valid prescription. Our pharmacists will work with your healthcare 
                    provider to customize this formulation to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl text-foreground">
                Related Products
              </h2>
              <p className="mt-2 text-muted-foreground">
                Other {product.categoryLabel.toLowerCase()} solutions you might be interested in
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
