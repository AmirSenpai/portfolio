import React from "react";
import timeline from "../data/timelinedata";
import TimelineItem from "./TimelineItem";

function TimelineMain() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 ">
      <div className="w-full md:w-7/12">
        {timeline.map(item => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineMain;
