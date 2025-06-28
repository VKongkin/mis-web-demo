"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Package, Heart, DollarSign, Code, Cloud, Shield, Users } from "lucide-react"

export default function HomePage() {
  const businessTypes = [
    {
      id: "tech",
      title: "Technology Solutions Company",
      description: "Modern tech company offering cloud services, software development, and IT consulting",
      icon: Code,
      color: "bg-blue-500",
      features: ["Service Portfolio", "Team Showcase", "Client Testimonials", "Contact Forms"],
      href: "/tech-landing",
    },
    {
      id: "inventory",
      title: "Stock Inventory Management",
      description: "Comprehensive inventory tracking system with real-time stock monitoring",
      icon: Package,
      color: "bg-green-500",
      features: ["Real-time Tracking", "Low Stock Alerts", "Supplier Management", "Reports & Analytics"],
      href: "/inventory-landing",
    },
    {
      id: "healthcare",
      title: "Clinic Healthcare System",
      description: "Patient management system with appointment scheduling and medical records",
      icon: Heart,
      color: "bg-red-500",
      features: ["Appointment Booking", "Patient Records", "Doctor Schedules", "Medical History"],
      href: "/healthcare-landing",
    },
    {
      id: "finance",
      title: "Loan Financial Services",
      description: "Loan application and management system with credit assessment tools",
      icon: DollarSign,
      color: "bg-yellow-500",
      features: ["Loan Calculator", "Application Forms", "Credit Assessment", "Payment Tracking"],
      href: "/finance-landing",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Business Website Demos</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              Thesis Project Examples
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Modern Dynamic Website
            <span className="block text-green-600">Examples</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore four different business website concepts designed for your thesis project. Each example showcases
            modern web development practices and industry-specific features.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              React & Next.js
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Cloud className="w-4 h-4 mr-2" />
              Modern UI/UX
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Responsive Design
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              User-Centered
            </Badge>
          </div>
        </div>
      </section>

      {/* Business Type Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Choose Your Business Type</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((business) => {
              const IconComponent = business.icon
              return (
                <Card
                  key={business.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-200"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${business.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{business.title}</CardTitle>
                    <CardDescription className="text-sm">{business.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700">Key Features:</h4>
                      <ul className="space-y-1">
                        {business.features.map((feature, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={business.href}>
                      <Button className="w-full mt-4 group-hover:bg-green-600" size="sm">
                        View Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Selection Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Explore Different Business Models?</h3>
            <p className="text-gray-600 mb-8">
              Each demo includes modern features, responsive design, and industry-specific functionality. Click on any
              card above to explore detailed examples.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tech-landing">
                <Button variant="outline">Technology Company</Button>
              </Link>
              <Link href="/inventory-landing">
                <Button variant="outline">Inventory System</Button>
              </Link>
              <Link href="/healthcare-landing">
                <Button variant="outline">Healthcare Clinic</Button>
              </Link>
              <Link href="/finance-landing">
                <Button variant="outline">Financial Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-xl font-bold mb-4">Thesis Project Guidelines</h4>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            These examples demonstrate modern web development practices including responsive design, user experience
            optimization, and industry-specific functionality. Perfect for academic projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <span>• Modern React/Next.js Architecture</span>
            <span>• Responsive Mobile-First Design</span>
            <span>• Industry Best Practices</span>
            <span>• Scalable Component Structure</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
