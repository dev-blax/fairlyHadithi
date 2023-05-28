import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-gray-200 text-gray-800 min-h-screen flex flex-col items-center space-y-5 '>
      <header className=' text-center text-xl font-bold pt-6 '>
        Fairly Child
      </header>
      <form action="" className=' flex flex-col items-start space-y-4 bg-gray-300 py-3 px-6 rounded-md '>
        <div>
          <label htmlFor=""> Title: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""> Author: </label>
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <label htmlFor=""> Summary: </label>
          <input type="text" name='summary' id='summary' />
        </div>
        <div>
          <label htmlFor=""> Full Text: </label>
          <input type="text" name='FullText' id='FullText' />
        </div>
        <div>
          <label htmlFor=""> Image: </label>
          <input type="file" />
        </div>
        <div>
          <input type="submit" value="Upload" className=' bg-purple-900 text-white px-5 py-1 rounded ' />
        </div>
      </form>
    </main>
  )
}
