import React from "react";
import Navbar from "../Reusable/Navbar";
import { Modal } from "@mui/material";
import success from "../../assest/success.png";
import { useNavigate } from "react-router-dom";

const MediaAd = () => {
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
      <div style={{border:"1px solid gray", margin: "20px", height: "auto" }}>
        <div
          style={{ background: "white", padding: "10px", borderRadius: "4px" }}
        >
          <h4>Create Text & Media</h4>
          <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <div className="form-wrapper">
                  <div className="left-form">
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
                  <div className="right-form">
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
                </div>
                <div className="middle-form-container">
                  <div>
                    <label htmlFor="Landscape" className="label-bt">
                      Landscape Marketing image (1.9.1)
                    </label>
                    <input
                      type="text"
                      id="Landscape"
                      name="Landscape"
                      value=""
                      placeholder="Add the URL of the image you want to use for the ad"
                    />
                  </div>
                  <div>
                    <label htmlFor="Portrait" className="label-bt">
                      Portrait Marketing Image (4:5)
                    </label>
                    <br />
                    <input
                      type="text"
                      id="Portrait"
                      name="Portrait"
                      value=""
                      placeholder="Add the URL of the image you want to use for the ad"
                    />
                  </div>
                  <div>
                    <label htmlFor="Square" className="label-bt">
                      Square Marketing Image (1:1)
                    </label>
                    <br />
                    <input
                      type="text"
                      id="Square"
                      name="Square"
                      value=""
                      placeholder="Add the URL of the image you want to use for the ad"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Video" className="label-bt">
                    Video URL
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Video"
                    name="Video"
                    value=""
                    placeholder="Add a heading that would makes users interested"
                  />
                </div>
                <div className="business-btn-label">
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
                      placeholder="Add your business Name"
                    />
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
                <div>
                  <label htmlFor=" Website URL" className="label-bt">
                    Website URL
                  </label>
                  <br />
                  <input
                    type="text"
                    id=" Website URL"
                    name=" Website URL"
                    value=""
                    placeholder="Add the URL of the landing page you want to redirect users to "
                  />
                </div>

                <div className="btn-containers">
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

export default MediaAd;
