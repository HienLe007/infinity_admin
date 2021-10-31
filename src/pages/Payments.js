import React from "react";
import Layout from "../components/Layout";
import icon1 from "../assets/images/payments/dollar.svg";
import icon2 from "../assets/images/payments/clock.svg";
import icon3 from "../assets/images/payments/warning.svg";
import { payments } from "../constants";

import searchIcon from "../assets/images/search.svg";

import paidIcon from "../assets/images/status/white-check.svg";
import unpaidIcon from "../assets/images/status/exclamation.svg";
import pendingIcon from "../assets/images/status/help.svg";

import claimedIcon from "../assets/images/status/check.svg";
import unClaimedIcon from "../assets/images/status/not_allowed.svg";

import leftArrowImg from "../assets/images/left-arrow.svg";
import rightArrowImg from "../assets/images/right-arrow.svg";

const sortOptions = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 }
]

const Payments = () => {
  const renderDestination = (item) => {
    switch(item) {
      case 1:
        return 'perfect';
      case 2:
        return 'error';
      case 3:
        return 'hold on';
      default:
        return '';
    }
  };

  const renderPaymentStatusClass = (item) => {
    switch(item) {
      case 1:
        return 'paid';
      case 2:
        return 'unpaid';
      case 3:
        return 'pending';
      default:
        return '';
    }
  };

  const renderPaymentStatus = (item) => {
    switch(item) {
      case 1:
        return (
          <div className="d-flex status-inner">
            <img src={paidIcon} alt="" />
            <span>Paid</span>
          </div>
        );
      case 2:
        return (
          <div className="d-flex status-inner">
            <img src={unpaidIcon} alt="" />
            <span>Unpaid</span>
          </div>
        );
      case 3:
        return (
          <div className="d-flex status-inner">
            <img src={pendingIcon} alt="" />
            <span>Pending</span>
          </div>
        );
      default:
        return '';
    }
  };

  const renderClaimStatusClass = (item) => {
    switch(item) {
      case 1:
        return 'claimed';
      case 2:
        return 'unclaimed';
      default:
        return '';
    } 
  };

  const renderClaimStatus = (item) => {
    switch(item) {
      case 1:
        return (
          <div className="d-flex status-inner">
            <img src={claimedIcon} alt="" />
            <span>Claimed</span>
          </div>
        );
      case 2:
        return (
          <div className="d-flex status-inner">
            <img src={unClaimedIcon} alt="" />
            <span>Unclaimed</span>
          </div>
        );
      default:
        return '';
    }
  }

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
        <div className="payments-list">
          <div className="table-functions d-flex">
            <div className="search-input">
              <input type="text" placeholder="Search scholar here..." />
              <img src={searchIcon} alt="" />
            </div>
            <div className="other-functions d-flex">
              <div>
                <select placeholder="Sort By">
                  <option value="">Sort By</option>
                  {sortOptions.map((option, index) => (
                    <option value={option.value} key={index}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="action-link">
                <button className="primary-btn">PAY SCHOLARS</button>
              </div>
            </div>
          </div>
          <div className="custom-table">
            <div className="custom-table-header d-flex">
              <div className="name">Name</div>
              <div className="claim_status">Claim Status</div>
              <div className="account_total">Account Total</div>
              <div className="scholar_share">Scholar Share</div>
              <div className="manager_share">Manager Share</div>
              <div className="payment_status">Payment Status</div>
              <div className="destimation_match">Destination Match</div>
            </div>
            <div className="custom-table-content">
              {payments.map(payment => (
                <div className="custom-table-item d-flex" key={payment.id}>
                  <div className="name">{payment.name}</div>
                  <div className={`claim_status ` + renderClaimStatusClass(payment.claim_status)}>{renderClaimStatus(payment.claim_status)}</div>
                  <div className="account_total">{payment.account_total} SLP</div>
                  <div className="scholar_share">{payment.scholar_share} SLP</div>
                  <div className="manager_share">{payment.manager_share} SLP</div>
                  <div className={`payment_status ` + renderPaymentStatusClass(payment.payment_status)}>{renderPaymentStatus(payment.payment_status)}</div>
                  <div className={`destimation_match ` + renderDestination(payment.destimation_match)}>{renderDestination(payment.destimation_match)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="custom-pagination d-flex">
            <div className="indicator">
              <p>Showing <span>1-5</span> from <span>100</span> data</p>
            </div>
            <div className="paginations d-flex">
              <img src={leftArrowImg} alt="" className="prev-page" />
              <div className="pagination-item active">1</div>
              <div className="pagination-item">2</div>
              <div className="pagination-item">3</div>
              <img src={rightArrowImg} alt="" className="next-page" />
            </div>
          </div>      
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
