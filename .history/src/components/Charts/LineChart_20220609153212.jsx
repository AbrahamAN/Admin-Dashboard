import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSerie,
  linePrimaryYAxis,
  linePrimaryXAxis,
} from "../../data/dummy";

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    </ChartComponent>
  );
};

export default LineChart;
