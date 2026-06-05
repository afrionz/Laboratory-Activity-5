import '../App.css'
import poolLogo from '../assets/pool nav.png'
import pfp from '../assets/pfp.png'
import cartIcon from '../assets/cart.svg'
import aboutImage from '../assets/about.jpg'

function About() {
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
          <a href="#pool-chemicals">POOL CHEMICALS</a>
          <a href="#equipment">EQUIPMENT</a>
          <a href="#pool-accessories">POOL ACCESSORIES</a>
          <a href="#service">SERVICE</a>
          <a href="#daily-deals">DAILY DEALS</a>
        </nav>
      </section>

      <section className="about-page">
        <div className="about-shell">
          <article className="about-copy-card">
            <p className="eyebrow">About Us</p>
            <h2>RMJD Swimming Pool Chemical Trading</h2>
            <p>
              RMJD is your trusted source for pool maintenance essentials, chemicals, and dependable service support.
              We focus on helping homeowners and businesses keep their pools clean, safe, and ready for every swim.
            </p>
            <p>
              From daily pool care to essential supplies and expert guidance, our team is committed to delivering quality products
              and practical solutions that make pool ownership easier and more enjoyable.
            </p>
          </article>

          <article className="about-image-card">
            <img src={aboutImage} alt="RMJD pool business" />
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-content">
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default About
