import logo from '../../../assets/logo.webp'
import './Logo.css'

function Logo() {
  return (
    <a className="logo" href="/">
      <img className="logo-img" src={logo} alt="Магазин TOUCH" />
    </a>
  )
}

export default Logo