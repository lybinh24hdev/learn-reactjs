import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValueDataPoint = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValueDataPoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
