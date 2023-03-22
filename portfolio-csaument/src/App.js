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
            <a id='about'><About /></a>
            <a id='projects'><Projects /></a>
            <a id='experience'><Experience /></a>
            <a id='contact'><Contact /></a>
            <a className='footer'><Footer /></a>
      </>)
}

export default App