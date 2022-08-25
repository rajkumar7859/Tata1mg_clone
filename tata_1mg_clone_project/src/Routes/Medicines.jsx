import React from 'react'
import Navbar from '../Components/NavbarAllComponent/Navbar'
import SilderImage from '../Components/NavbarAllComponent/SilderImage'
import Aayurved from '../HomeComponents/Aayurved'
import ComboDeals from '../HomeComponents/ComboProduct'
import DealsOfDays from '../HomeComponents/DealsOfDays'
import FeaturedBrand from '../HomeComponents/FeaturedBrand'
import FooterDcription from '../HomeComponents/FooterDecriptions'
import { LastFooter } from '../HomeComponents/LastFooter'
import PopularCategories from '../HomeComponents/PopularCategories'
import TopDeals from '../HomeComponents/TopDeals'
import TopSellers from '../HomeComponents/TopSellers'
import Trending from '../HomeComponents/Trending'

function Medicines() {
  return (
    <>
    <Navbar />
    <div style={{backgroundColor:"#edececd6"}}>
      
       <SilderImage />
       <FeaturedBrand />
       <TopSellers />
       <Trending />
       <DealsOfDays />
       <PopularCategories />
       <TopDeals />
       <ComboDeals />
       <Aayurved />
       <FooterDcription />
       <LastFooter />
    </div>
    </>
  )
}

export default Medicines
