import React from 'react';
import './Home.scss';
import IntroPart from '../../components/IntroPart/IntroPart';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ParallaxCompo from '../../components/ParallaxCompo/ParallaxCompo';
import NewProducts from '../../components/NewProducts/NewProducts';

const Home = props => {
    return (
        <main>
            <IntroPart />
            <ProductCategory />
            <ParallaxCompo url="/assets/imgs/product.jpg" />
            <NewProducts />
        </main>
    )
}

export default Home;