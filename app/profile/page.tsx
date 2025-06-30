"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, BookOpen, Wallet, Edit } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const userProfile = {
  name: "Sarah Johnson",
  username: "@bookworm_sarah",
  email: "sarah.johnson@example.com",
  bio: "Passionate reader and literature enthusiast. Love discussing classics and discovering new authors. Currently reading through the Brontë sisters' complete works.",
  avatar: "/placeholder.svg?height=120&width=120",
  joinDate: "March 2023",
  location: "San Francisco, CA",
  website: "sarahreads.blog",
}

const readingStats = {
  booksRead: 47,
  currentlyReading: 3,
  tokensEarned: 2340,
  communityRank: 12,
  reviewsWritten: 34,
  followers: 156,
  following: 89,
}

const recentBooks = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 5,
    review: "A timeless masterpiece that never gets old. Austen's wit and social commentary are brilliant.",
    date: "2 days ago",
    cover: "/placeholder.svg?height=80&width=60",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    rating: 4,
    review: "Powerful story of independence and love. Jane is such a strong, inspiring character.",
    date: "1 week ago",
    cover: "/placeholder.svg?height=80&width=60",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    rating: 4,
    review: "Dark and passionate. The gothic atmosphere is perfectly crafted.",
    date: "2 weeks ago",
    cover: "/placeholder.svg?height=80&width=60",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState(userProfile)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Avatar className="w-32 h-32">
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="text-2xl">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-1">{userProfile.name}</h1>
                    <p className="text-gray-600 mb-2">{userProfile.username}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Joined {userProfile.joinDate}</span>
                      <span>•</span>
                      <span>{userProfile.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{userProfile.bio}</p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-lg text-blue-600">{readingStats.booksRead}</div>
                    <div className="text-gray-600">Books Read</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-green-600">{readingStats.tokensEarned}</div>
                    <div className="text-gray-600">SCT Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-purple-600">#{readingStats.communityRank}</div>
                    <div className="text-gray-600">Community Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-orange-600">{readingStats.followers}</div>
                    <div className="text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-red-600">{readingStats.following}</div>
                    <div className="text-gray-600">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="library">My Library</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reading Activity</CardTitle>
                <CardDescription>Your latest book reviews and ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentBooks.map((book, index) => (
                    <div key={index} className="flex gap-4 pb-6 border-b last:border-b-0">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-sm text-gray-600">by {book.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${i < book.rating ? "text-yellow-400" : "text-gray-300"}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{book.date}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{book.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Currently Reading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "The Tenant of Wildfell Hall", author: "Anne Brontë", progress: 65 },
                      { title: "Sense and Sensibility", author: "Jane Austen", progress: 23 },
                      { title: "Villette", author: "Charlotte Brontë", progress: 8 },
                    ].map((book, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{book.title}</span>
                          <span className="text-gray-600">{book.progress}%</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">by {book.author}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${book.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reading Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>2024 Books Goal</span>
                        <span>47/60</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Reading Streak</span>
                        <span>12 days</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">On Fire! 🔥</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "First Book", description: "Read your first book", earned: true, icon: "📚" },
                { title: "Speed Reader", description: "Read 5 books in one month", earned: true, icon: "⚡" },
                { title: "Classic Lover", description: "Read 10 classic novels", earned: true, icon: "📖" },
                { title: "Community Star", description: "Get 100 likes on reviews", earned: true, icon: "⭐" },
                { title: "Token Collector", description: "Earn 1000 SCT tokens", earned: true, icon: "🪙" },
                { title: "Bookworm", description: "Read 50 books", earned: false, icon: "🐛" },
              ].map((achievement, index) => (
                <Card key={index} className={achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50"}>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    <Badge className={achievement.earned ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
                      {achievement.earned ? "Earned" : "Locked"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={editedProfile.name}
                      onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editedProfile.location}
                      onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    />
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Wallet & Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{readingStats.tokensEarned} SCT</div>
                    <div className="text-sm text-gray-600">Current Balance</div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input id="wallet" placeholder="0x..." />
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Connect Wallet
                  </Button>
                  <Button className="w-full">Withdraw Tokens</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
