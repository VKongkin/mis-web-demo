"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  ArrowLeft,
  Heart,
  CalendarIcon,
  Clock,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Users,
  FileText,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  UserCheck,
  Ambulance,
  Building2,
  HeartHandshake,
  Brain,
  Eye,
  Bone,
  DollarSign,
} from "lucide-react"

export default function HealthcareLandingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const specialties = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart and cardiovascular care",
      doctors: 8,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Brain and nervous system",
      doctors: 6,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Bone and joint specialists",
      doctors: 12,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Eye care and vision",
      doctors: 4,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary healthcare services",
      doctors: 15,
      color: "from-orange-500 to-red-500",
    },
    {
      icon: HeartHandshake,
      title: "Pediatrics",
      description: "Children's healthcare",
      doctors: 10,
      color: "from-pink-500 to-rose-500",
    },
  ]

  const services = [
    {
      icon: CalendarIcon,
      title: "Online Appointments",
      description: "Book appointments 24/7 through our platform",
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Secure access to your medical history",
    },
    {
      icon: Ambulance,
      title: "Emergency Care",
      description: "24/7 emergency services available",
    },
    {
      icon: UserCheck,
      title: "Telemedicine",
      description: "Virtual consultations from home",
    },
  ]

  const stats = [
    { number: "25,000+", label: "Patients Served", icon: Users },
    { number: "50+", label: "Medical Experts", icon: UserCheck },
    { number: "98%", label: "Patient Satisfaction", icon: Star },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      condition: "Cardiology Patient",
      rating: 5,
      text: "The care I received was exceptional. Dr. Smith and the entire team made me feel comfortable throughout my treatment.",
      avatar: "SJ",
      treatment: "Heart Surgery",
    },
    {
      name: "Michael Chen",
      condition: "Orthopedic Patient",
      rating: 5,
      text: "After my knee replacement, the rehabilitation program helped me get back to my active lifestyle faster than expected.",
      avatar: "MC",
      treatment: "Knee Replacement",
    },
    {
      name: "Emily Davis",
      condition: "Pediatric Patient",
      rating: 5,
      text: "The pediatric team was amazing with my daughter. They made her feel safe and comfortable during her treatment.",
      avatar: "ED",
      treatment: "Pediatric Care",
    },
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MediCare Plus</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">
                Services
              </a>
              <a href="#doctors" className="text-gray-600 hover:text-green-600 transition-colors">
                Doctors
              </a>
              <a href="#appointment" className="text-gray-600 hover:text-green-600 transition-colors">
                Book Now
              </a>
              <Button className="bg-green-600 hover:bg-green-700">Emergency</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                <Heart className="w-4 h-4 mr-2" />
                Compassionate Healthcare
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Health,
                <span className="block text-green-600">Our Mission</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class healthcare with our team of expert physicians, state-of-the-art facilities, and
                patient-centered approach to medical care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 bg-transparent"
                >
                  Emergency Care
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Expert Doctors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Insurance Accepted</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking Widget */}
            <div className="relative">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-green-600" />
                    Quick Appointment
                  </CardTitle>
                  <CardDescription>Book your appointment in seconds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Full Name" className="border-gray-200" />
                    <Input placeholder="Phone" className="border-gray-200" />
                  </div>
                  <Input placeholder="Email Address" className="border-gray-200" />

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border border-gray-200 bg-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Available Times</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.slice(0, 6).map((time, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs border-gray-200 hover:bg-green-50 hover:border-green-200 bg-transparent"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Book Appointment</Button>
                </CardContent>
              </Card>
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services with specialized departments and expert medical professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{specialty.title}</CardTitle>
                    <CardDescription className="text-gray-600">{specialty.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{specialty.doctors} specialists</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-gray-200 hover:bg-green-50 hover:border-green-200 bg-transparent"
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Services</h2>
            <p className="text-xl text-gray-600">Modern healthcare solutions designed for your convenience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from our patients and their families</p>
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
                      <p className="text-sm text-gray-600">{testimonial.condition}</p>
                      <Badge variant="outline" className="text-green-600 border-green-600 mt-1">
                        {testimonial.treatment}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Ambulance className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">24/7 Emergency Care</h2>
            <p className="text-xl text-green-100 mb-8">
              Our emergency department is always ready to provide immediate medical attention when you need it most.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500/30 rounded-lg p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Always Open</h3>
                <p className="text-sm text-green-100">24 hours a day, 365 days a year</p>
              </div>
              <div className="bg-green-500/30 rounded-lg p-6">
                <Zap className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-sm text-green-100">Average wait time under 15 minutes</p>
              </div>
              <div className="bg-green-500/30 rounded-lg p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Care</h3>
                <p className="text-sm text-green-100">Board-certified emergency physicians</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                Call Emergency: 911
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 bg-transparent"
              >
                Non-Emergency: (555) 123-CARE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Clinic</h2>
              <p className="text-xl text-gray-600 mb-8">
                Conveniently located with ample parking and easy access to public transportation
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">123 Medical Center Drive</p>
                    <p className="text-gray-600">Healthcare City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Main: (555) 123-CARE</p>
                    <p className="text-gray-600">Emergency: (555) 911-HELP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">info@medicareplus.com</p>
                    <p className="text-gray-600">appointments@medicareplus.com</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Insurance & Billing</CardTitle>
                <CardDescription>We accept most major insurance plans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-medium">Medicare</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">Medicaid</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <FileText className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm font-medium">Private Insurance</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm font-medium">Self-Pay</p>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Financial Assistance</h4>
                  <p className="text-sm text-green-700">
                    We offer payment plans and financial assistance programs for qualifying patients.
                  </p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Verify Insurance Coverage</Button>
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
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">MediCare Plus</span>
          </div>
          <p className="text-gray-400 mb-4">Compassionate healthcare for you and your family</p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
            <span>• 24/7 Emergency Care</span>
            <span>• Expert Medical Team</span>
            <span>• Modern Facilities</span>
            <span>• Patient-Centered Care</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
