import { products } from '../../data/products'
import ProductCard from './ProductCard/ProductCard'
import './Catalog.css'

const sortOptions = ['по популярності', 'по збільшенню ціни', 'по зменшенню ціни', 'нові зверху']

function Catalog() {
  return (
    <main className="catalog">
      <div className="catalog-sort">
        <span className="catalog-sort-label">Сортировка:</span>
        {sortOptions.map((option) => (
          <a className="catalog-sort-link" href="#" key={option}>
            {option}
          </a>
        ))}
      </div>
      <div className="catalog-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Catalog