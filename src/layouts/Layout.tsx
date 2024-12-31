import '../layouts/layout.scss'
import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'
import type { LayoutProps } from './types'

const Layout = ({ children, pageTitle }: LayoutProps) => {
   useEffect(() => {
      document.title = pageTitle
   }, [pageTitle])

   return (
      <>
         <Navbar />
         <main>{children}</main>
         <Footer />
      </>
   )
}

export default Layout
