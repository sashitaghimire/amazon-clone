import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt="banner"/>
           {/* Product  id , title, price , rating, image*/}
           <div className="home__row">
           <Product 
           id="12321341"
           title="The Lean Startup: How constant Innovation Creates Radically Successful Business Paperback"
           price ={11.96}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,200_.jpg"
           />
           
           <Product
            id="89893333"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Wine"
            price={250}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
           </div>   
           <div className="home__row">

           <Product
                        id="67893426"
                        title="Turtle Beach - Ear Force Recon 50P Stereo Gaming Headset - PS4 and Xbox One (compatible w/ Xbox One controller w/ 3.5mm Headset Jack)"
                        price={24.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41c6gKlbUvL._AC_US327_FMwebp_QL65_.jpg"
                    />
           
           <Product 
           id="1232"
           title="Womans Watches Simple Watches for Women Water Resistant Classy Metal Mesh Band Nurse’s Watches Ladies Bracelet Watch"
           price ={19.96}
           rating={3}
           image="https://images-na.ssl-images-amazon.com/images/I/61tHlFu6-bL._AC_UX679_.jpg"
           />
           
           <Product
            id="333"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
            price={2099}
            rating={5}
            image="data:image/webp;base64,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"
            />

            </div>      
            <div className="home__row">
            <Product 
           id="7741"
           title="TCL 32S325 32 Inch 720p Roku Smart LED TV (2019)"
           price ={11.96}
           rating={5}
           image="https://m.media-amazon.com/images/I/71YZlXXFktL._AC_UY327_FMwebp_QL65_.jpg"
           />

                </div>  
        </div>
    )
}

export default Home
