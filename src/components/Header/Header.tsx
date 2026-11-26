import Logo from './Logo/Logo'
import CatalogButton from './CatalogButton/CatalogButton'
import Search from './Search/Search'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-row">
        <Logo />
        <CatalogButton />
        <Search />
      </div>
    </header>
  )
}

export default Header