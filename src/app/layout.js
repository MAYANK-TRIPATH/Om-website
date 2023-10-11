import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Om computer Institute',
  description: 'Created by Om institute',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
      <div className='cotainer'>

      <Navbar/> 
        {children}
      <Footer/>
      </div>
      </body>
    </html>
  )
}
