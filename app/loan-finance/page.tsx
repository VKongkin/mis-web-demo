"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import {
  ArrowLeft,
  DollarSign,
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users,
  Award,
  FileText,
  CreditCard,
  Home,
  Car,
  GraduationCap,
  Building,
} from "lucide-react"

export default function LoanFinancePage() {
  const [loanAmount, setLoanAmount] = useState([50000])
  const [loanTerm, setLoanTerm] = useState([5])
  const [interestRate] = useState(4.5)
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    income: "",
    employment: "",
    loanType: "",
    purpose: "",
  })

  const loanTypes = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Competitive rates for your dream home",
      rate: "3.25% - 4.75%",
      maxAmount: "$1,000,000",
      features: ["No prepayment penalty", "Flexible terms", "Quick approval"],
    },
    {
      icon: Car,
      title: "Auto Loans",
      description: "Finance your next vehicle with ease",
      rate: "2.99% - 6.99%",
      maxAmount: "$100,000",
      features: ["New & used cars", "Fast processing", "Competitive rates"],
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future education",
      rate: "4.50% - 7.50%",
      maxAmount: "$200,000",
      features: ["Deferred payments", "Grace period", "Flexible repayment"],
    },
    {
      icon: Building,
      title: "Business Loans",
      description: "Grow your business with our funding",
      rate: "5.25% - 9.75%",
      maxAmount: "$5,000,000",
      features: ["Working capital", "Equipment financing", "Line of credit"],
    },
  ]

  const stats = [
    { label: "Loans Approved", value: "$2.5B+", icon: DollarSign },
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Years Experience", value: "20+", icon: Award },
    { label: "Approval Rate", value: "95%", icon: CheckCircle },
  ]

  const testimonials = [
    {
      name: "Jennifer Smith",
      type: "Home Loan",
      rating: 5,
      text: "Excellent service! Got my home loan approved in just 3 days with a great interest rate.",
    },
    {
      name: "Michael Johnson",
      type: "Business Loan",
      rating: 5,
      text: "The team was incredibly helpful throughout the entire process. Highly recommended!",
    },
  ]

  // Calculate monthly payment
  const monthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm[0] * 12

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    return payment.toFixed(2)
  }

  const totalPayment = () => {
    return (Number.parseFloat(monthlyPayment()) * loanTerm[0] * 12).toFixed(2)
  }

  const totalInterest = () => {
    return (Number.parseFloat(totalPayment()) - loanAmount[0]).toFixed(2)
  }

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
              <DollarSign className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">FinanceFirst</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#loans" className="text-gray-600 hover:text-green-600">
                Loans
              </a>
              <a href="#calculator" className="text-gray-600 hover:text-green-600">
                Calculator
              </a>
              <a href="#apply" className="text-gray-600 hover:text-green-600">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Financial Solutions</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Financial
                <span className="block text-green-600">Dreams Realized</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get the funding you need with competitive rates, flexible terms, and personalized service. From home
                loans to business financing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Apply for Loan
                </Button>
                <Button size="lg" variant="outline">
                  Calculate Payment
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center p-6">
                    <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section id="loans" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Loan Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of loan products designed to meet your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanTypes.map((loan, index) => {
              const IconComponent = loan.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{loan.title}</CardTitle>
                    <CardDescription>{loan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Interest Rate</span>
                        <span className="font-semibold text-green-600">{loan.rate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Max Amount</span>
                        <span className="font-semibold">{loan.maxAmount}</span>
                      </div>
                      <div className="space-y-2">
                        {loan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section id="calculator" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Calculator</h2>
            <p className="text-xl text-gray-600">Calculate your monthly payments and see how much you can afford</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount: ${loanAmount[0].toLocaleString()}
                  </label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={1000000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$1,000</span>
                    <span>$1,000,000</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term: {loanTerm[0]} years</label>
                  <Slider value={loanTerm} onValueChange={setLoanTerm} max={30} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <span className="text-lg font-semibold text-green-600">{interestRate}% APR</span>
                    <p className="text-xs text-gray-600">Rate based on excellent credit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Payment Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Monthly Payment</p>
                    <p className="text-2xl font-bold text-green-600">${monthlyPayment()}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Total Payment</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${Number.parseFloat(totalPayment()).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    ${Number.parseFloat(totalInterest()).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Principal</span>
                    <span>${loanAmount[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Interest</span>
                    <span>${Number.parseFloat(totalInterest()).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${Number.parseFloat(totalPayment()).toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Apply for This Loan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for a Loan</h2>
            <p className="text-xl text-gray-600">Start your application process - it only takes a few minutes</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Loan Application
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={applicationForm.name}
                  onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={applicationForm.email}
                  onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={applicationForm.phone}
                  onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                />
                <Input
                  placeholder="Annual Income"
                  value={applicationForm.income}
                  onChange={(e) => setApplicationForm({ ...applicationForm, income: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Employment Status"
                  value={applicationForm.employment}
                  onChange={(e) => setApplicationForm({ ...applicationForm, employment: e.target.value })}
                />
                <Input
                  placeholder="Loan Type"
                  value={applicationForm.loanType}
                  onChange={(e) => setApplicationForm({ ...applicationForm, loanType: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Purpose of loan and additional information..."
                rows={4}
                value={applicationForm.purpose}
                onChange={(e) => setApplicationForm({ ...applicationForm, purpose: e.target.value })}
              />
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Secure Application</p>
                  <p className="text-sm text-green-700">Your information is protected with bank-level security</p>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">Submit Application</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
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
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.type}</p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Verified Customer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FinanceFirst?</h2>
            <p className="text-xl text-gray-600">We make financing simple, fast, and transparent</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Quick Approval</CardTitle>
              <CardDescription>Get approved in as little as 24 hours with our streamlined process</CardDescription>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Secure & Safe</CardTitle>
              <CardDescription>Your personal information is protected with industry-leading security</CardDescription>
            </Card>
            <Card className="text-center p-6">
              <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="mb-2">Flexible Terms</CardTitle>
              <CardDescription>Choose from various repayment options that fit your budget</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards achieving your financial goals. Apply now and get a decision within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Speak to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
