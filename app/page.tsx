"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Facebook, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Inspektur Ganda</h1>
          <div className="flex items-center space-x-2">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </header>
        
        <main>
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/inspektur.svg?height=80&width=80" alt="Inspektur Ganda" />
                  <AvatarFallback>IG</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl">Inspektur Ganda</CardTitle>
                  <CardDescription>Professional Portfolio</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Selamat datang di portfolio saya! Saya Inspektur Ganda, siap memberikan layanan profesional terbaik untuk lo.
              </p>
              <p className="mb-4">
                Mau dapet komisi? Ikuti instruksi di bawah ini!
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>Dihubungi oleh Inspektur Ganda</li>
                <li>Diminta untuk melakukan checkout</li>
                <li>Berikan rating sesuai petunjuk</li>
                <li>Terima komisi sesuai syarat dan ketentuan</li>
              </ol>
              <p className="mt-4 text-red-500 font-semibold">
                Penting! Inspektur Ganda TIDAK PERNAH meminta informasi sensitif seperti CVV kartu kredit atau data pribadi penting lainnya. Hati-hati terhadap potensi kejahatan siber, dan selalu pastikan keamanan data pribadi lo.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Button className="flex items-center space-x-2" onClick={() => window.open('https://www.facebook.com/profile.php?id=61567715621044', '_blank')}>
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </Button>
                <Button className="flex items-center space-x-2" onClick={() => window.open('https://wa.me/62817104060', '_blank')}>
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </main>
        
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 Inspektur Ganda. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
