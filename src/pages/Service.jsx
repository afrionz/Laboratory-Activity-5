import '../App.css'
import poolLogo from '../assets/pool nav.png'
import pfp from '../assets/pfp.png'
import cartIcon from '../assets/cart.svg'
import ServiceImage from '../assets/service.png'

function Service() {
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
          <a href="#service" className="active">SERVICE</a>
          <a href="#daily-deals">DAILY DEALS</a>
        </nav>
    </section>

    <section className="service-section">
      <div className="service-container">
        <div className="service-image-column">
          <div className="service-image-wrapper">
            <img src={ServiceImage} alt="RMJD Service" />
          </div>
          <h2>RMJD <br></br>SERVICES</h2>
        </div>

        <div className="service-form-column">
          <h3>Service Request Form</h3>
          <p>Rmjd's expert technicians are available Monday through Saturday at most locations.
All our technicians are licensed, bonded, and insured.</p>
          <form className="service-form">
            <div className="form-group">
              <label>Type of Customer</label>
              <select>
                <option>Residential or Commercial</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="form-group">
              <label>Zip Code for Services</label>
              <input type="text" placeholder="Example:4102" />
            </div>

            <div className="form-group">
              <label>Looking for</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="installation" /> Installation
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="services" /> Services
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="maintenance" /> Maintenance
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Which Services</label>
              <select>
                <option>Choose a service form installation</option>
                <option>Water Testing</option>
                <option>Equipment Repair</option>
                <option>Maintenance</option>
                <option>Consultation</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Set Appointment</button>
          </form>
        </div>
      </div>
    </section>

    </div>
  )
}
export default Service
