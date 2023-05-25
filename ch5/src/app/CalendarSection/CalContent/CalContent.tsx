import React from "react";
import "./CalContent.scss";
import calender from "../../../assets/calendar-stats.svg";
import discount from "../../../assets/discount-2.svg";
import reg from "../../../assets/checkup-list.svg";
import tag from "../../../assets/tags.svg";

export interface iItem {
  item: {
    id?: number;
    title?: string;
    subTitle?: string;
    subTitle2?: string;
    tag?: boolean;
    days?: string;
    hours?: string | number;
    mins?: number;
    sec?: number;
    date?: string;
    discount?: number;
    reg?: string;
    SFP?: number;
  };
}

const CalContent: React.FC<iItem> = ({ item }) => {
  return (
    <div className="calContent">
      {/* left/ calender section */}
      <div className="cal-left">
        <div className="boxes">
          <div className="eachBox">
            <div className="upperBox">
              <span className="boxNumber">
                {item.days ? item.days : item.hours}
              </span>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
            </div>
            <span>{item.days ? "Days" : "Hours"}</span>
          </div>
          :
          <div className="eachBox">
            <div className="upperBox">
              <span className="boxNumber">
                {item.days ? item.hours : item.mins}
              </span>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
            </div>
            <span>{item.days ? "Hours" : "Mins"}</span>
          </div>
          :
          <div className="eachBox">
            <div className="upperBox">
              <span className="boxNumber">
                {item.days ? item.mins : item.sec}
              </span>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
              <div className={`miniBox ${item.tag ? "blue" : "orange"}`}>
                &nbsp;
              </div>
            </div>
            <span>{item.days ? "Mins" : "Sec"}</span>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="cal-right">
        <div className="upper">
          <img src={calender} alt="" />
          <div>{item.date}</div>
          <img src={discount} alt="" />
          <div>Voucher discount: {item.discount}</div>
          <img src={reg} alt="" />
          <div>Registration until: {item.reg}</div>
          <img src={tag} alt="" />
          <div>Seller funded portion: {item.SFP}% out of the discount</div>
        </div>
        <div className="lower">
          <div>
            Sellers: &nbsp;
            <span>0</span>
          </div>
          <div>
            Products: &nbsp;
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalContent;
