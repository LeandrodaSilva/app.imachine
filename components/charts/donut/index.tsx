import Chart from "react-apexcharts";

interface DonutProps {
  options?: object;
  series?: Array<number>;
  labels?: Array<string>;
}

function Donut(props: DonutProps) {
  const {
    options = {},
    series = [44, 55, 41, 17, 15],
    labels = ["A", "B", "C", "D", "E"],
  } = props;

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
}

export default Donut;
