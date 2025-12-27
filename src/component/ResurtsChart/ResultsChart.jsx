import React, { use } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ResultsChart = ({ resultsPromise }) => {
  const resultData = use(resultsPromise);

  return (
    // <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-900">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="text-center mb-8 md:mb-12">
    //       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
    //         Student Performance Results
    //       </h2>
    //       <p className="text-sm sm:text-base text-gray-400">
    //         Track academic progress across subjects
    //       </p>
    //     </div>

    //     <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
    //       <ResponsiveContainer width="100%" height={400}>
    //         <LineChart data={resultData}>
    //           <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
    //           <XAxis dataKey="name" stroke="#9CA3AF" />
    //           <YAxis stroke="#9CA3AF" />
    //           <Tooltip
    //             contentStyle={{
    //               backgroundColor: "#1F2937",
    //               border: "1px solid #374151",
    //             }}
    //             labelStyle={{ color: "#F3F4F6" }}
    //           />
    //           <Legend />
    //           <Line
    //             type="monotone"
    //             dataKey="physics"
    //             stroke="#3B82F6"
    //             strokeWidth={2}
    //           />
    //           <Line
    //             type="monotone"
    //             dataKey="chemistry"
    //             stroke="#10B981"
    //             strokeWidth={2}
    //           />
    //           <Line
    //             type="monotone"
    //             dataKey="mathematics"
    //             stroke="#F59E0B"
    //             strokeWidth={2}
    //           />
    //         </LineChart>
    //       </ResponsiveContainer>
    //     </div>
    //   </div>
    // </section>
    <div>
        <LineChart width={800} height={500} data={resultData}>
            <XAxis dataKey={name}></XAxis>
            <YAxis></YAxis>
        <Line type="monotone" dataKey="physics" 
        stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" 
        stroke="#82ca9d" />
        <Line type="monotone" dataKey="mathematics" 
        stroke="#ffc658" />
        <XAxis dataKey="name" />
        </LineChart>
    </div>
  );
};

export default ResultsChart;
