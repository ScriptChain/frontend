"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gamepad2, Trophy, Users, Clock, Coins, Play } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const mockGames = [
  {
    id: 1,
    title: "Literary Quiz Challenge",
    description: "Test your knowledge of classic literature with our comprehensive quiz system.",
    players: 1247,
    reward: 50,
    difficulty: "Medium",
    duration: "15 min",
    category: "Quiz",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Plot Prediction Game",
    description: "Predict what happens next in ongoing stories and earn rewards for accuracy.",
    players: 892,
    reward: 75,
    difficulty: "Hard",
    duration: "30 min",
    category: "Prediction",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Character Matching",
    description: "Match characters to their respective novels in this fast-paced game.",
    players: 2156,
    reward: 30,
    difficulty: "Easy",
    duration: "10 min",
    category: "Matching",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Author Trivia",
    description: "Dive deep into the lives and works of famous authors throughout history.",
    players: 743,
    reward: 60,
    difficulty: "Hard",
    duration: "20 min",
    category: "Trivia",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const leaderboard = [
  { rank: 1, name: "BookWorm2024", score: 15420, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, name: "LitMaster", score: 14890, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, name: "NovelNinja", score: 13750, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, name: "ReadingRaven", score: 12980, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, name: "StorySeeker", score: 11650, avatar: "/placeholder.svg?height=40&width=40" },
]

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Interactive Games</h1>
          <p className="text-gray-600 text-lg">
            Challenge yourself with literary games and earn ScriptChain tokens for your knowledge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Games Section */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {mockGames.map((game) => (
                <Card key={game.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{game.category}</Badge>
                      <Badge
                        className={`${
                          game.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : game.difficulty === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {game.difficulty}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg mb-2">{game.title}</CardTitle>
                    <CardDescription className="mb-4">{game.description}</CardDescription>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {game.players.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {game.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-purple-600" />+{game.reward} SCT
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Play Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Games Played</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Win Rate</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tokens Earned</span>
                    <span className="font-semibold">2,340 SCT</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="pt-2 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">12th</div>
                    <div className="text-sm text-gray-600">Global Rank</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Top players this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((player) => (
                    <div key={player.rank} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          player.rank === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : player.rank === 2
                              ? "bg-gray-100 text-gray-800"
                              : player.rank === 3
                                ? "bg-orange-100 text-orange-800"
                                : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {player.rank}
                      </div>
                      <img
                        src={player.avatar || "/placeholder.svg"}
                        alt={player.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{player.name}</div>
                        <div className="text-xs text-gray-500">{player.score.toLocaleString()} pts</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Challenge */}
            <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Daily Challenge
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Complete today's challenge for bonus rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold">+100 SCT</div>
                  <div className="text-sm opacity-90">Bonus Reward</div>
                </div>
                <Button variant="secondary" className="w-full">
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
