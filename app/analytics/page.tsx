"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, BookOpen, Clock, Award, Target } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const readingStats = {
  booksRead: 47,
  totalPages: 12847,
  readingTime: "284 hours",
  averageRating: 4.3,
  tokensEarned: 2340,
  currentStreak: 12,
}

const monthlyData = [
  { month: "Jan", books: 3, pages: 890 },
  { month: "Feb", books: 4, pages: 1120 },
  { month: "Mar", books: 5, pages: 1340 },
  { month: "Apr", books: 3, pages: 980 },
  { month: "May", books: 6, pages: 1560 },
  { month: "Jun", books: 4, pages: 1180 },
]

const favoriteGenres = [
  { genre: "Classic Literature", percentage: 35, books: 16 },
  { genre: "Fiction", percentage: 28, books: 13 },
  { genre: "Mystery", percentage: 15, books: 7 },
  { genre: "Romance", percentage: 12, books: 6 },
  { genre: "Science Fiction", percentage: 10, books: 5 },
]

const achievements = [
  { title: "Speed Reader", description: "Read 5 books in one month", earned: true, date: "May 2024" },
  { title: "Classic Enthusiast", description: "Read 10 classic novels", earned: true, date: "Apr 2024" },
  { title: "Community Leader", description: "Get 100 likes on posts", earned: true, date: "Mar 2024" },
  { title: "Token Master", description: "Earn 5000 SCT tokens", earned: false, progress: 47 },
  { title: "Review Expert", description: "Write 50 book reviews", earned: false, progress: 73 },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Reading Analytics</h1>
          <p className="text-gray-600 text-lg">
            Track your reading journey and discover insights about your literary preferences.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{readingStats.booksRead}</div>
              <div className="text-sm text-gray-600">Books Read</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{readingStats.totalPages.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Pages Read</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{readingStats.readingTime}</div>
              <div className="text-sm text-gray-600">Reading Time</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{readingStats.averageRating}</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{readingStats.tokensEarned}</div>
              <div className="text-sm text-gray-600">SCT Earned</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{readingStats.currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Reading Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                Monthly Reading Progress
              </CardTitle>
              <CardDescription>Books and pages read over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data) => (
                  <div key={data.month} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{data.month}</span>
                      <span className="text-gray-600">
                        {data.books} books • {data.pages} pages
                      </span>
                    </div>
                    <Progress value={(data.books / 6) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Favorite Genres */}
          <Card>
            <CardHeader>
              <CardTitle>Favorite Genres</CardTitle>
              <CardDescription>Your reading preferences breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {favoriteGenres.map((genre) => (
                  <div key={genre.genre} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{genre.genre}</span>
                      <span className="text-gray-600">
                        {genre.books} books ({genre.percentage}%)
                      </span>
                    </div>
                    <Progress value={genre.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Achievements
            </CardTitle>
            <CardDescription>Your reading milestones and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className={`${achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50"}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{achievement.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                      </div>
                      {achievement.earned ? (
                        <Badge className="bg-green-100 text-green-800 text-xs">Earned</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    {achievement.earned ? (
                      <div className="text-xs text-green-600 font-medium">Earned in {achievement.date}</div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">Progress: {achievement.progress}%</div>
                        <Progress value={achievement.progress} className="h-1" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reading Goals */}
        <Card>
          <CardHeader>
            <CardTitle>2024 Reading Goals</CardTitle>
            <CardDescription>Track your annual reading targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">47/60</div>
                <div className="text-sm text-gray-600 mb-2">Books Goal</div>
                <Progress value={78} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">78% complete</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">284/400</div>
                <div className="text-sm text-gray-600 mb-2">Hours Goal</div>
                <Progress value={71} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">71% complete</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2,340/5,000</div>
                <div className="text-sm text-gray-600 mb-2">Tokens Goal</div>
                <Progress value={47} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">47% complete</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
