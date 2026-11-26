import type { Product } from '../../../data/products'
import cartIcon from '../../../assets/cart-icon.svg'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <a className="product-card-picture" href="#">
        <img className="product-card-image" src={product.image} alt={product.name} />
      </a>
      <a className="product-card-name" href="#">
        {product.name}
      </a>
      <div className="product-card-buy">
        <span className="product-card-price">{product.price.toLocaleString('uk-UA')} ₴</span>
        <button className="product-card-cart">
          <img src={cartIcon} alt="В кошик" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard