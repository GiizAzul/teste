import Link from "next/link"
import { ArrowRight, Award, Users, Clock, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We use only the highest quality pharmaceutical-grade ingredients in every formulation."
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Every compound is customized to meet your unique health needs and preferences."
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "We understand that your health can't wait. Fast turnaround times on all orders."
  },
  {
    icon: Shield,
    title: "Safety Standards",
    description: "Our facility meets or exceeds all state and federal compounding regulations."
  }
]

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Pharmacist",
    bio: "With over 20 years of compounding experience, Dr. Chen leads our formulation development team."
  },
  {
    name: "Michael Torres",
    role: "Quality Assurance Director",
    bio: "Michael ensures every compound meets our rigorous quality standards before leaving our facility."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Clinical Consultant",
    bio: "Dr. Rodriguez works directly with healthcare providers to optimize patient outcomes."
  }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
                About PureCompound
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                For over 25 years, we&apos;ve been dedicated to creating personalized 
                compounded medications that help our patients achieve better health outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl text-foreground">
                  Our Mission
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  At PureCompound, we believe that healthcare should be personalized. 
                  Commercial medications are designed for the average patient, but 
                  you&apos;re not average &mdash; you&apos;re unique.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our mission is to bridge the gap between what&apos;s commercially 
                  available and what you actually need. Working closely with your 
                  healthcare provider, we create custom formulations tailored to 
                  your specific health requirements.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/questionnaire">
                      Find Your Solution
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center p-8">
                      <p className="font-serif text-5xl text-primary">25+</p>
                      <p className="mt-2 text-lg text-muted-foreground">Years of Excellence</p>
                      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="font-serif text-2xl text-foreground">50K+</p>
                          <p className="text-sm text-muted-foreground">Patients Served</p>
                        </div>
                        <div>
                          <p className="font-serif text-2xl text-foreground">100K+</p>
                          <p className="text-sm text-muted-foreground">Prescriptions Filled</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border bg-secondary/20 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-foreground">
                Our Values
              </h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-foreground">
                Meet Our Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Expert pharmacists dedicated to your health
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                    <span className="font-serif text-2xl text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl text-primary-foreground">
              Ready to experience personalized care?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Take our questionnaire to discover which compounded medications 
              might be right for you.
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
