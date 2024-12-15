import React from 'react'
import heroImg from '../../src/Assets/hero.png'

const Home = () => {
  return (
    <>

           
    <section className="hero" id="home">
        <div className="hero-content">

            <h1>Lavan<span style={{color:'#ffc107'}}>ya</span>  <p> Tour And Travel's Service's</p> </h1>
            <h4>Your Reliable Partner For Safe and Comfortable Travel.</h4>
            <h4>From Nagpur OneWay And Round Trip Travels To All The City's Of India</h4>
            <h4>24/7 Availability</h4>
            <h4>Mobile: 8956768176 / 9356919203</h4>
            <div className="buttons">
                <a href="#" className="btn btn-primary">Book Now</a>
            </div>
        </div>
        <div className="hero-image">
            <img src={heroImg} alt="" />
        </div>
    </section>
      
      
    </>
  )
}

export default Home
