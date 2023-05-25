import React from "react";
import "./CalendarSection.scss";
import Data from "./Data.calendarSection.json";
// import SwiperSection from "./Swiper";
import CalContent from "./CalContent/CalContent";
import tagNew from "../../assets/tag.png";

const CalendarSection = () => {
  // return <SwiperSection />;

  return (
    <div className="superContainer">
      {Data?.data.map((item) => {
        return (
          <div className="calenderWrap">
            {/* title */}
            <div className="cal-title">
              <span>{item.title}</span>
              <span>{item.subTitle}</span>
              <span>{item.subTitle2}</span>
              <span className="img">
                {item.tag ? <img src={tagNew} alt="" /> : ""}
              </span>
            </div>
            {/* content */}
            <CalContent item={item} />
            {/* button */}
            <div className="btn">Join the Promotion</div>
            {/* footer */}
            <div className="cal-footer">
              <div className="approve">
                Approved deals
                <span>1</span>
              </div>
              <div className="pending">
                Pending deals
                <span>-</span>
              </div>
              <div className="rejected">
                Rejected deals
                <span>-</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarSection;
