import React from 'react';
import './home.css';
import FeaturedInfo from "../feature/featuredInfo";
import Chart from "../charts/charts";

export default function Home() {
  return <div className="home">
    <FeaturedInfo/>
    <Chart/>
  </div>
}