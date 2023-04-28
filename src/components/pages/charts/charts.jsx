import React from 'react';
import './chart.css';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: 'Jan',
      'Active User': 4490,
    },
    {
      name: 'Feb',
      'Active User': 3000,
    },
    {
      name: 'Mar',
      'Active User': 2000,
    },
    {
      name: 'Apr',
      'Active User': 2780,
    },
    {
      name: 'May',
      'Active User': 1890,
    },
    {
      name: 'Jun',
      'Active User': 2390,
    },
    {
      name: 'Jul',
      'Active User': 3490,
    },
    {
      name: 'Aug',
      'Active User': 4490,
    },
    {
      name: 'Sep',
      'Active User': 4490,
    }
  ]
  return (
      <div className="chart">
        <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User"/>
            <Tooltip/>
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}