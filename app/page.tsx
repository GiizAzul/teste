import Link from "next/link"
import { ArrowRight, Activity, Sparkles, HeartPulse, Leaf, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  {
    icon: Activity,
    name: "Hormone Therapy",
    description: "Bioidentical hormone replacement customized to your body's unique needs.",
    href: "/products?category=hormone-therapy"
  },
  {
    icon: Sparkles,
    name: "Dermatology",
    description: "Custom skincare solutions for acne, aging, pigmentation, and skin conditions.",
    href: "/products?category=dermatology"
  },
  {
    icon: HeartPulse,
    name: "Pain Management",
    description: "Targeted pain relief compounds for chronic and acute pain conditions.",
    href: "/products?category=pain-management"
  },
  {
    icon: Leaf,
    name: "Wellness",
    description: "Vitamins, supplements, and compounds to support your overall health.",
    href: "/products?category=wellness"
  }
]

const features = [
  "Personalized formulations tailored to your needs",
  "Licensed pharmacists with decades of experience",
  "Highest quality pharmaceutical-grade ingredients",
  "Fast, discreet shipping to your door"
]

const testimonials = [
  {
    quote: "PureCompound changed my life. After struggling with hormone imbalance for years, their custom formulation finally helped me feel like myself again.",
    author: "Sarah M.",
    title: "Hormone Therapy Patient"
  },
  {
    quote: "The personalized approach makes all the difference. My pain management compound is tailored exactly to my needs, and the results speak for themselves.",
    author: "Michael R.",
    title: "Pain Management Patient"
  },
  {
    quote: "I've tried countless skincare products. The custom anti-aging serum from PureCompound is the only one that's made a visible difference.",
    author: "Jennifer L.",
    title: "Dermatology Patient"
  }
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Personalized medicine crafted for your unique needs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                At PureCompound, we create custom compounded medications tailored specifically to you. 
                Take our health questionnaire to discover which formulations are right for your wellness journey.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/questionnaire">
                    Find Your Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                Our Specialties
              </h2>
              <p className="mt-4 text-muted-foreground">
                Expert compounding services across multiple healthcare areas
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                  Why choose PureCompound?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We combine pharmaceutical expertise with personalized care to create medications 
                  that truly work for you.
                </p>
                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <Activity className="h-10 w-10 text-primary" />
                      </div>
                      <p className="font-serif text-2xl text-foreground">25+ Years</p>
                      <p className="text-sm text-muted-foreground">of compounding excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-primary-foreground sm:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                Take our personalized health questionnaire. In just a few minutes, 
                we&apos;ll recommend the best compounding solutions for your unique needs.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/questionnaire">
                    Start Questionnaire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                What our patients say
              </h2>
              <p className="mt-4 text-muted-foreground">
                Real stories from people who found their perfect solution
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
