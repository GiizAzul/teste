"use client"

import React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["1-800-COMPOUND", "(1-800-266-7686)"],
    subtext: "Mon-Fri: 8am-6pm EST"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@purecompound.com"],
    subtext: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Pharmacy Lane", "Boston, MA 02101"],
    subtext: "By appointment only"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 1pm"],
    subtext: "Closed Sundays & holidays"
  }
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to an API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center bg-secondary/20">
          <div className="mx-auto max-w-md px-4 py-16 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl text-foreground">Message Sent!</h1>
            <p className="mt-4 text-muted-foreground">
              Thank you for reaching out. One of our pharmacists will get back to you within 24 hours.
            </p>
            <Button 
              className="mt-8" 
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" })
              }}
            >
              Send Another Message
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Have questions about our compounding services? Our team of expert pharmacists 
              is here to help. Reach out and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-semibold text-foreground">Get in Touch</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose your preferred method of contact.
                </p>
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                        <p className="mt-1 text-xs text-muted-foreground">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                  <h2 className="font-semibold text-foreground">Send us a Message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry">Inquiry Type</Label>
                        <Select 
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                        >
                          <SelectTrigger id="inquiry">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="prescription">New Prescription</SelectItem>
                            <SelectItem value="refill">Prescription Refill</SelectItem>
                            <SelectItem value="consultation">Pharmacist Consultation</SelectItem>
                            <SelectItem value="provider">Healthcare Provider</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
