import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { GraphBarChartStyled, GraphContainerStyled, GraphHeaderLegend, GraphHeaderStyled, GraphHeaderTitle } from "./GraphStyled";

const data = [
  { name: "Monday", checkIn: 55 },
  { name: "Tuesday", checkIn: 36 },
  { name: "Wednesday", checkIn: 14 },
  { name: "Thursday", checkIn: 48 },
  { name: "Friday", checkIn: 40 },
  { name: "Saturday", checkIn: 50 },
  { name: "Sunday", checkIn: 22 },
];

const totalCheckIns = data.reduce((total, day) => total + day.checkIn, 0);
const percentageChange = "+0.4%";

export const Graph = () => {
  return (
    <GraphContainerStyled>
      <GraphHeaderStyled>
        <GraphHeaderTitle>
          <p>Reservation Stats</p>
        </GraphHeaderTitle>
        <GraphHeaderLegend>
          <h3>Check In</h3>
          <div>
            <span>{totalCheckIns.toLocaleString()}</span>
            <span>{` ${percentageChange}`}</span>
          </div>
        </GraphHeaderLegend>
      </GraphHeaderStyled>
      <GraphBarChartStyled>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ticks={[0, 10, 20, 30, 40, 50, 60]} domain={[0, 60]} />
            <Tooltip />
            <Bar dataKey="checkIn" fill="#135846" />
          </BarChart>
        </ResponsiveContainer>
      </GraphBarChartStyled>
    </GraphContainerStyled>
  );
};