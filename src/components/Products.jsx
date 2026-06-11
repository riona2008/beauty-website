import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';
function Products() {
  return (
    <section className="products">

      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="product-card">
          <img src={product1} alt="product" />
          <h3>Glow Serum</h3>
          <p>$29</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product2} alt="product" />
          <h3>Lip Gloss</h3>
          <p>$19</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product3} alt="product" />
          <h3>Toner</h3>
          <p>$24</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product4} alt="product" />
          <h3>Mosturizer</h3>
          <p>$39</p>
          <button>Buy Now</button>
        </div>

      </div>

    </section>
  );
}

export default Products;