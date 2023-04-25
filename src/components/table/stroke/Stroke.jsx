import * as React from "react";
import { useState } from "react";
import S from "./Stroke.module.scss";
import RadioCheck from "../../../UI/RadioCheck/RadioCheck";
import { ReactComponent as Copy } from "../../../accets/img/icons/copy.svg";
import { ReactComponent as Pen } from "../../../accets/img/icons/pen.svg";
import { CommentWindow } from "./CommentWindow/CommentWindow";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const Stroke = ({ el, configData, setCommentValue }) => {
  const [valueID, setValueID] = useState(el.id);
  const [commentInput, setCommentInput] = useState(el.comment);
  const [viewCopyID, setViewCopyID] = useState(false);
  const [viewComment, setViewComment] = useState(false);
  const [viewCommentIcon, setViewCommentIcon] = useState(false);
  const inputCommentHandler = (e) => {
    setCommentInput(e.target.value);
  };

  return (
    <div className={S.bodyStroke}>
      <div
        className={S.idInput}
        onMouseEnter={() => {
          setViewCopyID(true);
        }}
        onMouseLeave={() => {
          setViewCopyID(false);
        }}
      >
        <input
          className={S.info}
          value={valueID}
          onInput={(e) => {
            setValueID(e.target.value);
          }}
        />
        {viewCopyID && (
          <div
            onClick={() => {
              navigator.clipboard.writeText(valueID);
            }}
            className={S.viewCopyID}
          >
            <Copy width={30} height={30} />
          </div>
        )}
      </div>

      <div className={S.info}>
        {" "}
        <RadioCheck
          value={el.internet}
          name={"internet"}
          id={el.ID}
          setDataStroke={configData}
        />
      </div>
      <div className={S.info}>
        <RadioCheck
          value={el.tv}
          name={"tv"}
          id={el.ID}
          setDataStroke={configData}
        />
      </div>
      <div className={S.info}>
        {" "}
        <RadioCheck
          value={el.tel}
          name={"tel"}
          id={el.ID}
          setDataStroke={configData}
        />
      </div>

      <div
        className={S.comment}
        onMouseEnter={() => {
          setViewCommentIcon(true);
        }}
        onMouseLeave={() => {
          setViewCommentIcon(false);
        }}
      >
        <input
          onBlur={() => {
            setCommentValue(el.ID, commentInput);
          }}
          onInput={inputCommentHandler}
          value={commentInput}
          className={S.inputComment}
          type="text"
        />
        {viewCommentIcon && (
          <div
            className={S.set}
            onClick={() => {
              setViewComment(true);
            }}
          >
            <div className={S.sett}>
              <Pen />
            </div>
          </div>
        )}
        {viewComment && (
          <CommentWindow
            text={commentInput}
            setViewComment={setViewComment}
            commentInput={commentInput}
            inputCommentHandler={inputCommentHandler}
            setCommentValue={setCommentValue}
            id={el.ID}
          />
        )}
      </div>
    </div>
  );
};

export default Stroke;
