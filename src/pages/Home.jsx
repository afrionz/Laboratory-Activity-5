import '../App.css'
import poolLogo from '../assets/pool nav.png'
import pfp from '../assets/pfp.png'
import cartIcon from '../assets/cart.svg'
import CenterImage from '../assets/center.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import HaywardFilter from '../assets/HAYWARD FILTER.png'

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Pure Water. Proven Service.</h1>
        <h2>Shop Now</h2>
      </header>

      <section className="hero">
        <div className="hero-top">
          <div className="hero-left">
            <div className="logo"><img src={poolLogo} alt="Pool Logo" /></div>
          </div>

          <div className="hero-center">
            <div className="search-field">
              <input className="search-box" type="text" placeholder="What are you looking for?" />
              <button className="search-button" type="button">🔍</button>
            </div>
          </div>

          <div className="hero-right">
            <button className="ghost-button icon-button" type="button" href="#sign-in">
              <img src={pfp} alt="Profile" className="sign-in-avatar" />
              Sign In
            </button>
            <button className="ghost-button icon-button" type="button" href="#cart">
              <img src={cartIcon} alt="Cart" />
              Cart
            </button>
          </div>
        </div>

        <nav className="hero-nav">
          <a href="#pool-chemicals" className="active">POOL CHEMICALS</a>
          <a href="#equipment">EQUIPMENT</a>
          <a href="#pool-accessories">POOL ACCESSORIES</a>
          <a href="#service">SERVICE</a>
          <a href="#daily-deals">DAILY DEALS</a>
        </nav>
      </section>

        <section className="image-section">
            <div className="image-wrapper">
            <img src={CenterImage} alt="Top section image" />
            </div>
        </section>

      <section className="products">
        <div className="card">
          <img src={Card1} alt="Card 1" />
          <h3>HYDROCHLORIC ACID 24 Liters</h3>
          <h4>Price: ₱4,500</h4>
        </div>

        <div className="card">
          <img src={Card2} alt="Card 2" />
          <h3>CHLORINE 45 kilos</h3>
          <h4>Price: ₱6,500</h4>
        </div>

        <div className="card">
          <img src={Card3} alt="Card 3" />
          <h3>CHLORINE  POOL TABLETS 5 PCS.</h3>
          <h4>Price: ₱750</h4>
        </div>

        <div className="card">
          <img src={HaywardFilter} alt="Hayward Filter" />
          <h3>HAYWARD FILTER</h3>
          <h4>Price: ₱24,000</h4>
        </div>
      </section>

      <footer className="site-footer home-footer">
        <div className="site-footer-content">
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default Home