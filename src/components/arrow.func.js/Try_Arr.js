import React, { useState } from "react";
import "./ary_ty.css";

const Try_Arr = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 100);

  return (
    <div className="dg_time">
      <span>{time}</span>
    </div>
  );
};

export default Try_Arr;
