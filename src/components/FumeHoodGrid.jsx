import React from 'react';
import './FumeHoodGrid.css';

const fumeHoodProducts = [
  {
    name: 'Ducted Fume Hood LB-41DFH',
    img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-42DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-43DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ductless Fume Hood LB-20DLFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-10WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-11WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-12WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ductless Fume Hood LB-14DLFH',
    img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-10DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-11DFH',
    img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png'
  },
  {
    name: 'Ducted Fume Hood LB-12DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-41DFH',
    img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-42DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-43DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ductless Fume Hood LB-20DLFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-10WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-11WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Walk-in Fume Hood LB-12WFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.d-mmOkwpwsr3Mjkm9UPBRgHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ductless Fume Hood LB-14DLFH',
    img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-10DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-11DFH',
    img: 'https://labassociates.com/wp-content/uploads/2018/01/KERN-precision-balance-573-960x720.png'
  },
  {
    name: 'Ducted Fume Hood LB-12DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.ogGOB22pLTZRc-k9I2kgCAHaHa?pid=Api&P=0&h=180'
  },
  {
    name: 'Ductless Fume Hood LB-14DLFH',
    img: 'https://tse4.mm.bing.net/th/id/OIP.ysqxppmLMk8xe14qyLQ3DQAAAA?pid=Api&P=0&h=180'
  },
  {
    name: 'Ducted Fume Hood LB-13DFH',
    img: 'https://tse2.mm.bing.net/th/id/OIP.gFhKjNMOJlsF_ja1SArECQHaHa?pid=Api&P=0&h=180'
  }
];

export default function FumeHoodGrid() {
  return (
    <section className="fume-hood-section">
      <h2>Laboratory Fume Hood</h2>
      <div className="fume-hood-grid">
        {fumeHoodProducts.map((item, index) => (
          <div className="fume-card" key={index}>
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} />
            <button className="catalog-btn">Download Catalog</button>
          </div>
        ))}
      </div>
    </section>
  );
}
