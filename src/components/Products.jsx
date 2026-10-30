import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { PRODUCTS, bgImage } from "../data/siteData";

export default function Products() {
  return (
    <section className="section" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="sec-head">
          <p className="eyebrow">Educational products</p>
          <h2 id="products-title" className="title">Learn at your own pace</h2>
          <p className="lead">
            Digital guides, courses and tools are being prepared. Online
            purchase will open when they are ready.
          </p>
        </Reveal>

        <div className="products">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.key} delay={i * 100}>
              <article className="product">
                <div
                  className="product__cover"
                  style={bgImage(p.image, "linear-gradient(135deg,#0a1d3f 0%,#0a2fc4 100%)")}
                />
                <div className="product__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <p className="product__price">{p.price}</p>
                  <Link to="/contact" className="btn btn--line">Get notified →</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}