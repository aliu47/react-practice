import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequest';
function Products() {
    const { id } = useParams()
    const url = `https://5f189789475e170016e17e91.mockapi.io/products/${id}`
    let product = useAxiosGet(url)
    let content = null
    
    if(product.loading){
        content = <Loader/>
    }
    if(product.error){
        content=<div>
            <p>There was an error retriving this product</p>
        </div>
    }
    if (product.data) {
        content = <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default Products