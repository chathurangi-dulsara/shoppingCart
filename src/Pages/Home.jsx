import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import ProductTile from '../Components/ProductTile';


export default function Home() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

async function fetchProducts() {
  setLoading(true);
  const response = await axios.get('https://fakestoreapi.com/products');
  const data = response.data;
 
  if (data) {
    setLoading(false);
    setProducts(data);
  }
 
}

useEffect(() => {
  fetchProducts();
},[])
;

  return (
    <div>
      {
        loading ? <div className="min-h-screen flex justify-center items-center">
          <ClipLoader
            color={"#364153"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
           /></div>
        : (
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {
              products && products.length
                ? products.map(product => (
                    <ProductTile key={product.id} product={product} />
                  ))
                : null
            }
          </div>
        )
      }
    </div>
  )
}



