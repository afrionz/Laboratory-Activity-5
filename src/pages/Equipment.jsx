import { useEffect, useState } from 'react'
import '../App.css'
import poolLogo from '../assets/pool nav.png'
import pfp from '../assets/pfp.png'
import cartIcon from '../assets/cart.svg'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import HaywardFilter from '../assets/HAYWARD FILTER.png'

const equipmentItems = [
  {
    id: 1,
    name: 'HYDROCHLORIC ACID 24 Liters',
    price: '₱4,500',
    image: Card1,
    detail: 'A reliable acid solution for pool balancing and water treatment. Ideal for routine maintenance and quick correction of high pH levels.',
  },
  {
    id: 2,
    name: 'CHLORINE 45 kilos',
    price: '₱6,500',
    image: Card2,
    detail: 'High-strength chlorine for sanitation and shock treatment. Helps keep pool water clear, clean, and safe for regular swimming use.',
  },
  {
    id: 3,
    name: 'CHLORINE POOL TABLETS 5 PCS.',
    price: '₱750',
    image: Card3,
    detail: 'Easy-to-use chlorine tablets that provide steady sanitizer release and reduce the hassle of daily chemical handling.',
  },
  {
    id: 4,
    name: 'HAYWARD FILTER',
    price: '₱24,000',
    image: HaywardFilter,
    detail: 'A durable filtration unit designed for strong water circulation and cleaner pool water. A dependable choice for long-term system performance.',
  },
  {
    id: 5,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
  {
    id: 6,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
  {
    id: 7,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
  {
    id: 8,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
  {
    id: 9,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
  {
    id: 10,
    name: 'COMING SOON',
    price: 'New item',
    image: null,
    detail: 'This space is ready for the next equipment addition.',
    placeholder: true,
  },
]

function Equipment() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [rating, setRating] = useState(5)

  useEffect(() => {
    if (selectedItem) {
      setQuantity(1)
      setRating(5)
    }
  }, [selectedItem])

  const updateQuantity = (value) => {
    setQuantity((current) => Math.max(1, current + value))
  }

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
          <a href="#equipment" className="active">EQUIPMENT</a>
          <a href="#pool-accessories">POOL ACCESSORIES</a>
          <a href="#service">SERVICE</a>
          <a href="#daily-deals">DAILY DEALS</a>
        </nav>
      </section>

      <section className="equipment-page">
        <div className="equipment-intro">
          <p className="eyebrow">RMJD Equipment</p>
          <h2>Browse premium pool equipment and supplies.</h2>
          <p>Click any product to view a larger image and more details.</p>
        </div>

        <section className="products equipment-grid">
          {equipmentItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`card product-card${item.placeholder ? ' placeholder-card' : ''}`}
              onClick={() => {
                setSelectedItem(item)
                setQuantity(1)
                setRating(5)
              }}
              aria-label={`View details for ${item.name}`}
            >
              {item.image ? <img src={item.image} alt={item.name} /> : <span className="placeholder-swatch">+</span>}
              <h3>{item.name}</h3>
              <h4>{item.placeholder ? 'Coming Soon' : `Price: ${item.price}`}</h4>
            </button>
          ))}
        </section>
      </section>

      {selectedItem && (
        <div className="product-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <article className="product-modal" onClick={(event) => event.stopPropagation()}>
            <div className="product-modal-media">
              <div className="product-modal-image-frame">
                {selectedItem.image ? <img src={selectedItem.image} alt={selectedItem.name} /> : <div className="placeholder-modal-box">Coming Soon</div>}
              </div>

              <div className="rating-box">
                <p className="eyebrow">Customer rating</p>
                <div className="stars" role="radiogroup" aria-label="Product rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={index < rating ? 'star selected' : 'star'}
                      onClick={() => setRating(index + 1)}
                      aria-label={`Rate ${index + 1} out of 5 stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <span className="rating-label">{rating}.0 / 5 stars</span>
              </div>
            </div>

            <div className="product-modal-copy">
              <p className="eyebrow">Selected product</p>
              <h3>{selectedItem.name}</h3>
              <p className="product-price">{selectedItem.placeholder ? 'Available soon' : selectedItem.price}</p>
              <p>{selectedItem.detail}</p>

              <div className="quantity-row">
                <button type="button" className="quantity-btn" onClick={() => updateQuantity(-1)} aria-label="Decrease quantity">−</button>
                <span className="quantity-value">{quantity}</span>
                <button type="button" className="quantity-btn" onClick={() => updateQuantity(1)} aria-label="Increase quantity">+</button>
              </div>

              <div className="product-actions">
                <button type="button" className="submit-btn">Buy Now</button>
                <button type="button" className="ghost-button add-cart-btn">Add to Cart</button>
              </div>

              <button type="button" className="close-link" onClick={() => setSelectedItem(null)}>
                Close details
              </button>
            </div>
          </article>
        </div>
      )}

      <footer className="site-footer">
        <div className="site-footer-content">
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default Equipment
