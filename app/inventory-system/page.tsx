"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowLeft,
  Package,
  Search,
  Plus,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

export default function InventorySystemPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const inventoryData = [
    {
      id: "INV001",
      name: "Wireless Headphones",
      category: "Electronics",
      stock: 45,
      minStock: 20,
      price: 99.99,
      supplier: "TechSupply Co.",
      status: "In Stock",
      lastUpdated: "2024-01-15",
    },
    {
      id: "INV002",
      name: "Office Chair",
      category: "Furniture",
      stock: 8,
      minStock: 15,
      price: 249.99,
      supplier: "FurniCorp",
      status: "Low Stock",
      lastUpdated: "2024-01-14",
    },
    {
      id: "INV003",
      name: "Laptop Stand",
      category: "Accessories",
      stock: 0,
      minStock: 10,
      price: 39.99,
      supplier: "AccessoryHub",
      status: "Out of Stock",
      lastUpdated: "2024-01-13",
    },
    {
      id: "INV004",
      name: "Bluetooth Speaker",
      category: "Electronics",
      stock: 32,
      minStock: 25,
      price: 79.99,
      supplier: "TechSupply Co.",
      status: "In Stock",
      lastUpdated: "2024-01-15",
    },
  ]

  const stats = [
    {
      title: "Total Items",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Low Stock Items",
      value: "23",
      change: "+5%",
      trend: "up",
      icon: AlertTriangle,
    },
    {
      title: "Total Value",
      value: "$45,678",
      change: "+8%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Out of Stock",
      value: "7",
      change: "-2%",
      trend: "down",
      icon: TrendingDown,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800"
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800"
      case "Out of Stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredData = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm text-gray-600">Back to Examples</span>
            </Link>
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">StockMaster Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#dashboard" className="text-gray-600 hover:text-green-600">
                Dashboard
              </a>
              <a href="#inventory" className="text-gray-600 hover:text-green-600">
                Inventory
              </a>
              <a href="#reports" className="text-gray-600 hover:text-green-600">
                Reports
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
              <p className="text-gray-600">Track and manage your stock levels in real-time</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section id="dashboard" className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className="p-3 bg-gray-100 rounded-full">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inventory Table */}
      <section id="inventory" className="py-8 px-4">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">Current Inventory</CardTitle>
                  <CardDescription>Manage your stock levels and product information</CardDescription>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item ID</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Min Stock</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className={item.stock <= item.minStock ? "text-red-600 font-semibold" : ""}>
                            {item.stock}
                          </span>
                        </TableCell>
                        <TableCell>{item.minStock}</TableCell>
                        <TableCell>${item.price}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="w-5 h-5" />
                Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium">Office Chair (INV002)</p>
                    <p className="text-sm text-gray-600">Stock level below minimum threshold</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium">Laptop Stand (INV003)</p>
                    <p className="text-sm text-gray-600">Item is completely out of stock</p>
                  </div>
                  <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics & Reports</h2>
            <p className="text-gray-600">Get insights into your inventory performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Stock Movement</CardTitle>
                <CardDescription>Track inventory flow and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Report
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Sales Analysis</CardTitle>
                <CardDescription>Analyze product performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Report
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Package className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Supplier Report</CardTitle>
                <CardDescription>Monitor supplier performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
