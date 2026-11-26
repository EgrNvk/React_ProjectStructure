import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Filters />
        <Catalog />
      </div>
      <Footer />
    </div>
  )
}

export default App