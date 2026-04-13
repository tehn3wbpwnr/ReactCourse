import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../../components/Header'
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage( {cart, loadCart} ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
                const response =  await axios.get('/api/products')
                setProducts(response.data)
        }

        getHomeData();
    }, []); //[] dependency array to tell useEffect to run once


    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="/images/icons/home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}></ProductsGrid>
            </div>
        </>
    );
}