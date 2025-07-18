import React from 'react';
import './Hero.css';

const categories = [
  { title: "Autoclaves", img: "https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180" },
  { title: "Centrifuges", img: "https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180" },
  { title: "Incubators", img: "https://tse4.mm.bing.net/th/id/OIP.0tHNaV6g4gpOzSzC_hrHbAHaFj?pid=Api&P=0&h=180" },
  { title: "Test Chambers", img: "https://tse4.mm.bing.net/th/id/OIP.LyUpaDI7kj4RWtuSSQZr1wAAAA?pid=Api&P=0&h=180" },
  { title: "Safety Cabinets", img: "https://tse1.mm.bing.net/th/id/OIP.OobFf240EEkoYjdkDEcl7wHaE8?pid=Api&P=0&h=180" }
];

export default function Hero() {
  return (
    <section className="hero">
      <h2>Simplify your Laboratory needs</h2>
      <h3>With <span>High Quality</span> Laboratory Equipment</h3>

      <div className="category-container">
        {categories.map((item, idx) => (
          <div key={idx} className="category-card">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
