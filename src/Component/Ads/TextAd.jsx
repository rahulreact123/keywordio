import React from "react";
import Navbar from "../Reusable/Navbar";

const TextAd = () => {
  return (
    <div>
      <Navbar />
      <div className="text-ad-container">
        <div className="text-ads-box">
          <h5>Create Text & Media</h5>
          <div>
            <form action="">
              <div className="form-container">
                <div className="form-box">
                  <div className="left-box">
                    <div>
                      <label for="fname" className="label-bt">Heading 01</label>
                      <br />
                      <input type="text" id="fname" name="fname" value="" placeholder="Add a heading that would makes users interested" />
                    </div>
                    <div>
                      <label for="headingtwo" className="label-bt">Heading 02</label>
                      <br />
                      <input type="text" id="headingtwo" name="headingtwo" value="" />
                    </div>
                    <div>
                      <label for="Business" className="label-bt">Business Name</label>
                      <br />
                      <input type="text" id="Business" name="Business" value="" />
                    </div>

                  </div>
                  <div className="right-box">
                    <div>
                    <label for="desc" className="label-bt">Business Name</label>  <br />
                  <textarea name="desc" id="desc" className=""></textarea>
                    </div>
                    <div>
                    <label for="btnlable" className="label-bt">Button Label</label>
                      <br />
                      <input type="text" id="btnlable" name="btnlable" value="" />
                    </div>
                 
                  </div>
                </div>
                <div>box url</div>
              </div>
              <div>
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAd;
