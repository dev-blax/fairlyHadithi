import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'
import MyForm from './form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-gray-100 min-h-screen text-purple-950 flex flex-col items-center  '>
      <header> Form </header>
      <MyForm />
    </main>
  )
}
