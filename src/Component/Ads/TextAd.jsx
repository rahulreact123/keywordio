import React, { useEffect } from "react";
import Navbar from "../Reusable/Navbar";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import success from "../../assest/success.png";

const TextAd = () => {
  const navigator = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    const timeoutId = setTimeout(() => {
      navigator("/createads");
    }, 600);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div>
      <Navbar />
      <div className="text-ad-container">
        <div className="text-ads-box">
          <h5>Create Text & Media</h5>
          <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-container">
                <div className="form-box">
                  <div className="left-box">
                    <div>
                      <label htmlFor="fname" className="label-bt">
                        Heading 01
                      </label>
                      <br />
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        value=""
                        placeholder="Add a heading that would makes users interested"
                      />
                    </div>
                    <div>
                      <label htmlFor="headingtwo" className="label-bt">
                        Heading 02
                      </label>
                      <br />
                      <input
                        type="text"
                        id="headingtwo"
                        name="headingtwo"
                        value=""
                        placeholder="Add a heading that would makes users interested"
                      />
                    </div>
                    <div>
                      <label htmlFor="Business" className="label-bt">
                        Business Name
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Business"
                        name="Business"
                        value=""
                        placeholder="Add your business name"
                      />
                    </div>
                  </div>
                  <div className="right-box">
                    <div>
                      <label htmlFor="desc" className="label-bt">
                        Description 01
                      </label>{" "}
                      <br />
                      <textarea
                        name="desc"
                        id="desc"
                        className=""
                        placeholder="Add primary text to help users understand more about products, service for offers"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="btnlable" className="label-bt">
                        Button Label
                      </label>
                      <br />
                      <select
                        name="btnlable"
                        id="btnlabel-select"
                        placeholder="helo"
                      >
                        <option value="" hidden>
                          Select a lable that best suits for your add
                        </option>
                        <option value="">lorem</option>
                        <option value="">lorem</option>
                        <option value="">ipsum</option>
                        <option value="">lorem</option>
                        <option value="">ipsum</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label htmlFor="btnlable" className="label-bt">
                    Website URL
                  </label>
                  <br />
                  <input
                    type="text"
                    id="btnlable"
                    name="btnlable"
                    value=""
                    placeholder="Add the URL of the landing page you want to redirect users to"
                  />
                </div>
              </div>
              <div className="btn-container">
                <div
                  className="back-btn"
                  onClick={() => navigator("/createads")}
                >
                  Back
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-open"
      >
        <div className="modal-show">
          <img src={success} alt="success" style={{ width: "30px" }} />
          <p className="submitted">Submitted</p>
        </div>
      </Modal>
    </div>
  );
};

export default TextAd;
