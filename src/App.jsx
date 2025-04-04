import './App.css'
import HeroSection from './components/Herosection'
import Navbar from './components/Navbar'
import SearchBar from './components/Searchbar'
import JoinGameSection from './components/JoinGameSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <SearchBar/>
      <JoinGameSection/>
    </>
  )
}

export default App
