import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  return (
    <>
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </>
  );
};

export default Chart;
