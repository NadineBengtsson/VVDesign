import React from 'react'
import NavBarComponent from '../navbar';
import FooterComponent from '../footer';
import BannerComponent from '../banner';
import ProductList from '../ProductList';
import ProductCard from '../ProductCard';

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
