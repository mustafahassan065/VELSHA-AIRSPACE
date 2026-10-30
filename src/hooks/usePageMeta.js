import { useEffect } from "react";
import { SITE } from "../data/siteData";

const setMeta = (selector, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute("content", value);
};

export default function usePageMeta(title, description) {
  useEffect(() => {
    const full = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} — ${SITE.tagline}`;
    document.title = full;
    setMeta('meta[property="og:title"]', full);
    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
    }
  }, [title, description]);
}