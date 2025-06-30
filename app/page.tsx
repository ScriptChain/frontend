import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Coins, Users, TrendingUp, Shield, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            🚀 Blockchain-Powered Literature Platform
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to ScriptChain
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover authentic novels, earn blockchain rewards, and join a vibrant community of literature enthusiasts.
            Experience reading like never before with gamification and decentralized rewards.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading
            </Button>
            <Button size="lg" variant="outline">
              <Coins className="w-5 h-5 mr-2" />
              Earn Tokens
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ScriptChain?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Authentic Literature</CardTitle>
              <CardDescription>
                Access verified novels from Project Gutenberg and Open Library with advanced search capabilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Coins className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Blockchain Rewards</CardTitle>
              <CardDescription>
                Earn tokens for reading, reviewing, and engaging with the community through transparent smart contracts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Gamepad2 className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Interactive Games</CardTitle>
              <CardDescription>
                Participate in literary quizzes and prediction games to test your knowledge and earn rewards.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle>Vibrant Community</CardTitle>
              <CardDescription>
                Connect with fellow readers, share insights, and participate in meaningful literary discussions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle>Secure Platform</CardTitle>
              <CardDescription>
                Multi-layered authentication and blockchain-based security ensure your data and tokens are safe.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track reading trends, popular titles, and your personal reading journey with detailed insights.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Literary Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of readers earning rewards while exploring the world of literature.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              <Link href="/auth/signup">Create Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/library">Browse Library</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
