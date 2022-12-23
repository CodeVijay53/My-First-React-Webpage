import React from "react";
import "../Css/ServiceStyle.css";
import Card from "./Card";
import Data from "./Data";

export default function Services() {
  return (
    <>
      <h1>Services Page</h1>
      <div className="services">
        {Data.map((values) => {
          return (
            <Card
              title1={values.Stitle}
              imgSource={values.imgsrc}
              desc1={values.desc}
              btnservice={values.btnService}
            />
          );
        })}
      </div>
    </>
  );
}
