import React from 'react';
import { LineChart } from 'recharts';

const ResultsChart = () => {
    const resultData = fetch('ResultsData.json')
    .then(res => res.json())

    console.log(resultData);
    return <div>
        <LineChart width={500} height={300}></LineChart>

    </div>;
};

export default ResultsChart;