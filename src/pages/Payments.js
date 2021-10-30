import React from "react";
import Layout from "../components/Layout";
import icon1 from "../assets/images/payments/dollar.svg";
import icon2 from "../assets/images/payments/clock.svg";
import icon3 from "../assets/images/payments/warning.svg";

const Payments = () => {
  return (
    <Layout>
      <div className="payments">
        <div className="payments-summary">
          <div className="summary-item active d-flex">
            <img src={icon1} alt="" />
            <div className="text">
              <p>Paid</p>
              <span>$134,023</span>
            </div>
          </div>
          <div className="summary-item d-flex">
            <img src={icon2} alt="" />
            <div className="text">
              <p>Pending</p>
              <span>$2,230</span>
            </div>
          </div>
          <div className="summary-item d-flex">
            <img src={icon3} alt="" />
            <div className="text">
              <p>Unpaid</p>
              <span>$1,660</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
