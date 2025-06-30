"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, User, Wallet, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ScriptChain
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/library" className="text-gray-600 hover:text-purple-600 transition-colors">
              Library
            </Link>
            <Link href="/games" className="text-gray-600 hover:text-purple-600 transition-colors">
              Games
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-purple-600 transition-colors">
              Community
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-purple-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-purple-600 transition-colors">
              Analytics
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Badge variant="secondary" className="hidden sm:flex">
                  <Wallet className="w-4 h-4 mr-1" />
                  1,250 SCT
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/wallet">Wallet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="hidden sm:inline-flex">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/library">Library</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/games">Games</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/marketplace">Marketplace</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/analytics">Analytics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
