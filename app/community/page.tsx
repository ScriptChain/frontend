"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, BookOpen, Users, TrendingUp, Plus } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const mockPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      username: "@bookworm_sarah",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just finished reading 'Pride and Prejudice' for the third time and I'm still discovering new nuances in Austen's writing. The way she critiques social conventions while telling a beautiful love story is masterful. What are your thoughts on rereading classics?",
    book: "Pride and Prejudice",
    likes: 24,
    comments: 8,
    shares: 3,
    timestamp: "2 hours ago",
    tags: ["classics", "austen", "rereading"],
  },
  {
    id: 2,
    author: {
      name: "Michael Chen",
      username: "@lit_explorer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "The symbolism in 'Moby Dick' continues to amaze me. Melville's use of the white whale as a representation of the unknowable and unconquerable forces of nature is brilliant. Currently on chapter 42 and loving every page!",
    book: "Moby Dick",
    likes: 31,
    comments: 12,
    shares: 5,
    timestamp: "4 hours ago",
    tags: ["symbolism", "melville", "analysis"],
  },
  {
    id: 3,
    author: {
      name: "Emma Rodriguez",
      username: "@novel_ninja",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Book club discussion tonight was incredible! We dove deep into the themes of social class and morality in 'The Great Gatsby'. The green light symbolism sparked such an interesting debate. Love how literature brings people together! 📚✨",
    book: "The Great Gatsby",
    likes: 18,
    comments: 6,
    shares: 2,
    timestamp: "6 hours ago",
    tags: ["bookclub", "gatsby", "discussion"],
  },
]

const trendingTopics = [
  { tag: "classics", posts: 1247 },
  { tag: "bookclub", posts: 892 },
  { tag: "analysis", posts: 743 },
  { tag: "rereading", posts: 621 },
  { tag: "symbolism", posts: 534 },
]

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-gray-600 text-lg">
            Connect with fellow readers, share insights, and discuss your favorite literature.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Share Your Thoughts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="What's on your mind about literature? Share your insights, reviews, or questions..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      #classics
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      #review
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      #discussion
                    </Badge>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">Post</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {mockPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{post.author.name}</span>
                        <span className="text-gray-500 text-sm">{post.author.username}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">{post.timestamp}</span>
                      </div>

                      <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>

                      {post.book && (
                        <div className="flex items-center gap-2 mb-3 p-2 bg-purple-50 rounded-lg">
                          <BookOpen className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-800">Reading: {post.book}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-gray-500">
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">12,847</div>
                  <div className="text-sm text-gray-600">Active Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3,291</div>
                  <div className="text-sm text-gray-600">Posts This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">847</div>
                  <div className="text-sm text-gray-600">Book Discussions</div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Trending Topics
                </CardTitle>
                <CardDescription>Popular discussions this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={topic.tag} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">#{index + 1}</span>
                        <span className="font-medium">#{topic.tag}</span>
                      </div>
                      <span className="text-sm text-gray-500">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Users */}
            <Card>
              <CardHeader>
                <CardTitle>Suggested Readers</CardTitle>
                <CardDescription>Connect with like-minded book lovers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alex Thompson", username: "@classic_reader", books: 47 },
                    { name: "Lisa Park", username: "@poetry_lover", books: 32 },
                    { name: "David Wilson", username: "@sci_fi_fan", books: 61 },
                  ].map((user) => (
                    <div key={user.username} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                          <AvatarFallback className="text-xs">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.books} books read</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Follow
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
