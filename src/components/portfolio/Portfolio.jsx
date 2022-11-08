import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";


export default function Portfolio() {
  const [selected,setSelected] = useState("quote");
  const [data,setData] = useState([]);
  const list = [
    
  ];


  return (
    <div className="portfolio" id="portfolio">
      <h2>Quote</h2>
      <ul>
      </ul>
      <div className="container">
        <img src="assets/thurgoodmarshall.jpeg" alt="" />
      </div>
      <h1>"We will only attain freedom if we learn to appreciate what is different and muster the courage to discover what is fundamentally the same"</h1>
    </div>
  )
}
