import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/PD_TeaserPage_Store/DesktopHero_Template_PEA_1500x600._CB663723785_.jpg" alt="Not required" />

     <div className="home__row">
      <Product 
          id="2323"
          title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
          price={23999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY327_FMwebp_QL65_.jpg"
        />

      <Product 
          id="23231"
          title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 1TB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Four Thunderbolt 3 Ports) - Silver"
          price={173990}
          rating={5}
          image="https://m.media-amazon.com/images/I/716R-UhEB+L._AC_UY327_FMwebp_QL65_.jpg"
        />
     </div>

     <div className="home__row">
        <Product 
              id="459841"
              title="Prada Diagramme Large Leather Shoulder Bag"
              price={190176}
              rating={5}
              image="https://luxepolis.gumlet.io/media/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/p/r/prhb2153-prhb2153-1.jpg"
            />

        <Product 
              id="434841"
              title="MARYANN PLATINUM DIAMOND RING"
              price={313134}
              rating={5}
              image="https://cfcdn20.candere.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/p/cp05493_1.jpg?v=1520921494"
            />
        <Product 
              id="4841"
              title="Rita Hayworth and Shawshank Redemption"
              price={227}
              rating={5}
              image="https://m.media-amazon.com/images/I/61aGQNiHXRL._AC_UY327_FMwebp_QL65_.jpg"
            />

        </div>
    </div>
  )
}

export default Home
