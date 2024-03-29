// App.js

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
  {
    name: "Computer Science",
    faculty: 11,
    proposals: 120,
  },
  {
    name: "Civil Engineering",
    faculty: 15,
    proposals: 12,
  },
  {
    name: "Geological",
    faculty: 5,
    proposals: 10,
  },
  {
    name: "Psychology",
    faculty: 10,
    proposals: 5,
  },
  {
    name: "Applied Sciences",
    faculty: 9,
    proposals: 4,
  },
  {
    name: "Humanities",
    faculty: 10,
    proposals: 8,
  },
];

function Dashboard() {
  return (
    <>
      <h1 className="text-heading flex  text-red-600 items-center ">
        Data analysis of Proposals
      </h1>
      <ResponsiveContainer width="100%" aspect={3} className={"mt-40"}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="faculty" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="proposals" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Dashboard;
