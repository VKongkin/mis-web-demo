"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Package,
  AlertTriangle,
  TrendingUp,
  Truck,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
  Boxes,
  Scan,
  Bell,
  PieChart,
  Activity,
  DollarSign,
} from "lucide-react"

export default function InventoryLandingPage() {
  const [demoData] = useState({
    totalItems: 12847,
    lowStock: 23,
    outOfStock: 7,
    totalValue: 2456789,
    monthlyGrowth: 12.5,
  })

  const features = [
    {
      icon: Scan,
      title: "Smart Scanning",
      description: "Barcode and QR code scanning for instant inventory updates",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Automated notifications for low stock and reorder points",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: PieChart,
      title: "Advanced Analytics",
      description: "Comprehensive reports and insights for better decision making",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Supplier Management",
      description: "Streamlined supplier relationships and purchase orders",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Activity,
      title: "Movement Tracking",
      description: "Track every item movement with detailed audit trails",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Multi-location",
      description: "Manage inventory across multiple warehouses and locations",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const benefits = [
    { icon: DollarSign, title: "Reduce Costs", value: "30%", description: "Average cost reduction" },
    { icon: Clock, title: "Save Time", value: "5hrs", description: "Daily time savings" },
    { icon: TrendingUp, title: "Increase Accuracy", value: "99.8%", description: "Inventory accuracy" },
    { icon: Target, title: "Optimize Stock", value: "25%", description: "Reduction in overstock" },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "RetailCorp",
      role: "Operations Manager",
      text: "StockMaster transformed our inventory management. We reduced stockouts by 80% and improved efficiency dramatically.",
      avatar: "JM",
      savings: "$50K",
    },
    {
      name: "David Kim",
      company: "Manufacturing Plus",
      role: "Supply Chain Director",
      text: "The real-time tracking and analytics have given us unprecedented visibility into our operations.",
      avatar: "DK",
      savings: "$120K",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses",
      features: ["Up to 1,000 items", "Basic reporting", "Email support", "Mobile app"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing businesses",
      features: ["Up to 10,000 items", "Advanced analytics", "Priority support", "Multi-location", "API access"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited items", "Custom integrations", "Dedicated support", "Advanced security", "Custom training"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center">
                <Package className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">StockMaster Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#features" className="text-gray-500 hover:text-green-500 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-500 hover:text-green-500 transition-colors">
                Pricing
              </a>
              <a href="#demo" className="text-gray-500 hover:text-green-500 transition-colors">
                Demo
              </a>
              <Button className="bg-green-500 hover:bg-green-600 text-sm">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-100 rounded-full blur-2xl opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-100 rounded-full blur-2xl opacity-50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-100">
                <Boxes className="w-3 h-3 mr-1" />
                Smart Inventory Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Master Your
                <span className="block text-green-500">Inventory Control</span>
              </h1>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Streamline your inventory operations with real-time tracking, automated alerts, and powerful analytics.
                Reduce costs, prevent stockouts, and optimize your supply chain.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-sm px-6">
                  Start 14-Day Free Trial
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 text-sm px-6 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-sm">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-sm">24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-sm">Data migration</span>
                </div>
              </div>
            </div>

            {/* Live Dashboard Preview */}
            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-sm shadow-md border-0">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-md text-gray-800">Live Dashboard</CardTitle>
                    <Badge className="bg-green-50 text-green-700">Real-time</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500 rounded-md p-3 text-white">
                      <div className="text-xl font-bold">{demoData.totalItems.toLocaleString()}</div>
                      <div className="text-xs opacity-90">Total Items</div>
                    </div>
                    <div className="bg-blue-500 rounded-md p-3 text-white">
                      <div className="text-xl font-bold">${(demoData.totalValue / 1000000).toFixed(1)}M</div>
                      <div className="text-xs opacity-90">Total Value</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Stock Levels</span>
                      <span className="text-xs font-medium text-green-500">Healthy</span>
                    </div>
                    <Progress value={85} className="h-1" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-md">
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-yellow-600" />
                        <span className="text-xs">Low Stock Items</span>
                      </div>
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-[0.6rem]">
                        {demoData.lowStock}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                      <div className="flex items-center gap-1">
                        <Package className="w-3 h-3 text-red-600" />
                        <span className="text-xs">Out of Stock</span>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600 text-[0.6rem]">
                        {demoData.outOfStock}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{benefit.value}</div>
                  <div className="font-semibold text-gray-700 mb-0.5">{benefit.title}</div>
                  <div className="text-sm text-gray-500">{benefit.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Powerful Features</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to manage your inventory efficiently and effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-200 border-0 bg-white">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-800">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-500">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Success Stories</h2>
            <p className="text-lg text-gray-500">See how businesses transformed their operations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-green-500 font-medium">{testimonial.company}</p>
                    </div>
                    <div className="ml-auto">
                      <Badge className="bg-green-50 text-green-700 text-[0.6rem]">Saved {testimonial.savings}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-500">Choose the plan that fits your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-green-500 border-2 shadow-md" : "border-gray-100"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-3 py-0.5 text-[0.7rem]">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl text-gray-800">{plan.name}</CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                  </div>
                  <CardDescription className="mt-1 text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full text-sm ${
                      plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Inventory?</h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their operations with StockMaster Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-green-500 hover:bg-gray-50 text-sm px-6">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-green-50 hover:text-green-500 text-sm px-6 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-green-200 mt-3">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center">
              <Package className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">StockMaster Pro</span>
          </div>
          <p className="text-gray-400 mb-3 text-sm">Intelligent inventory management for modern businesses</p>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500">
            <span>• Real-time Tracking</span>
            <span>• Automated Alerts</span>
            <span>• Advanced Analytics</span>
            <span>• Multi-location Support</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
