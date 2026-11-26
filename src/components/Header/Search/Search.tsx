import searchIcon from '../../../assets/search-icon.svg'
import './Search.css'

function Search() {
  return (
    <form className="search">
      <input className="search-input" type="text" placeholder="Чохол для смартфона" />
      <button className="search-button" type="submit">
        <img className="search-button-icon" src={searchIcon} alt="Пошук" />
      </button>
    </form>
  )
}

export default Search