import ReactDOM from "react-dom";
import * as React from "react";
import S from "./CommentWindow.module.scss";

export const CommentWindow = ({
  text,
  setViewComment,
  inputCommentHandler,
  setCommentValue,
  id,
}) => {
  const node = document.querySelector("#modal_root");
  if (!node) return null;
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        setCommentValue(id, text);
        setViewComment(false);
      }}
      className={S.body}
    >
      <div
        onClick={(e) => {
          {
            e.stopPropagation();
          }
        }}
        className={S.text}
      >
        <textarea
          className={S.textArea}
          onInput={inputCommentHandler}
          type="text"
          value={text}
        />
      </div>
    </div>,
    node
  );
};
