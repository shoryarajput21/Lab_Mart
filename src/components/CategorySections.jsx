import React from 'react';
import './CategorySections.css';

const ovenProducts = [
  { name: 'Blast Air Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/blast-air-oven-600x600.jpg' },
  { name: 'Clean Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/clean-oven-600x600.jpg' },
  { name: 'Commercial Microwave Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/commercial-microwave-oven-600x600.jpg' },
  { name: 'Constant Temperature Drying Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/constant-temp-drying-oven-600x600.jpg' },
  { name: 'Electric Hot Air Drying Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/electric-hot-air-drying-oven-600x600.jpg' },
  { name: 'Forced Air Drying Oven', img: 'https://www.labotronics.com/image/cache/catalog/products/forced-air-drying-oven-600x600.jpg' }
];

const bathProducts = [
  { name: 'Cold Trap Bath', img: 'https://www.labotronics.com/image/cache/catalog/products/cold-trap-bath-600x600.jpg' },
  { name: 'Constant Temperature Circulating Water bath', img: 'https://www.labotronics.com/image/cache/catalog/products/constant-temp-circulating-bath-600x600.jpg' },
  { name: 'Evaporation Loss Test Bath', img: 'https://www.labotronics.com/image/cache/catalog/products/evaporation-loss-test-bath-600x600.jpg' },
  { name: 'Heated Circulating Water Bath', img: 'https://www.labotronics.com/image/cache/catalog/products/heated-circulating-water-bath-600x600.jpg' },
  { name: 'Kinematic Viscosity Bath', img: 'https://www.labotronics.com/image/cache/catalog/products/kinematic-viscosity-bath-600x600.jpg' },
  { name: 'Low Temperature Water bath', img: 'https://www.labotronics.com/image/cache/catalog/products/low-temp-water-bath-600x600.jpg' }
];

function Category({ title, products }) {
  return (
    <div className="category-card">
      <div className="category-header">
        <h3>{title}</h3>
        <button className="view-all">View all</button>
      </div>
      <div className="product-grid">
        {products.map((item, idx) => (
          <div className="product-card" key={idx}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategorySections() {
  return (
    <section className="category-section">
      <Category title="Laboratory Oven" products={ovenProducts} />
      <Category title="Bath and Circulator" products={bathProducts} />
    </section>
  );
}
