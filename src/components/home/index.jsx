import React from 'react'
import NavBarComponent from '../components/navbar';
import FooterComponent from '../components/footer';
import BannerComponent from '../components/banner';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <>            
          <body>
            <NavBarComponent />
            <div className="home">
              <BannerComponent />
              </div>
              <div>
                {ProductList.map(Products => {
                  return (
                    <ProductCard 
                      id={Products.id}
                      title={Products.name}
                      description={Products.description}
                      image={Products.img}
                      price={Products.price}
                    />
                  )
                })}
            </div>
            <FooterComponent />
          </body>
        </>
    )
};

export default Home;
