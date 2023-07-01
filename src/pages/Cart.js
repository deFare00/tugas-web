import React from 'react';

import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb';

import ShoppingCart from '../parts/Cart/ShoppingCart';
import ShippingDetails from '../parts/Cart/ShippingDetails'
// import BrowseRoom from '../parts/HomePage/BrowseRoom';
// import JustArrived from '../parts/HomePage/JustArrived';

import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

import Document from '../parts/Document';

export default function HomePage() {
  return (
    <Document>
        <Header theme="black" />

        <Breadcrumb list={[
          { url: "/", name: "Home"},
          { url: "/cart", name: "Shopping Cart"},
        ]} />

        <section class="md:py-16">
            <div class="container mx-auto px-4">
                <div class="flex -mx-4 flex-wrap">
                    <ShoppingCart />
                    <ShippingDetails />
                </div>
            </div>
        </section>

        <Sitemap />
        <Footer />
    </Document>
  )
}
