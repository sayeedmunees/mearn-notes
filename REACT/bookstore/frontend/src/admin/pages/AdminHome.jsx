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
          <div className="md:grid grid-cols-2 gap-2 mt-4">
            <BarChart
              style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "70vh",
                aspectRatio: 1.618,
              }}
              responsive
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminHome;
