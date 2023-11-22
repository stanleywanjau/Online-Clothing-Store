import React from 'react'

function Shoes({ isproduct }) {
  return (
    <div className="card-container">
    {isproduct?.shoes?.map((product) => (
      <div key={product.id} className="card">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-details">
          <p>{product.name}</p>
          <p><span>Brand:</span> {product.brand}</p>
          <p><span>Price:</span> {product.price}</p>
          <p><span>Size:</span> {product.size}</p>
          <p><span>Stock:</span> {product.stock}</p>
          <button className='add-to-cart'>Add to cart</button>
        </div>
      </div>
    ))}
  </div>

  )
}

export default Shoes