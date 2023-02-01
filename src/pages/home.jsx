import React from 'react'
import Header from '../components/header';
import HomeInformation from '../components/homeInformation';
import Homeguid from '../components/homeguid';
import Footer from '../components/footer';
import'./home.css'


function Home() {
  return (
    <>
        <Header/>
        <HomeInformation/>
        <Homeguid/>
        <Footer/>
    </>
  )
}

export default Home