import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Products from "./Products";




const images = [
  "/assets/Mothersday.jpg" ,
   "/assets/essentials.jpg",
    "/assets/toys.jpg",
     "/assets/Gamingstore.jpg"
  
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="home_container">
<div className="home_subnav">

  <div className="subnav_left">
    <span className="menu_icon">☰</span>
    <span>All</span>
  </div>

  <div className="subnav_links">
    <span>Today's Deals</span>
    <span>Gift Cards</span>
    <span>Sell</span>
    <span>Registry</span>
    <span>Prime Video</span>
    <span>Customer Service</span>
  </div>

</div>
        {/* Carousel */}
        <div className="home_carousel">
          <img src={images[current]} alt="banner" />
        </div>

        {/* CATEGORY CARDS */}
        <div className="home_row_cards">

          {/* GAMING */}
          <div className="home_card">
            <h2>Get your game on</h2>
<Link to="/category/gaming">
  <img src="/assets/gaming.jpg" alt="gaming" />
</Link>


            <Link to="/product/1">Shop gaming</Link>
          </div>

          {/* HOME */}
          <div className="home_card">
            <h2>New home arrivals</h2>

            <div className="home_card_grid">
              <Link to="/category/kitchen">
  <img src="/assets/pots.jpg" alt="kitchen" />
  <p>Kitchen & Dining</p>
</Link>
              <Link to="/category/home">
                 <img src="/assets/home.jpg" alt="home" />
                 <p>Home Improvement</p>
              </Link>
              <Link to="/category/decor">
                 <img src="/assets/decor.jpg" alt="decor" />
                 <p>Decor</p>
              </Link>
              <Link to="/category/bedding">
                 <img src="/assets/bedding.jpg" alt="bedding" />
                 <p>Bedding & Bath</p>
              </Link>
            </div>

            <Link to="/products/category/home">Shop now</Link>
          </div>

          {/* KITCHEN */}
          <div className="home_card">
            <h2>Top categories in Kitchen appliances picks</h2>

            <Link to="/products/category/kitchen">
           <img className="card__mainImage" src="/assets/airfryer.jpg" alt="cooker" />
            </Link>

              <div className="card__grid">
             <Link to="products/coffee">
             <div>
              <img src="/assets/coffee.jpg" alt="coffee" />
              <p>Coffee</p>
             </div>
                </Link>


           
             <Link to="products/pots">
             <div>
              <img src="/assets/pots1.jpg" alt="pots" />
              <p>Pots and Pans</p>
             </div>
            </Link>

            
             <Link to="products/kettles">
             <div>
              <img src="/assets/kettles.jpg" alt="coffee" />
              <p>Kettles</p>
             </div>
            </Link>
           </div>

            <Link to="/products/category/kitchen">Explore all products in kitchen</Link>
          </div>

          {/* GIFTS */}
          <div className="home_card">
            <h2>Find gifts for Mom</h2>

            <div className="home_card_grid">
              <Link to="/products/category/gifts">
                 <img src="/assets/Apparel.jpg" alt="clothes" />
                 <p>Apparel</p>
              </Link>
              <Link to="/products/category/gifts">
                 <img src="/assets/shoes.jpg" alt="shoes" />
                 <p>Shoes</p>
              </Link>
              <Link to="/products/category/gifts">
                 <img src="/assets/jewelery.jpg" alt="jewelery" />
                 <p>Jewelry</p>
              </Link>
              <Link to="/products/category/gifts">
               <img src="/assets/Handbags.jpg" alt="jewelery" />
                 <p>Handbags</p>
              </Link>
            </div>

            <Link to="/products/category/gifts">See deals</Link>
          </div>
          </div>



{/* ✅ SECOND ROW (new Amazon-style cards UNDER) */}
<div className="home_row_cards second_row">

  {/* FASHION */}
  <div className="home_card">
    <h2>Shop Fashion for less</h2>

    <div className="home_card_grid">
      <Link>
        <img src="/assets/Jeans.jpg" alt="" />
        <p>Jeans under $50</p>
      </Link>
      <div>
        <img src="/assets/Vest.jpg" alt="" />
        <p>Tops under $25</p>
      </div>
      <div>
        <img src="/assets/dresses.jpg" alt="" />
        <p>Dresses under $30</p>
      </div>
      <div>
        <img src="/assets/boots.jpg" alt="" />
        <p>Shoes under $50</p>
      </div>
    </div>

    <a href="#">See all deals</a>
  </div>

  {/* TECH */}
  <div className="home_card">
    <h2>Gifts for techie Mom</h2>

    <div className="home_card_grid">
      <div>
        <img src="/assets/headphones.jpg" alt="" />
        <p>Headphones</p>
      </div>
      <div>
        <img src="/assets/camera.jpg" alt="" />
        <p>Security & surveillance</p>
      </div>
      <div>
        <img src="/assets/watch.jpg" alt="" />
        <p>Wearable tech</p>
      </div>
      <div>
        <img src="/assets/mouse.jpg" alt="" />
        <p>Computers & accessories</p>
      </div>
    </div>

    <a href="#">Explore Mother's Day gifts</a>
  </div>

  {/* HOME */}
  <div className="home_card">
    <h2>Easy updates for elevated spaces</h2>

    <div className="home_card_grid">
      <div>
        <img src="/assets/Baskets.jpg" alt="" />
        <p>Baskets & hampers</p>
      </div>
      <div>
        <img src="/assets/Hardware.jpg" alt="" />
        <p>Hardware</p>
      </div>
      <div>
        <img src="/assets/Furniture.jpg" alt="" />
        <p>Accent furniture</p>
      </div>
      <div>
        <img src="/assets/Wallpaper.jpg" alt="" />
        <p>Wallpaper & paint</p>
      </div>
    </div>

    <a href="#">Shop home products</a>
  </div>

  {/* GIFTS */}
  <div className="home_card">
    <h2>Gifts Mom wants</h2>

    <div className="home_card_grid">
      <div>
        <img src="/assets/glasses.jpg" alt="" />
        <p>Fashion gifts</p>
      </div>
      <div>
        <img src="/assets/beauty.jpg" alt="" />
        <p>Beauty & self care</p>
      </div>
      <div>
        <img src="/assets/Tablet.jpg" alt="" />
        <p>Tech gifts</p>
      </div>
      <div>
        <img src="/assets/gifts.jpg" alt="" />
        <p>Home & kitchen gifts</p>
      </div>
    </div>

    <a href="#">Shop Mother's Day gifts</a>
  </div>

</div>
        </div>

        


      </div>
   
  );
};

export default Home;