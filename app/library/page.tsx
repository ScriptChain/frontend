"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, BookOpen, Star, Clock, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const mockBooks = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.8,
    readTime: "8 hours",
    description: "A classic tale of love, marriage, and social expectations in 19th century England.",
    cover: "/placeholder.svg?height=300&width=200",
    tokens: 150,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.6,
    readTime: "6 hours",
    description: "A story of decadence and excess in the Jazz Age.",
    cover: "/placeholder.svg?height=300&width=200",
    tokens: 120,
  },
  {
    id: 3,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.3,
    readTime: "12 hours",
    description: "The epic tale of Captain Ahab's obsessive quest for the white whale.",
    cover: "/placeholder.svg?height=300&width=200",
    tokens: 200,
  },
  {
    id: 4,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Gothic",
    rating: 4.7,
    readTime: "10 hours",
    description: "A young woman's journey of self-discovery and love.",
    cover: "/placeholder.svg?height=300&width=200",
    tokens: 180,
  },
]

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "all" || book.genre.toLowerCase() === selectedGenre.toLowerCase()
    return matchesSearch && matchesGenre
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Digital Library</h1>
          <p className="text-gray-600 text-lg">
            Discover authentic novels from verified sources and earn tokens while reading.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search books, authors, or genres..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="fiction">Fiction</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="gothic">Gothic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-[3/4] bg-gray-200 rounded-t-lg overflow-hidden">
                  <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {book.genre}
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">+{book.tokens} SCT</Badge>
                </div>

                <CardTitle className="text-lg mb-1 line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-2">by {book.author}</CardDescription>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{book.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {book.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {book.readTime}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
