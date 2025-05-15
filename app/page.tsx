

import Brands from './components/HomeComponents/brands'
import Hero from './components/HomeComponents/hero'
import Products from './components/HomeComponents/productos'

export default function Home() {
  return (
    <div className="home">
      <Hero/>
      <Brands/>
      <Products/>
    </div>
  );
}
