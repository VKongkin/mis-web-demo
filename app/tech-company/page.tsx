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
} from "lucide-react"

export default function TechCompanyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS/Azure Setup", "Cloud Migration", "DevOps Automation", "24/7 Monitoring"],
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software development for your business needs",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: ["Business Intelligence", "Data Visualization", "Machine Learning", "Reporting"],
    },
  ]

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", experience: "15+ years" },
    { name: "Mike Chen", role: "CTO", experience: "12+ years" },
    { name: "Emily Davis", role: "Lead Developer", experience: "8+ years" },
    { name: "David Wilson", role: "Security Expert", experience: "10+ years" },
  ]

  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp Inc.",
      rating: 5,
      text: "Outstanding service and technical expertise. They delivered our project on time and exceeded expectations.",
    },
    {
      name: "Lisa Brown",
      company: "StartupXYZ",
      rating: 5,
      text: "Professional team with deep knowledge. Our cloud migration was seamless thanks to their expertise.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm text-gray-600">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechSolutions Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600">
                Services
              </a>
              <a href="#team" className="text-gray-600 hover:text-blue-600">
                Team
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Technology Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Innovative Tech
            <span className="block text-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We help businesses transform through cutting-edge technology solutions. From cloud infrastructure to custom
            software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Meet the professionals behind our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about our services</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-blue-100 mb-8">
                Ready to transform your business with technology? Let's discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>contact@techsolutionspro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
