import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

const App = () => {
      useEffect(() => WebFont.load({google: {families: ['Lato']}}),[])

      return (<>
            <Header />
            <div className='about'><About /></div>
            <div className='projects'><Projects /></div>
            <div className='experience'><Experience /></div>
            <div className='contact'><Contact /></div>
            <div className='footer'><Footer /></div>
      </>)
}

export default App