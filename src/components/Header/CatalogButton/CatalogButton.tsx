import catalogIcon from '../../../assets/catalog-icon.svg'
import './CatalogButton.css'

function CatalogButton() {
  return (
    <button className="catalog-button">
      <img className="catalog-button-icon" src={catalogIcon} alt="" />
      Каталог товарів
    </button>
  )
}

export default CatalogButton