import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequest';

function Home() {
    const { id } = useParams()
    const [page, setPage] = useState(1)
    const url = `https://5f189789475e170016e17e91.mockapi.io/products?page=${page}&limit=10`
    let products = useAxiosGet(url)
    let content = null
    let previous = null
    let next = null
    if (products.loading) {
        content = <Loader />
    }
    if (products.error) {
        content = <div>
            <p>There was an error retriving these products</p>
        </div>
    }
    if (products.data) {
        content = products.data.map((product) =>
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>)
    }
        previous =
            <div className={page==1?"bg-blue-700 text-grey p-2 m-2 flex justify-center":"bg-blue-500 text-white p-2 m-2 flex justify-center"}
            onClick={() => page == 1 ? null : setPage(page - 1)} >
                <h1>Previous</h1>
            </div>


        next =
            <div className={page==5?"bg-blue-700 text-grey p-2 m-2 flex justify-center":"bg-blue-500 text-white p-2 flex m-2 justify-center"}
            onClick={() => page > 4 ? null: setPage(page + 1)}>
                <h1 >Next</h1>
            </div>
    
    return (<div>
        <h1 className="font-bold text-2xl mb">
            Best Sellers</h1>
        {content}
        <div className="grid grid-cols-2">
            {previous}
            {next}

        </div>
    </div>)

}

export default Home