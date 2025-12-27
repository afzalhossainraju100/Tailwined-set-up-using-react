import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar.jsx";
import NavbarCustom from "./component/navbar/NavbarCustom.jsx";
import ResultsChart from "./component/ResurtsChart/ResultsChart.jsx";
import PriceingOprion from "./component/prisingoption/PriceingOprion.jsx";
import { Suspense } from "react";

const pricingPromise = fetch("PriceingData.json").then((res) => res.json());

const resultsPromise = fetch("ResultsCharts.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        {/* <Navbar /> */}
        <NavbarCustom />
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <PriceingOprion pricingPromise={pricingPromise}></PriceingOprion>
        </Suspense>

        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <ResultsChart resultsPromise={resultsPromise}></ResultsChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
