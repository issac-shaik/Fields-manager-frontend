import './App.css'
import HeroSection from './components/Herosection'
import Navbar from './components/Navbar'
import SearchBar from './components/Searchbar'
import JoinGameSection from './components/JoinGameSection'
import PopularSports from './components/PopularSports'
import Services from './components/Services'
import SportsCard from './components/Sportsvenue'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <SearchBar/>
    <div className='app'>
      <PopularSports/>
    <Services/>
      <JoinGameSection/>
    <SportsCard/>
    </div>
    </>
  )
}

export default App
