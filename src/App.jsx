import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import FaqPage from './pages/FaqPage'
import { useRouter } from './router'
import { DISCOVER_SLUG, FAQ_SLUG } from './routes'
import './App.css'

const PAGES = {
  [DISCOVER_SLUG]: DiscoverPage,
  [FAQ_SLUG]: FaqPage,
}

function App() {
  const { slug } = useRouter()
  const Page = PAGES[slug] || HomePage

  return (
    <div className="App">
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
