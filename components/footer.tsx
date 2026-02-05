import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-lg text-primary-foreground">P</span>
              </div>
              <span className="font-serif text-xl text-foreground">PureCompound</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Personalized compounding solutions tailored to your unique health needs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=hormone-therapy" className="text-sm text-muted-foreground hover:text-foreground">
                  Hormone Therapy
                </Link>
              </li>
              <li>
                <Link href="/products?category=dermatology" className="text-sm text-muted-foreground hover:text-foreground">
                  Dermatology
                </Link>
              </li>
              <li>
                <Link href="/products?category=pain-management" className="text-sm text-muted-foreground hover:text-foreground">
                  Pain Management
                </Link>
              </li>
              <li>
                <Link href="/products?category=wellness" className="text-sm text-muted-foreground hover:text-foreground">
                  Wellness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/questionnaire" className="text-sm text-muted-foreground hover:text-foreground">
                  Find Your Solution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            2026 PureCompound Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
