import * as React from "react";
import S from "./RadioCheck.module.scss";
import { useEffect, useState } from "react";

const RadioCheck = ({ name, setDataStroke, id, value }) => {
  const [values, setValue] = useState(0);
  useEffect(() => {
    const data = localStorage.getItem("data");
  });

  return (
    <div
      className={`${S.body} ${value === 0 && S.colorGrey} ${
        value === 1 && S.colorRed
      } ${value === 2 && S.colorGreen}`}
    >
      <div
        className={`${S.circle}  ${value === 0 && S.circleGrey} ${
          value === 1 && S.circleRed
        } ${value === 2 && S.circleGreen}`}
      ></div>
      <div
        className={`${S.left} ${S.check}`}
        onClick={() => {
          setDataStroke(id, name, 1);
          setValue(1);
        }}
      ></div>
      <div
        className={`${S.center} ${S.check} `}
        onClick={() => {
          setDataStroke(id, name, 0);
          setValue(0);
        }}
      ></div>
      <div
        className={`${S.right} ${S.check}`}
        onClick={() => {
          setDataStroke(id, name, 2);
          setValue(2);
        }}
      ></div>
    </div>
  );
};

export default RadioCheck;
