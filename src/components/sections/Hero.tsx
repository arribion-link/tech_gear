import hero_image from "../../assets/images/hero.png"

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div>
            <h1>G502 HERO WIRELESS</h1>
            <h3>Logitech's High Performance Wireless Gamming Mouse</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adi pisicing elit. Deserunt
              itaque culpa, totam accusamus maxime sunt quam dolorum autem omnis
              impedit recusandae magni dolor aut, iure maiores iste quisquam
              unde similique.
            </p>
            <p>USD 99.99</p>
            <div>
              <button>ADD TO CART</button>
              <button>MORE DEVICES</button>
            </div>
          </div>
          <div>
            <img src={hero_image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
