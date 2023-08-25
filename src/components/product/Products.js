import React, { useEffect, useState } from 'react';
import './products.css';

function Products() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => setError(err))
  }, [])

  return (
    <React.Fragment>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products && products.map((product) => <div key={product.id} className="group relative">
          <div className="image-fit aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="image-fit h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
          <div className="mt-4 flex justify-between bg-gray">
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent uppercase bg-indigo-600 px-2 py-1 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent uppercase px-2 py-1 font-medium text-primary font-medium hover:text-primary-600 focus:text-primary-500 focus:outline-none focus:ring-offset-2"
            >
              Add to bag
            </button>
            
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default Products;