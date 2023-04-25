import * as React from "react";
import S from "./Table.module.scss";
import Stroke from "./stroke/Stroke";
import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Table = () => {
  const [data, setData] = useLocalStorage([], "data");
  const [valueInput, setValueInput] = useState("");
  const [count, setCount] = useState(0);
  const [countSuccess, setCountSuccess] = useState(0);
  useEffect(() => {
    let count = 0;
    let countSucces = 0;
    data.forEach((el) => {
      if (el.internet !== 0) {
        count += 1;
      }
      if (el.internet === 2) {
        countSucces += 1;
      }
      if (el.tv !== 0) {
        count += 1;
      }
      if (el.tv === 2) {
        countSucces += 1;
      }
      if (el.tel !== 0) {
        count += 1;
      }
      if (el.tel === 2) {
        countSucces += 1;
      }
    });
    setCount(count);
    setCountSuccess(countSucces);
  }, [data]);
  const handlerInput = (e) => {
    setValueInput(e.target.value);
  };

  const configData = (id, type, setType) => {
    const newData = data.map((el) => {
      if (el.ID === id) {
        return { ...el, [type]: setType };
      }
      return el;
    });
    setData(newData);
  };

  const setCommentValue = (id, value) => {
    const newData = data.map((el) => {
      if (el.ID === id) {
        return { ...el, comment: value };
      }
      return el;
    });
    setData(newData);
  };
  return (
    <div className={S.body}>
      <div className={S.stat}>
        Статистика всего услуг {count} удерженно {countSuccess} общий %
        {isNaN((countSuccess * 100) / count)
          ? ""
          : (countSuccess * 100) / count}
      </div>
      <HeaderTable />
      <div className={S.bodyTable}>
        {data &&
          data.map((el) => (
            <Stroke
              key={el.ID}
              el={el}
              configData={configData}
              setCommentValue={setCommentValue}
            />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData(
            [
              ...data,
              {
                ID: Math.random(),
                id: valueInput,
                internet: 0,
                tv: 0,
                tel: 0,
                comment: "",
              },
            ],
            "data"
          );

          setValueInput("");
        }}
      >
        <input
          className={S.inputAdd}
          onInput={handlerInput}
          type="text"
          value={valueInput}
          placeholder={"введи ID"}
        />
      </form>
    </div>
  );
};

export default Table;

const HeaderTable = () => {
  return (
    <div className={S.headerBody}>
      <div>ID</div>
      <div>ШПД</div>
      <div>ИТВ</div>
      <div>ОТА</div>
      <div>Коментарий</div>
    </div>
  );
};
