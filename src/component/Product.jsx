import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={40} width={300} />
                    <Skeleton height={90} />
                    <Skeleton height={40} width={300} />
                    <Skeleton height={60} width={200} />
                    <Skeleton height={80} />

                    <div class="row">
                        <div class="col-2">
                            <Skeleton height={40} width={110} />
                        </div>
                        <div class="col-10">
                            <Skeleton height={40} width={110} style={{ marginLeft: 3 }} />
                        </div>
                    </div>

                </div>

            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rata}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="load">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
