import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found", "The page you are looking for does not exist.");

  return (
    <section className="section">
      <div className="container notfound">
        <p className="eyebrow">404</p>
        <h1 className="title">This page is off the flight path.</h1>
        <p className="lead">The page you are looking for doesn't exist.</p>
        <Link to="/" className="btn btn--blue">Back to home →</Link>
      </div>
    </section>
  );
}