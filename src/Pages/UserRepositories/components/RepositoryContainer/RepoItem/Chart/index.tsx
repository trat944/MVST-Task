import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, TimeScale, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
import 'chartjs-adapter-date-fns';
import './chart.css'

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

/*
I wanted to implement Chart.js for making a chart with the commits of the repo. 
However, I don´t have access to fetch the commits of each repo. Just for showcasing
purposes I have done a static chart with mock data.
*/
export const Chart = () => {
  const data = {
    labels: [
      '2023-06-01',
      '2023-06-02',
      '2023-06-03',
      '2023-06-04',
      '2023-06-05',
      '2023-06-06',
      '2023-06-07',
    ],
    datasets: [
      {
        label: 'Commits',
        data: [10, 20, 15, 25, 30, 35, 40],
        fill: false,
        borderColor: '#238636',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'day' as const,
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false, 
        },
        grid: {
          display: false, 
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='chart-contain'>
      <Line data={data} options={options} />
    </div>
  );
};
