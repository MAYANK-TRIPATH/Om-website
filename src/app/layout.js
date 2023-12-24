import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../../context/ThemeContext'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Om Computer Institute',
  description: 'Created by Om Institute',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
      <div className="container">
      <Navbar/> 
        {children}
      <Footer/>
      </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
