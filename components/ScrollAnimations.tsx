"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set delay CSS variables on all reveal elements
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    revealItems.forEach((item) => {
      const delay = Number(item.dataset.delay || 0);
      item.style.setProperty("--delay", delay);
    });

    // Reveal animations
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    // Counter animations
    const counters = document.querySelectorAll<HTMLElement>(".counter");

    function animateCounter(counter: HTMLElement) {
      const target = Number(counter.dataset.target || 0);
      const duration = 1100;
      const startTime = performance.now();

      function tick(currentTime: number) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * easedProgress).toString();
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (prefersReducedMotion) {
            entry.target.textContent = entry.target.dataset.target;
          } else {
            animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));

    // Set year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
