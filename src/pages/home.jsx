import React from 'react'
import Header from '../components/header';
import HomeInformation from '../components/homeInformation';
import Homeguid from '../components/homeguid';
import'./home.css'


function Home() {
  return (
    <>
        <Header/>
        <HomeInformation/>
        <Homeguid/>
    </>
  )
}

export default Home