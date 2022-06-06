import React from 'react';
import './Home.scss';
import IntroPart from '../../components/IntroPart/IntroPart';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ParallaxCompo from '../../components/ParallaxCompo/ParallaxCompo';
import CategoriesProducts from '../../components/CategoriesProducts/CategoriesProducts';
import ProductIntro from '../../components/ProductIntro/ProductIntro';

const Home = props => {
    return (
        <main>
            <IntroPart
             urlPath="undraw_real_time_sync_re_nky7"
             title="خرید کالای اپل از اپل جی اس"
             introDir="right"
             mainIntro={true} />
            <ProductCategory />
            <ParallaxCompo url="/assets/imgs/product.jpg" />
            <CategoriesProducts category="popular" />
            <IntroPart
             urlPath="undraw_progressive_app_m-9-ms (1)"
             title="بهترین چیزارو از بهترین جاها بخر"
             introDir="left" />
            <CategoriesProducts category="sale" />
            <IntroPart
             urlPath="undraw_in_sync_re_jlqd"
             title="تمام محصولات اپل در یک قاب"
             introDir="right" />
             <ProductIntro />
        </main>
    )
}

export default Home;