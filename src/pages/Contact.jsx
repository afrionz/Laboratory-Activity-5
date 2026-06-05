import '../App.css'
import poolLogo from '../assets/pool nav.png'
import pfp from '../assets/pfp.png'
import cartIcon from '../assets/cart.svg'

function Contact() {
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

      <section className="contact-page">
        <div className="contact-shell">
          <article className="contact-card">
            <p className="eyebrow">Contact Us</p>
            <h2>Get in touch with RMJD.</h2>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Phone number</span>
                <a href="tel:+639171234567">+63 950 862 8571</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:rmjd0927@gmail.com">rmjd0927@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a href="https://rmjd-site.vercel.app/" target="_blank" rel="noreferrer">rmjd-site.vercel.app</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <p>Love Street, Block 3, Lot 31C, Las Piñas City</p>
              </div>
            </div>
          </article>

          <article className="contact-map-card">
            <p className="eyebrow">Map location</p>
            <h3>Find our business here</h3>
            <div className="map-frame">
              <iframe
                title="RMJD location map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7597.182930741157!2d121.0141984!3d14.4272974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1ba36e0221b%3A0x3e96346198f9bea7!2sRmjd%20Swimming%20Pool%20Chemical%20Trading!5e1!3m2!1sen!2sph!4v1780665549901!5m2!1sen!2sph"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
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

export default Contact
