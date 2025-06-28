"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Code,
  Cloud,
  Shield,
  Database,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Zap,
  Globe,
  Lock,
  Rocket,
  Target,
  Award,
} from "lucide-react"

export default function TechLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const heroFeatures = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Globe, text: "Global Scale" },
    { icon: Award, text: "Award Winning" },
  ]

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business",
      features: ["AWS/Azure/GCP", "Auto-scaling", "99.9% Uptime", "24/7 Monitoring"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions for your unique needs",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      color: "from-green-600 to-green-400",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      features: ["Business Intelligence", "Machine Learning", "Real-time Analytics", "Custom Dashboards"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Training Programs"],
      color: "from-green-700 to-green-500",
    },
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "MongoDB", category: "Database" },
    { name: "Python", category: "AI/ML" },
    { name: "TypeScript", category: "Language" },
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "98%", label: "Client Satisfaction", icon: Target },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Team Members", icon: Users },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      rating: 5,
      text: "Their cloud migration expertise saved us 40% on infrastructure costs while improving performance.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "CEO",
      rating: 5,
      text: "The custom application they built became the cornerstone of our digital transformation.",
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      company: "Enterprise Solutions",
      role: "IT Director",
      rating: 5,
      text: "Outstanding security implementation. Our compliance audit was flawless thanks to their work.",
      avatar: "ED",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TechNova Solutions</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">
                Contact
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              <Zap className="w-4 h-4 mr-2" />
              Next-Generation Technology Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Transform Your Business
              <span className="block text-green-600">With Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We architect cutting-edge technology solutions that propel businesses into the future. From cloud
              infrastructure to AI-powered applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 bg-transparent"
              >
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks for modern solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-green-50 hover:border-green-200 transition-colors"
              >
                <div className="text-lg font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">What industry leaders say about our solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
              <p className="text-xl text-green-100 mb-8">
                Ready to transform your business with cutting-edge technology? Let's discuss your vision.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">hello@technova.com</p>
                    <p className="text-green-200">Get in touch for projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+1 (555) 123-TECH</p>
                    <p className="text-green-200">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Silicon Valley, CA</p>
                    <p className="text-green-200">Global remote team</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-green-400/30">
              <CardHeader>
                <CardTitle className="text-white">Start Your Project</CardTitle>
                <CardDescription className="text-green-200">
                  Tell us about your vision and we'll make it reality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200"
                />
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200"
                />
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">TechNova Solutions</span>
          </div>
          <p className="text-gray-400 mb-4">Transforming businesses through innovative technology solutions</p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
            <span>• Enterprise-Grade Solutions</span>
            <span>• 24/7 Support</span>
            <span>• Global Delivery</span>
            <span>• Agile Methodology</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
