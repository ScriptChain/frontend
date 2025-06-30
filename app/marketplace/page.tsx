"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ShoppingCart, Star, Truck, CreditCard, Coins } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const mockProducts = [
  {
    id: 1,
    title: "Pride and Prejudice - Hardcover",
    author: "Jane Austen",
    price: 24.99,
    cryptoPrice: 0.015,
    rating: 4.8,
    reviews: 342,
    image: "/placeholder.svg?height=300&width=200",
    type: "physical",
    inStock: true,
    description: "Beautiful hardcover edition with gold foil lettering",
  },
  {
    id: 2,
    title: "The Great Gatsby - Digital Edition",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    cryptoPrice: 0.006,
    rating: 4.6,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=200",
    type: "digital",
    inStock: true,
    description: "Enhanced digital edition with interactive annotations",
  },
  {
    id: 3,
    title: "Moby Dick - Collector's Edition",
    author: "Herman Melville",
    price: 89.99,
    cryptoPrice: 0.055,
    rating: 4.9,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=200",
    type: "physical",
    inStock: true,
    description: "Limited edition with leather binding and illustrations",
  },
  {
    id: 4,
    title: "Jane Eyre - Audiobook",
    author: "Charlotte Brontë",
    price: 14.99,
    cryptoPrice: 0.009,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=200",
    type: "digital",
    inStock: true,
    description: "Professional narration by award-winning voice actor",
  },
]

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || product.type === selectedType
    const matchesTab = activeTab === "all" || product.type === activeTab
    return matchesSearch && matchesType && matchesTab
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-gray-600 text-lg">
            Purchase physical and digital books with traditional payment or cryptocurrency.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search books, authors..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="physical">Physical Books</SelectItem>
              <SelectItem value="digital">Digital Books</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="physical">Physical Books</TabsTrigger>
            <TabsTrigger value="digital">Digital & Audio</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="aspect-[3/4] bg-gray-200 rounded-t-lg overflow-hidden relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className={`absolute top-2 right-2 ${
                          product.type === "physical" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {product.type === "physical" ? "Physical" : "Digital"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-1 line-clamp-2">{product.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-2">by {product.author}</CardDescription>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {product.rating}
                      </div>
                      <span>({product.reviews} reviews)</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${product.price}</span>
                        <Badge variant="outline" className="text-xs">
                          <Coins className="w-3 h-3 mr-1" />
                          {product.cryptoPrice} ETH
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>

                    {product.type === "physical" && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                        <Truck className="w-3 h-3" />
                        Free shipping on orders over $25
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Payment Methods */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Secure Payment Options
            </CardTitle>
            <CardDescription>Choose your preferred payment method for a seamless checkout experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Traditional Payment</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    MC
                  </div>
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    AMEX
                  </div>
                  <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                    PP
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Cryptocurrency</h3>
                <div className="flex items-center gap-4">
                  <Badge className="bg-orange-100 text-orange-800">Bitcoin</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Ethereum</Badge>
                  <Badge className="bg-purple-100 text-purple-800">SCT Token</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
