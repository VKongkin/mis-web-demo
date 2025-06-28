"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  ArrowLeft,
  Heart,
  CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Users,
  Activity,
  FileText,
  Shield,
  Award,
  Star,
} from "lucide-react"

export default function HealthcareClinicPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive health checkups and medical consultations",
      duration: "30 min",
      price: "$150",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart health assessments and cardiovascular care",
      duration: "45 min",
      price: "$250",
    },
    {
      icon: Activity,
      title: "Preventive Care",
      description: "Regular health screenings and preventive treatments",
      duration: "60 min",
      price: "$200",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Digital health records management and consultation",
      duration: "15 min",
      price: "$75",
    },
  ]

  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "General Medicine",
      experience: "15+ years",
      rating: 4.9,
      patients: "2,500+",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      experience: "12+ years",
      rating: 4.8,
      patients: "1,800+",
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Preventive Care",
      experience: "10+ years",
      rating: 4.9,
      patients: "2,200+",
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

  const stats = [
    { label: "Patients Served", value: "10,000+", icon: Users },
    { label: "Years of Service", value: "25+", icon: Award },
    { label: "Success Rate", value: "98%", icon: Shield },
    { label: "Patient Rating", value: "4.9/5", icon: Star },
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
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900">HealthCare Plus</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-red-500">
                Services
              </a>
              <a href="#doctors" className="text-gray-600 hover:text-red-500">
                Doctors
              </a>
              <a href="#appointment" className="text-gray-600 hover:text-red-500">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800">Healthcare Excellence</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Health,
                <span className="block text-red-500">Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Providing comprehensive healthcare services with compassionate care and cutting-edge medical technology
                for over 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline">
                  Emergency Care
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center p-6">
                    <IconComponent className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-500 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="text-lg font-semibold text-red-500">{service.price}</div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Doctors</h2>
            <p className="text-xl text-gray-600">Experienced medical professionals dedicated to your health</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">{doctor.specialty}</CardDescription>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mt-2">
                    <span>{doctor.experience}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {doctor.rating}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    {doctor.patients} patients
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section id="appointment" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">Schedule your visit with our healthcare professionals</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  <div>
                    <h4 className="font-semibold mb-3">Available Time Slots</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time, index) => (
                        <Button key={index} variant="outline" size="sm" className="text-xs">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={appointmentForm.name}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={appointmentForm.email}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={appointmentForm.phone}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                />
                <Input
                  placeholder="Service Required"
                  value={appointmentForm.service}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                />
                <Textarea
                  placeholder="Additional notes or symptoms..."
                  rows={4}
                  value={appointmentForm.message}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                />
                <Button className="w-full bg-red-500 hover:bg-red-600">Confirm Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-red-500 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
              <p className="text-xl text-red-100 mb-8">Get in touch with us for any medical emergencies or inquiries</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Emergency: (555) 911-HELP</p>
                    <p className="text-red-100">Appointments: (555) 123-CARE</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">info@healthcareplus.com</p>
                    <p className="text-red-100">appointments@healthcareplus.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">123 Medical Center Drive</p>
                    <p className="text-red-100">Healthcare City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-red-100">Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Emergency Services</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800">24/7 Emergency Care</h4>
                  <p className="text-sm text-red-700">Our emergency department is open 24 hours a day, 7 days a week</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800">Ambulance Services</h4>
                  <p className="text-sm text-blue-700">
                    Fast response ambulance services available throughout the city
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800">Telemedicine</h4>
                  <p className="text-sm text-green-700">Virtual consultations available for non-emergency cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
