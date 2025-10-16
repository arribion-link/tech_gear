import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import Contact from "../components/sections/Contact"
import Partiners from "../components/sections/Partiners"
import Product from "../components/sections/Product"

const Home = () => {
  return (
    <main>
        <Hero />
        <Product />
        <Services />
        <Partiners/>
        <Contact/>
    </main>
  )
}

export default Home
