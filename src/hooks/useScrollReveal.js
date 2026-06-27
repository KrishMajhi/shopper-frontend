import { useEffect } from "react";
export function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
