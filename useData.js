import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/Rishika10121/Activity6_Population/refs/heads/main/Activity7_Population.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 30));
    });
  }, []);

  return data;
};
