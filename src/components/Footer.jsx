import React from 'react'

const Footer = () => {
  return (
    <>
         <div className='container' id='footer'>

<footer>
    <div className="footer">
        <div className="footer-brand">
            <h2>Lavanya Car's</h2>
      
        <p >Mobile: 8956768176 / 9356919203 </p>
        <p>Email:chincholkarmadhuri099@gmail.com</p>
        
        <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
         </div>    

             
        <div className="footer-links">
            <h3 style={{color:'black'}}>Outstation Cab Routes</h3>
            <ul style={{color:'grey'}}>
                <li>Nagpur - Amravati (2,700 rs)</li>
                <li>Nagpur - Chandrapur (2,700 rs)</li>
                <li>Nagpur - Mumbai (15,000 rs)</li>
                <li>Nagpur - Pune (11,000 rs)</li>
                <li>Nagpur - Headrabad (10,000 rs)</li>
                <li>Nagpur - Aurangabad (8,000 rs)</li>                
            </ul>
        </div>

        
        <div className="footer-links">
            <h3>Outstation Cab Routes </h3>
            <ul style={{color:'gray'}}>
                
                <li>Nagpur - Gondiya (2,700 rs)</li>
                <li>Nagpur - Balaghat (3,000 rs)</li>
                <li>Nagpur - Raipur (4,500 rs)</li>
                <li>Nagpur - Jabalpur (5,000 rs)</li>
                <li>Nagpur - Indore (10,000 rs)</li>
            </ul>
        </div>
          
          
         <div className="footer-links">
            <h3>Suports</h3>
            <ul>
                
                <li><a href="#">Safti Services</a></li>
                <li><a href="#">Customers Help</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div> 

        
        <div className="footer-links">
            <h3>About</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Service's</a></li>
            </ul>
        </div>
    </div>

    <div className="footer-bottom">
       <p>Copyright  ©2024. All Rights Reserved. — Designed is Nitesh shiv</p>
       <div>
          <a href="#">Terms & Conditions</a>
          <span style={{margin:'0 10px'}}>|</span>
          <a href="#">Privacy Policy</a>
       </div>
    </div>
</footer>

</div>

      
      
    </>
  )
}

export default Footer
