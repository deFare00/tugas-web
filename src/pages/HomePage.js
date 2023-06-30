import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import JustArrived from '../parts/HomePage/JustArrived';


export default function HomePage(props) {
  return (
    <>
        <Header />
        <Hero />
        <BrowseRoom />
        <JustArrived />
    </>
  )
}
