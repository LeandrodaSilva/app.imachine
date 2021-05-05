import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface PieProps {
  options?: ApexOptions;
  series?: Array<number>;
  labels?: Array<string>;
}

function Pie(props: PieProps) {
  const { series = [13, 3] } = props;

  return (
    <div className="pie">
      <Chart
        options={{
          colors: ["#009902", "#ff9900"],
          labels: ["Normal", "Alerta"],
          legend: {
            show: false,
          },
        }}
        series={series}
        type="pie"
        width="300"
      />
    </div>
  );
}

export default Pie;
