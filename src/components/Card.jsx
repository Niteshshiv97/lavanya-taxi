import React from 'react'
import Img1 from '../../src/Assets/innova.png'
import Img2 from '../../src/Assets/ertiga.webp'
import Img3 from '../../src/Assets/tavera.png'
import Img4 from '../../src/Assets/dzire.jpg'
import Img5 from '../../src/Assets/r8nsora_1420937.jpg'
import Img6 from '../../src/Assets/xcent-1503911441-prod-var.jpg'

const Card = () => {
  return (
    <>

     
<section className="products-section" id="shop">
      <h1 style={{color:'black', textAlign:'center', marginBottom:'1rem' ,}}> Car Booking</h1>
      <h1 style={{color:'black', textAlign:'center', marginBottom:'1rem' ,}}>Nagpur To All India Oneway And Round Trip Travels Service's</h1>
      <p style={{color:'black',textAlign:'center', marginBottom:'1rem'}}>Explore the convenience of one-way taxi services from Nagpur with Lavanya Taxi.</p>
      <p style={{color:'black',textAlign:'center', marginBottom:'1rem'}}>To Book A Car Call : 8956768176</p>
    <div className="products-container">
     

      <div className="products-grid">

          <div className="product-card">

           <img src={Img1} alt="" className="product-image"/>

            <div className="product-info">
                <h3 className="product-name">Innova</h3>
                <p className="product-price">15.00 ₹ km </p>
            </div>

        </div>


        <div className="product-card">
         <img src={Img2} alt="" className="product-image" />
            <div className="product-info">
                <h3 className="product-name">Ertiga</h3>
                <p className="product-price">14.00 ₹ km</p>
            </div>
        </div>

        <div className="product-card">
         <img src={Img3} alt="" className="product-image" />
            <div className="product-info">
                <h3 className="product-name">Tavera</h3>
                <p className="product-price">15.00 ₹ km</p>
            </div>
           
        </div>

        <div className="product-card">
         <img src={Img4} alt="" className="product-image" />
            <div className="product-info">
                <h3 className="product-name">Dzire</h3>
                <p className="product-price">11.00 ₹ km</p>
            </div>
           
        </div>

        <div className="product-card">
         <img src={Img5} alt="" className="product-image" />
            <div className="product-info">
                <h3 className="product-name">Zest</h3>
                <p className="product-price">11.00 ₹ km</p>
            </div>
           
        </div>

        <div className="product-card">
            <img src={Img6} alt="" className="product-image" />
                <div className="product-info">
                <h3 className="product-name">Xsent</h3>
                <p className="product-price">11.00 ₹ km</p>
            </div>
            
        </div>
    </div>
</div>
</section>
      
    </>
  )
}

export default Card
