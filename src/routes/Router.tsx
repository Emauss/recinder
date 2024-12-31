import React from 'react'
import Layout from '../layouts/Layout'
import Home from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../pages/about-us/AboutUs'
import Finder from '../pages/finder/Finder'

export const Router = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Layout pageTitle={'Home'}>
                  <Home />
               </Layout>
            }
         />
         <Route
            path="/about-us"
            element={
               <Layout pageTitle={'About Us'}>
                  <AboutUs />
               </Layout>
            }
         />
         <Route
            path="/finder"
            element={
               <Layout pageTitle={'Finder'}>
                  <Finder />
               </Layout>
            }
         />
      </Routes>
   )
}
