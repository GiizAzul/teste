"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getProductsByTags, products } from "@/lib/products"

function ResultsContent() {
  const searchParams = useSearchParams()
  const tagsParam = searchParams.get("tags")
  const tags = tagsParam ? tagsParam.split(",") : []

  const recommendedProducts = tags.length > 0 
    ? getProductsByTags(tags).slice(0, 6)
    : products.slice(0, 6)

  const topRecommendations = recommendedProducts.slice(0, 3)
  const otherRecommendations = recommendedProducts.slice(3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-serif text-3xl text-primary-foreground sm:text-4xl">
                Your Personalized Recommendations
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                Based on your responses, we&apos;ve identified the following compounded 
                medications that may be beneficial for your health goals.
              </p>
            </div>
          </div>
        </section>

        {/* Top Recommendations */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                Top Matches for You
              </h2>
              <p className="mt-2 text-muted-foreground">
                These products closely match your health profile and concerns.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {topRecommendations.map((product, index) => (
                <div key={product.id} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-3 left-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Best Match
                    </div>
                  )}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Recommendations */}
        {otherRecommendations.length > 0 && (
          <section className="border-t border-border bg-secondary/20 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-foreground">
                  You Might Also Consider
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Additional products that may support your wellness goals.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {otherRecommendations.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Steps */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-2xl text-foreground">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our pharmacists are ready to work with you and your healthcare provider 
                to create personalized formulations. All compounded medications require 
                a valid prescription.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact a Pharmacist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">
                    Browse All Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Retake */}
        <section className="border-t border-border py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <RotateCcw className="h-4 w-4" />
              <span>Results not quite right?</span>
              <Link href="/questionnaire" className="text-primary hover:underline">
                Retake the questionnaire
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading your recommendations...</p>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
