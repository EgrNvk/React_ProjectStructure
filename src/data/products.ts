import iphone256EsimBurgundy from '../assets/products/iphone-18-pro-256gb-esim-burgundy.jpg'
import iphone256Burgundy from '../assets/products/iphone-18-pro-256gb-burgundy.jpg'
import iphone256EsimBlack from '../assets/products/iphone-18-pro-256gb-esim-black.jpg'
import iphone256Black from '../assets/products/iphone-18-pro-256gb-black.jpg'
import iphone256EsimGlacier from '../assets/products/iphone-18-pro-256gb-esim-glacier.jpg'
import iphone256Glacier from '../assets/products/iphone-18-pro-256gb-glacier.jpg'
import iphone512EsimBurgundy from '../assets/products/iphone-18-pro-512gb-esim-burgundy.jpg'
import iphone512Glacier from '../assets/products/iphone-18-pro-512gb-glacier.jpg'
import iphone256EsimSilver from '../assets/products/iphone-18-pro-256gb-esim-silver.jpg'
import iphone512EsimBlack from '../assets/products/iphone-18-pro-512gb-esim-black.jpg'
import iphone256Silver from '../assets/products/iphone-18-pro-256gb-silver.jpg'
import iphone512Black from '../assets/products/iphone-18-pro-512gb-black.jpg'
import iphone512EsimGlacier from '../assets/products/iphone-18-pro-512gb-esim-glacier.jpg'
import iphone1tbBurgundy from '../assets/products/iphone-18-pro-1tb-burgundy.jpg'
import iphone512EsimSilver from '../assets/products/iphone-18-pro-512gb-esim-silver.jpg'
import iphone512Burgundy from '../assets/products/iphone-18-pro-512gb-burgundy.jpg'
import iphone1tbEsimBlack from '../assets/products/iphone-18-pro-1tb-esim-black.jpg'
import iphone512Silver from '../assets/products/iphone-18-pro-512gb-silver.jpg'
import iphone1tbBlack from '../assets/products/iphone-18-pro-1tb-black.jpg'
import iphone1tbEsimSilver from '../assets/products/iphone-18-pro-1tb-esim-silver.jpg'

export type Product = {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: 1, name: 'Смартфон Apple iPhone 18 Pro 256GB eSim Burgundy (MJQ54,MJR74)', price: 66129, image: iphone256EsimBurgundy },
  { id: 2, name: 'Смартфон Apple iPhone 18 Pro 256GB Burgundy (MJRR4)', price: 72059, image: iphone256Burgundy },
  { id: 3, name: 'Смартфон Apple iPhone 18 Pro 256GB eSim Black (MJQ34,MJR54)', price: 65999, image: iphone256EsimBlack },
  { id: 4, name: 'Смартфон Apple iPhone 18 Pro 256GB Black (MJRP4)', price: 71069, image: iphone256Black },
  { id: 5, name: 'Смартфон Apple iPhone 18 Pro 256GB eSim Glacier (MJQ64,MJR84)', price: 66129, image: iphone256EsimGlacier },
  { id: 6, name: 'Смартфон Apple iPhone 18 Pro 256GB Glacier (MJRT4)', price: 70539, image: iphone256Glacier },
  { id: 7, name: 'Смартфон Apple iPhone 18 Pro 512GB eSim Burgundy (MJQ94,MJRD4)', price: 80939, image: iphone512EsimBurgundy },
  { id: 8, name: 'Смартфон Apple iPhone 18 Pro 512GB Glacier (MJRX4)', price: 81499, image: iphone512Glacier },
  { id: 9, name: 'Смартфон Apple iPhone 18 Pro 256GB eSim Silver (MJQ44,MJR64)', price: 66129, image: iphone256EsimSilver },
  { id: 10, name: 'Смартфон Apple iPhone 18 Pro 512GB eSim Black (MJQ74,MJR94)', price: 77979, image: iphone512EsimBlack },
  { id: 11, name: 'Смартфон Apple iPhone 18 Pro 256GB Silver (MJRQ4)', price: 70499, image: iphone256Silver },
  { id: 12, name: 'Смартфон Apple iPhone 18 Pro 512GB Black (MJRU4)', price: 81959, image: iphone512Black },
  { id: 13, name: 'Смартфон Apple iPhone 18 Pro 512GB eSim Glacier (MJQA4,MJRE4)', price: 78969, image: iphone512EsimGlacier },
  { id: 14, name: 'Смартфон Apple iPhone 18 Pro 1TB Burgundy (MJT14)', price: 108289, image: iphone1tbBurgundy },
  { id: 15, name: 'Смартфон Apple iPhone 18 Pro 512GB eSim Silver (MJQ84,MJRC4)', price: 78969, image: iphone512EsimSilver },
  { id: 16, name: 'Смартфон Apple iPhone 18 Pro 512GB Burgundy (MJRW4)', price: 84459, image: iphone512Burgundy },
  { id: 17, name: 'Смартфон Apple iPhone 18 Pro 1TB eSim Black (MJQC4,MJRF4)', price: 96239, image: iphone1tbEsimBlack },
  { id: 18, name: 'Смартфон Apple iPhone 18 Pro 512GB Silver (MJRV4)', price: 84399, image: iphone512Silver },
  { id: 19, name: 'Смартфон Apple iPhone 18 Pro 1TB Black (MJRY4)', price: 103119, image: iphone1tbBlack },
  { id: 20, name: 'Смартфон Apple iPhone 18 Pro 1TB eSim Silver (MJQD4,MJRG4)', price: 97719, image: iphone1tbEsimSilver },
]