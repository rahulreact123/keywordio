import React, { useState } from "react";
import Navbar from "../Reusable/Navbar";
import "./ads.css";
import { useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const navigator = useNavigate();

  const handleCheckboxChange = (value) => {
    setSelectedValue(value === selectedValue ? null : value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    if (selectedValue === "text") {
      navigator("/textad");
    } else if (selectedValue === "media") {
      navigator("/mediaad");
    }
  
  };
  return (
    <div>
      <Navbar />
      <div className="create-ad-container">
        <div className="create-ad-box">
          <h3 className="create-ad-heading">Create Ads</h3>
          <form>
            <div className="text-box-container">
              <div className="text-ad-box">
                <div style={{ padding: "10px" }}>
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    value="text"
                    checked={selectedValue === "text"}
                    onChange={() => handleCheckboxChange("text")}
                  />
                  <div className="skeleton"></div>
                </div>
                <div className="create-ad-bottom">
                  <small>Create</small>
                  <h4>Create Ad</h4>
                </div>
              </div>
              <div className="media-ad-box">
                <div style={{ padding: "10px", borderRadius: "12px" }}>
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    value="media"
                    checked={selectedValue === "media"}
                    onChange={() => handleCheckboxChange("media")}
                  />
                  <div className="skeleton"></div>
                </div>
                <div className="create-ad-bottom">
                  <small>Create</small>
                  <h4>Media Ad</h4>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button className="next-btn" type="submit" onClick={(e) => handlSubmit(e)}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
