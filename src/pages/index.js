import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-gray-200 text-gray-800 min-h-screen '>
      <header className=' text-center text-xl font-bold pt-6 '>
        Fairly Child
      </header>
    </main>
  )
}
