import React, { useState } from "react";
import Semester2Data from "./Semester2Data";
import Navbar from "../../components/Navbar";

function Semester2() {

  return (
    <div className="semester-2">
    <Navbar />
    <section className="index">
      {Semester2Data.map((item, index) => {
        return (
          <div key={index} className={item.className}>
            <div className="title">{item.title}</div>
          </div>
        );
      })}
      </section>
    </div>
    
  );
}

export default Semester2;