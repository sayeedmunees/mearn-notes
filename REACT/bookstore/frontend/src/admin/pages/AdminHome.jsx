import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { faBook, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminHome = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-950 rounded-tr-2xl rounded-br-2xl mb-1 -mt-1 py-4 flex flex-col items-center min-h-[55vh]">
          <AdminSidebar />
        </div>
        <div>
          <div className="flex gap-2 justify-around mt-4">
            <div className="flex gap-2  items-center px-6 py-4 bg-green-950 text-white rounded-xl h-fit">
              <FontAwesomeIcon className="text-4xl" icon={faBook} />
              <p className="flex flex-col text-center">
                Total Number of Books{" "}
                <span className="font-bold text-xl">100+</span>
              </p>
            </div>

            <div className="flex gap-2 items-center px-6 py-4 bg-blue-950 text-white rounded-xl h-fit">
              <FontAwesomeIcon className="text-4xl" icon={faUsers} />
              <p className="flex flex-col text-center">
                Total Number of Users{" "}
                <span className="font-bold text-xl">100+</span>
              </p>
            </div>

            <div className="flex gap-2  items-center px-6 py-4 bg-amber-700 text-white rounded-xl h-fit">
              <FontAwesomeIcon className="text-4xl" icon={faUserTie} />
              <p className="flex flex-col text-center">
                Total Number of Employees{" "}
                <span className="font-bold text-xl">100+</span>
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-2 m-4 px-2">
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
               
                {/*make the bar chart responsive*/}
                <BarChart data={data}>
                  
                  {/*Indicates the chart - data - attribute hold the data to displayed*/}
                  <CartesianGrid strokeDasharray="3 3" />
                  {/*grid dash - 3px 3px gap*/}
                  <XAxis dataKey="name" /> {/*represnets x axis*/}
                  <YAxis width="auto" /> {/*represnets y axis*/}
                  <Tooltip /> {/*indicate data*/}
                  <Legend /> {/*denotes the bar representation*/}
                  <Bar dataKey="pv" fill="#004eff" />
                  {/*It represents the bar in bar chart with the given fill color*/}
                  <Bar dataKey="uv" fill="#032e15" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                {/*make the bar chart responsive*/}
                <PieChart margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#004eaa"
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#032e15"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminHome;
