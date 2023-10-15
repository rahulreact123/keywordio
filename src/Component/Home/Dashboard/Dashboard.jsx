import React, { useState, useEffect } from "react";
import "./dashboard.css";
import jsondatas from "../../../data.json";
import chartData from "../../../chart.json";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
Chart.register(ArcElement);

const Dashboard = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [showData, setShowData] = useState(1);
  const [userData, setUserData] = useState(jsondatas);
  const [groupData, setGroupData] = useState(chartData);
  const [showColor, setShowColor] = useState(false);
  const [showColor2, setShowColor2] = useState(false);

  const [data, setData] = useState({
    labels: ["Male", "Female", "Unknown"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: ["#FFA500", "#0000FF", "#000"],
        borderWidth: 1,
      },
    ],
  });
  const options = {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
    },
  };

  // const calculatePercentages = () => {
  //   const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
  //   const percentages = data.datasets[0].data.map((value) =>
  //     ((value / total) * 100).toFixed(2)
  //   );
  //   return percentages;
  // };

  const updateChartData = (metric) => {
    if (metric === "Clicks") {
      const malePercentage = ((348 / 1145) * 100).toFixed(2);
      const femalePercentage = ((692 / 1145) * 100).toFixed(2);
      const unknownPercentage = ((105 / 1145) * 100).toFixed(2);

      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: [malePercentage, femalePercentage, unknownPercentage],
          },
        ],
      });
    } else if (metric === "Cost") {
      const malePercentage = ((12528 / 41383) * 100).toFixed(2);
      const femalePercentage = ((24912 / 41383) * 100).toFixed(2);
      const unknownPercentage = ((3943 / 41383) * 100).toFixed(2);
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: [malePercentage, femalePercentage, unknownPercentage],
          },
        ],
      });
    } else if (metric === "Conversions") {
      const malePercentage = ((42 / 80) * 100).toFixed(2);
      const femalePercentage = ((35 / 80) * 100).toFixed(2);
      const unknownPercentage = ((3 / 80) * 100).toFixed(2);
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: [malePercentage, femalePercentage, unknownPercentage],
          },
        ],
      });
    } else if (metric === "Revenue") {
      const malePercentage = ((62118 / 71782) * 100).toFixed(2);
      const femalePercentage = ((5175 / 71782) * 100).toFixed(2);
      const unknownPercentage = ((4489 / 71782) * 100).toFixed(2);
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: [malePercentage, femalePercentage, unknownPercentage],
          },
        ],
      });
    }
  };

  const handleCostSort = () => {
    const sortedData = [...userData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.cost - b.cost;
      } else {
        return b.cost - a.cost;
      }
    });
    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSort = () => {
    const sortedData = [...userData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.clicks - b.clicks;
      } else {
        return b.clicks - a.clicks;
      }
    });
    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortName = () => {
    const sortedData = [...userData].sort((a, b) => {
      const campaignA = a.campaigns.toLowerCase();
      const campaignB = b.campaigns.toLowerCase();

      if (sortOrder === "asc") {
        if (campaignA < campaignB) return -1;
        if (campaignA > campaignB) return 1;
        return 0;
      } else {
        if (campaignA > campaignB) return -1;
        if (campaignA < campaignB) return 1;
        return 0;
      }
    });
    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleConversion = () => {
    const sortedData = [...userData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.conversions - b.conversions;
      } else {
        return b.conversions - a.conversions;
      }
    });
    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const hanleRevnue = () => {
    const sortedData = [...userData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Revenue - b.Revenue;
      } else {
        return b.Revenue - a.Revenue;
      }
    });
    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  

  

  useEffect(() => {
    updateChartData("Clicks");
  }, []);

  return (
    <div className="dashboard-container">
      <div className="table_container">
        <table>
          <tr className="sts">
            <th>Ad Insights</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr className="t-heading">
            <th className="" onClick={handleSortName}>
              <span>Campaigns</span> <UnfoldMoreIcon className="up" />
            </th>
            <th style={{ cursor: "pointer" }} onClick={handleSort}>
              Clicks <UnfoldMoreIcon className="up" />
            </th>
            <th style={{ cursor: "pointer" }} onClick={handleCostSort}>
              Cost <UnfoldMoreIcon className="up" />
            </th>
            <th style={{ cursor: "pointer" }} onClick={handleConversion}>
              Conversions <UnfoldMoreIcon className="up" />
            </th>
            <th style={{ cursor: "pointer" }} onClick={hanleRevnue}>
              Revenue <UnfoldMoreIcon className="up" />
            </th>
          </tr>
          {userData?.map((data, ind) => {
            return (
              <tr key={ind}>
                <td>{data?.campaigns || ""}</td>
                <td>{data?.clicks?.toLocaleString() || ""}</td>
                <td><span>USD</span> {data?.cost?.toLocaleString() || ""}</td>
                <td>{data?.conversions || ""}</td>
                <td><span>USD</span> {data?.Revenue.toLocaleString() || ""}</td>
              </tr>
            );
          })}
          <tr style={{backgroundColor:"whitesmoke"}}>
            <td>Total</td>
            <td>21,232</td>
            <td>USD 143,819</td>
            <td>489</td>
            <td>USD 1,455,274</td>
          </tr>
        </table>
      </div>

      <div className="chart-container">
        {showData === 1 && (
          <div>
            <div className="chart-heading-container">
              <h4>Ad Insights</h4>
              <div>
                <select
                  name="cars"
                  id="cars"
                  onChange={(e) => updateChartData(e.target.value)}
                >
                  <option value="Clicks">Clicks</option>
                  <option value="Cost">Cost</option>
                  <option value="Conversions">Conversions</option>
                  <option value="Revenue">Revenue</option>
                </select>
              </div>
            </div>
            <div className="donut-container">
              <div className="donut-chart">
                <Doughnut data={data} options={options} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  color: "gray",
                }}
              >
                <p className="data">
                  <div className="color-data male"></div>
                  <span>{data.datasets[0].data[0]}% Male</span>
                </p>
                <p className="data">
                  <div className="color-data female"></div>
                  <span>{data.datasets[0].data[1]}% Female</span>
                </p>
                <p className="data">
                  <div className="color-data unknown"></div>
                  <span>{data.datasets[0].data[2]}% Unknown</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {showData === 2 && (
          <div>
            <div className="table_container">
              <table>
                <tr className="sts">
                  <th>Ad Insights</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr className="t-heading">
                  <th className="">
                    <span>Group</span> <UnfoldMoreIcon className="up" />
                  </th>
                  <th style={{ cursor: "pointer" }}>
                    Clicks <UnfoldMoreIcon className="up" />
                  </th>
                  <th style={{ cursor: "pointer" }} >
                    Cost <UnfoldMoreIcon className="up" />
                  </th>
                  <th style={{ cursor: "pointer" }}>
                    Conversions <UnfoldMoreIcon className="up" />
                  </th>
                  <th style={{ cursor: "pointer" }}>
                    Revenue <UnfoldMoreIcon className="up" />
                  </th>
                </tr>
                {groupData?.map((data, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{data?.group}</td>
                      <td>{data?.clicks?.toLocaleString()}</td>
                      <td>
                        <span>USD</span> {data?.cost?.toLocaleString() }
                      </td>
                      <td>{data?.conversions}</td>
                      <td>
                        <span>USD</span> {data?.Revenue?.toLocaleString() }
                      </td>
                    </tr>
                  );
                })}
                <tr style={{backgroundColor:"whitesmoke"}}>
                  <td>Total</td>
                  <td>1,145</td>
                  <td>USD 41,383</td>
                  <td>80</td>
                  <td>USD 71,782</td>
                </tr>
              </table>
            </div>
          </div>
        )}

        <div className="toggle-btn">
          <div className="toggle-styling">
            <DonutLargeIcon
              className={`donut-icon ${showData === 1 ? "active" : ""}`}
              onClick={() => {
                setShowData(1);
                setShowColor(true); 
                setShowColor2(false); 
              }}
            />
            <BackupTableIcon
              className={`backup-table-icon ${showData === 2 ? "active" : ""}`}
              onClick={() => {
                setShowData(2);
                setShowColor(false); 
                setShowColor2(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
