import './globals.css'
import { Inter } from 'next/font/google'
import '../../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import "aos/dist/aos.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitency For Her',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
