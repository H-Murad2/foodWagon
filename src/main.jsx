import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar'
import Hero from './Hero'
import Offers from './Offers'
import HowItWorks from './HowItWorks'
import PopularItems from './PopularItems'
import FeaturedRestaurants from './FeaturedRestaurants'
import BestDeals from './BestDeals'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Hero/>
    <Offers/>
    <HowItWorks/>
    <PopularItems/>
   <FeaturedRestaurants/>
   <BestDeals/>
   <Footer/>
  </>,
)
