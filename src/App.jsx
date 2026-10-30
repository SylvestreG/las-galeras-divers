import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import { useRouter } from './router'
import { DISCOVER_SLUG } from './routes'
import './App.css'

function App() {
  const { slug } = useRouter()

  return (
    <div className="App">
      <Header />
      <main>
        {slug === DISCOVER_SLUG ? <DiscoverPage /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default App
