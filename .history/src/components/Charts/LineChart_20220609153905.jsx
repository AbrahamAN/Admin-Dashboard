import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  linePrimaryYAxis,
  linePrimaryXAxis,
} from "../../data/dummy";

const LineChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={linePrimaryXAxis}
      primaryYAxis={linePrimaryYAxis}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
