import React from 'react';
import './ProductGrid.css';

const products = [
  { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Particle Counter', img: 'https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180' },
  { name: 'Air Permeability Tester', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Alcohol Analyzer', img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png' },
  { name: 'Anaerobic Jar', img: 'https://tse2.mm.bing.net/th/id/OIP.FfU-yRhZhya8mTZ3Vy7cegHaFz?pid=Api&P=0&h=180' },
  { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Particle Counter', img: 'https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180' },
  { name: 'Air Permeability Tester', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Alcohol Analyzer', img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png' },
  { name: 'Anaerobic Jar', img: 'https://tse2.mm.bing.net/th/id/OIP.FfU-yRhZhya8mTZ3Vy7cegHaFz?pid=Api&P=0&h=180' },
  { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Particle Counter', img: 'https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180' },
  { name: 'Air Permeability Tester', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Alcohol Analyzer', img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png' },
  { name: 'Anaerobic Jar', img: 'https://tse2.mm.bing.net/th/id/OIP.FfU-yRhZhya8mTZ3Vy7cegHaFz?pid=Api&P=0&h=180' },
  { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Particle Counter', img: 'https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180' },
  { name: 'Air Permeability Tester', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
   { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Alcohol Analyzer', img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png' },
  { name: 'Anaerobic Jar', img: 'https://tse2.mm.bing.net/th/id/OIP.FfU-yRhZhya8mTZ3Vy7cegHaFz?pid=Api&P=0&h=180' },
  { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Alcohol Analyzer', img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png' },
  { name: 'Anaerobic Jar', img: 'https://tse2.mm.bing.net/th/id/OIP.FfU-yRhZhya8mTZ3Vy7cegHaFz?pid=Api&P=0&h=180' },
   { name: 'Acid Steam Cleaning System', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Particle Counter', img: 'https://tse1.mm.bing.net/th/id/OIP.ZnFvjD5GmuKTRyulqKpWkgAAAA?pid=Api&P=0&h=180' },
  { name: 'Air Permeability Tester', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Air Sampler', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' }
];

export default function ProductGrid() {
  return (
    <section className="product-grid">
      <h2>Laboratory Equipment</h2>
      <p>We offer a wide selection of lab instruments for research & experiments.</p>

      <div className="grid-container">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

