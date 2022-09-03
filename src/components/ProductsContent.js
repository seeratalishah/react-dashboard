import React from 'react'
import Card from './Card'
import ProductCard from './ProductCard'
import product from '../images/product-1.png';
import product2 from '../images/cafe-table.png';


function ProductsContent() {

  const cards =[
    {
        imgUrl: product,
        title: 'Lipstick',
        price: '86 dollars'
    },
    {
      imgUrl: product,
      title: 'Lipstick',
      price: '86 dollars'
  },
  {
    imgUrl: product,
    title: 'Lipstick',
    price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
{
  imgUrl: product,
  title: 'Lipstick',
  price: '86 dollars'
},
  ]
  return (
    <div className='dashboard-content' >
        <h1>Products</h1>
        <div className="product-cards-container">
          {
            cards.map((card, index)=>{
              return <ProductCard imgUrl={card.imgUrl} title={card.title} price={card.price} />
            })
          }
        </div>
    </div>
  )
}

export default ProductsContent