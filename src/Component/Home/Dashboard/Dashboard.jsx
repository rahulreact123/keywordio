import React, { useState } from "react";
import "./dashboard.css";
import jsondatas from "../../../data.json";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const Dashboard = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const [userData, setUserData] = useState(jsondatas);

  const handleCostSort = () =>{
    const sortedData = [...userData].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.cost - b.cost;
        } else {
          return b.cost - a.cost;
        }
      });
      setUserData(sortedData);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  }

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
            <th style={{ cursor: "pointer" }}>
              Conversions <UnfoldMoreIcon className="up" />
            </th>
            <th style={{ cursor: "pointer" }}>
              Revenue <UnfoldMoreIcon className="up" />
            </th>
          </tr>
          {userData?.map((data, ind) => {
            return (
              <tr key={ind}>
                <td>{data?.campaigns}</td>
                <td>{data?.clicks}</td>
                <td>{data?.cost}</td>
                <td>{data?.conversions}</td>
                <td>{data?.Revenue}</td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>
            <td>26510</td>
            <td>USD 1363663</td>
            <td>4768</td>
            <td>USD 1363663</td>
          </tr>
        </table>
      </div>

      <div className="chart-container">Donout chart</div>
    </div>
  );
};

export default Dashboard;
