"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();


  const doLogin = function () {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-(--sidebar-bg-color) p-4">
      <Card className="w-full max-w-[380px] mx-auto shadow-lg bg-(--primary-white)">
        <CardHeader className="flex flex-col items-center space-y-3 pt-8 pb-2">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mb-1">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          </div>
          <p className="font-bold text-lg text-(--sidebar-bg-active-tab)">Dashboard Kit</p>
          <div className="space-y-3 text-center">
            <h1 className="text-2xl font-bold text-(--login-base-text-color)">Log In to Dashboard Kit</h1>
            <p className="font-thin text-sm text-(--login-subtitle-color)">Enter your email and password below</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-8 pt-4">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs uppercase font-bold text-(--login-subtitle-color)">
              EMAIL
            </Label>
            <Input id="email" type="email" placeholder="Email address" className="h-9 text-sm" />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-xs uppercase text-xs uppercase font-bold text-(--login-subtitle-color)">
                PASSWORD
              </Label>
              <Link href="#" className=" text-blue-600 hover:underline">
                <span className="text-xs text-(--login-subtitle-color)">Forgot password?</span>
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-9 text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 h-10 mt-2 font-semibold" onClick={doLogin}>Log In</Button>
          <div className="text-center text-sm font-regular mt-2">
            <span className="font-thin text-(--login-subtitle-color)">Don&apos;t have an account?{" "}</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

