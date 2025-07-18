import React from 'react';
import './UniqueCategoryGrid.css';

const ovenItems = [
  { name: 'Blast Air Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Clean Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Commercial Microwave Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180' },
  { name: 'Constant Temperature Drying Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Electric Hot Air Drying Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180.jpg' },
  { name: 'Clean Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
   { name: 'Commercial Microwave Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180' },
  { name: 'Forced Air Drying Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180' }
];

const bathItems = [
  { name: 'Blast Air Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180' },
  { name: 'Clean Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Commercial Microwave Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180' },
  { name: 'Constant Temperature Drying Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
  { name: 'Electric Hot Air Drying Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180.jpg' },
  { name: 'Clean Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180' },
   { name: 'Commercial Microwave Oven', img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180' },
  { name: 'Forced Air Drying Oven', img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180' }
];

function SingleUniqueBlock({ title, items }) {
  return (
    <div className="custom-card-box">
      <div className="custom-card-header">
        <h3 className="custom-card-title">{title}</h3>
        <button className="custom-view-btn">View all</button>
      </div>
      <div className="custom-grid-wrap">
        {items.map((item, index) => (
          <div key={index} className="custom-grid-item">
            <img src={item.img} alt={item.name} className="custom-img" />
            <p className="custom-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UniqueCategoryGrid() {
  return (
    <div className="custom-category-wrapper">
      <SingleUniqueBlock title="Laboratory Oven" items={ovenItems} />
      <SingleUniqueBlock title="Bath and Circulator" items={bathItems} />
    </div>
  );
}
