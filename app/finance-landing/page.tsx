"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  DollarSign,
  Calculator,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users,
  Award,
  Home,
  Car,
  GraduationCap,
  Building,
  ArrowRight,
  PiggyBank,
  Percent,
  TrendingUp,
  Info,
} from "lucide-react"

export default function FinanceLandingPage() {
  const [loanAmount, setLoanAmount] = useState([250000])
  const [loanTerm, setLoanTerm] = useState([15])
  const [loanType, setLoanType] = useState("home")
  const [creditScore, setCreditScore] = useState("excellent")
  const [downPayment, setDownPayment] = useState([50000])
  const [calculations, setCalculations] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    interestRate: 0,
  })

  // Interest rates based on loan type and credit score
  const getInterestRate = (type: string, credit: string) => {
    const rates = {
      home: {
        excellent: 3.25,
        good: 3.75,
        fair: 4.25,
        poor: 5.25,
      },
      auto: {
        excellent: 2.99,
        good: 3.49,
        fair: 4.99,
        poor: 6.99,
      },
      education: {
        excellent: 4.5,
        good: 5.0,
        fair: 5.5,
        poor: 6.5,
      },
      business: {
        excellent: 5.25,
        good: 6.25,
        fair: 7.25,
        poor: 9.75,
      },
    }
    return rates[type as keyof typeof rates]?.[credit as keyof typeof rates.home] || 5.0
  }

  // Calculate loan payments
  useEffect(() => {
    const principal = loanType === "home" ? loanAmount[0] - downPayment[0] : loanAmount[0]
    const rate = getInterestRate(loanType, creditScore)
    const monthlyRate = rate / 100 / 12
    const numPayments = loanTerm[0] * 12

    if (principal <= 0 || rate <= 0 || numPayments <= 0) {
      setCalculations({
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        interestRate: rate,
      })
      return
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    const totalPayment = monthlyPayment * numPayments
    const totalInterest = totalPayment - principal

    setCalculations({
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      interestRate: rate,
    })
  }, [loanAmount, loanTerm, loanType, creditScore, downPayment])

  const loanTypes = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality",
      rate: "3.25%",
      maxAmount: "$1M",
      color: "from-blue-500 to-cyan-500",
      features: ["No prepayment penalty", "Flexible terms", "Quick approval"],
    },
    {
      icon: Car,
      title: "Auto Loans",
      description: "Drive away with confidence",
      rate: "2.99%",
      maxAmount: "$100K",
      color: "from-green-500 to-emerald-500",
      features: ["New & used cars", "Fast processing", "Competitive rates"],
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future",
      rate: "4.50%",
      maxAmount: "$200K",
      color: "from-purple-500 to-pink-500",
      features: ["Deferred payments", "Grace period", "Flexible repayment"],
    },
    {
      icon: Building,
      title: "Business Loans",
      description: "Fuel your business growth",
      rate: "5.25%",
      maxAmount: "$5M",
      color: "from-orange-500 to-red-500",
      features: ["Working capital", "Equipment financing", "Line of credit"],
    },
  ]

  const benefits = [
    { icon: Clock, title: "Quick Approval", value: "24hrs", description: "Average approval time" },
    { icon: Percent, title: "Low Rates", value: "2.99%", description: "Starting interest rate" },
    { icon: Shield, title: "Secure Process", value: "100%", description: "Bank-level security" },
    { icon: Users, title: "Happy Customers", value: "50K+", description: "Satisfied borrowers" },
  ]

  const stats = [
    { number: "$2.5B+", label: "Loans Funded", icon: DollarSign },
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "20+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Approval Rate", icon: CheckCircle },
  ]

  const testimonials = [
    {
      name: "Jennifer Smith",
      loanType: "Home Loan",
      rating: 5,
      text: "The entire process was smooth and transparent. Got my dream home with an amazing rate!",
      avatar: "JS",
      amount: "$350K",
    },
    {
      name: "Michael Johnson",
      loanType: "Business Loan",
      rating: 5,
      text: "FinanceFirst helped me expand my business. The team was professional and supportive throughout.",
      avatar: "MJ",
      amount: "$150K",
    },
    {
      name: "Sarah Davis",
      loanType: "Auto Loan",
      rating: 5,
      text: "Quick approval and great rates. I was driving my new car within a week of applying!",
      avatar: "SD",
      amount: "$35K",
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCurrencyDetailed = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const getLoanAmountRange = () => {
    switch (loanType) {
      case "home":
        return { min: 50000, max: 1000000, step: 5000 }
      case "auto":
        return { min: 5000, max: 100000, step: 1000 }
      case "education":
        return { min: 1000, max: 200000, step: 1000 }
      case "business":
        return { min: 10000, max: 5000000, step: 10000 }
      default:
        return { min: 1000, max: 1000000, step: 1000 }
    }
  }

  const range = getLoanAmountRange()

  return (
    <div className="min-h-screen bg-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FinanceFirst</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#loans" className="text-gray-600 hover:text-green-600 transition-colors">
                Loans
              </a>
              <a href="#calculator" className="text-gray-600 hover:text-green-600 transition-colors">
                Calculator
              </a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </a>
              <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">
                <PiggyBank className="w-4 h-4 mr-2" />
                Smart Financial Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Financial
                <span className="block text-green-600">Dreams Realized</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get the funding you need with competitive rates, flexible terms, and personalized service. From home
                loans to business financing, we make your goals achievable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Apply for Loan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 bg-transparent"
                >
                  Calculate Payment
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">No hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Quick approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Flexible terms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Expert guidance</span>
                </div>
              </div>
            </div>

            {/* Enhanced Loan Calculator Widget */}
            <div className="relative">
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-green-600" />
                    Smart Loan Calculator
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Get accurate payment estimates with real-time calculations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Loan Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
                    <Select value={loanType} onValueChange={setLoanType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home Loan</SelectItem>
                        <SelectItem value="auto">Auto Loan</SelectItem>
                        <SelectItem value="education">Education Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Credit Score Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit Score Range</label>
                    <Select value={creditScore} onValueChange={setCreditScore}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select credit score" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent (750+)</SelectItem>
                        <SelectItem value="good">Good (700-749)</SelectItem>
                        <SelectItem value="fair">Fair (650-699)</SelectItem>
                        <SelectItem value="poor">Poor (Below 650)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Loan Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount: {formatCurrency(loanAmount[0])}
                    </label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={range.max}
                      min={range.min}
                      step={range.step}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{formatCurrency(range.min)}</span>
                      <span>{formatCurrency(range.max)}</span>
                    </div>
                  </div>

                  {/* Down Payment (for home loans) */}
                  {loanType === "home" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment: {formatCurrency(downPayment[0])} (
                        {((downPayment[0] / loanAmount[0]) * 100).toFixed(1)}%)
                      </label>
                      <Slider
                        value={downPayment}
                        onValueChange={setDownPayment}
                        max={loanAmount[0] * 0.5}
                        min={loanAmount[0] * 0.05}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5% min</span>
                        <span>50% max</span>
                      </div>
                    </div>
                  )}

                  {/* Loan Term */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Term: {loanTerm[0]} years
                    </label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={loanType === "auto" ? 7 : 30}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 year</span>
                      <span>{loanType === "auto" ? "7" : "30"} years</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4 pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="text-2xl font-bold text-green-600">
                          {formatCurrencyDetailed(calculations.monthlyPayment)}
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="text-2xl font-bold text-blue-600">{calculations.interestRate.toFixed(2)}%</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Principal Amount:</span>
                        <span className="font-medium">
                          {formatCurrency(loanType === "home" ? loanAmount[0] - downPayment[0] : loanAmount[0])}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Interest:</span>
                        <span className="font-medium">{formatCurrency(calculations.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between text-sm border-t pt-2">
                        <span className="text-gray-600 font-medium">Total Payment:</span>
                        <span className="font-bold">{formatCurrency(calculations.totalPayment)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                      <Info className="w-4 h-4 text-blue-600" />
                      <p className="text-xs text-blue-700">
                        Rates shown are estimates. Actual rates may vary based on creditworthiness and other factors.
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Apply for This Loan
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section id="loans" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of loan products designed to meet your specific financial needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => {
              const IconComponent = loan.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl text-gray-900">{loan.title}</CardTitle>
                      <Badge className="bg-green-50 text-green-700 border-green-200">From {loan.rate}</Badge>
                    </div>
                    <CardDescription className="text-lg text-gray-600">{loan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Max Amount</span>
                        <span className="font-bold text-gray-900">{loan.maxAmount}</span>
                      </div>
                      <div className="space-y-2">
                        {loan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real customers, real results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.loanType}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">{testimonial.amount}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve Your Financial Goals?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your dreams. Apply now and get a decision within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
              Apply for Loan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 bg-transparent"
            >
              Speak to Expert
            </Button>
          </div>
          <p className="text-sm text-green-200 mt-4">No application fees • Quick approval • Flexible terms</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FinanceFirst</span>
          </div>
          <p className="text-gray-400 mb-4">Your trusted partner in achieving financial success</p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
            <span>• Competitive Rates</span>
            <span>• Quick Approval</span>
            <span>• Flexible Terms</span>
            <span>• Expert Support</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
