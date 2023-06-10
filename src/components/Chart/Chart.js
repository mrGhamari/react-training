import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint, index) => (
          <ChartBar
            key={index}
            value={dataPoint.value}
            maxValue={100}
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
