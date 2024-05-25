import { useState, useEffect, useRef } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Comment({
  commentsData,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
}) {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [expand, setexpand] = useState(false);
  const [showinput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);
  const onAddComment = () => {
    setexpand(true);
    handleInsertNode(commentsData.id, input);
    setInput("");
    setShowInput(false);
  };

  const handleNewComment = () => {
    setexpand(!expand);
    setShowInput(true);
  };

  return (
    <div>
      <div
        className={
          commentsData.id === 1 ? "inputContainer" : "commentsContainer"
        }
      >
        {commentsData.id === 1 ? (
          <>
            <input
              autoFocus
              placeholder="Type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={onAddComment}>COMMENT</button>
          </>
        ) : (
          <>
            <span
              contentEditable={editMode}
              supressContentEditableWarning={editMode}
              ref={inputRef}
            >
              {commentsData.name}
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{ fontSize: "10px", cursor: "pointer" }}
                onClick={handleNewComment}
              >
                {expand ? (
                  <FaAngleUp width="10px" height="10px" />
                ) : (
                  <FaAngleDown width="10px" height="10px" />
                )}
                REPLY
              </div>
              <div
                style={{ fontSize: "10px", cursor: "pointer" }}
                onClick={() => {
                  setEditMode(true);
                }}
              >
                EDIT
              </div>
              {/* 
              <button onClick={onAddComment}>DELETE</button> */}
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}>
        {showinput && (
          <div>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div style={{ display: "flex", gap: "4px" }}>
              <div
                style={{ fontSize: "10px", cursor: "pointer" }}
                onClick={onAddComment}
              >
                REPLY
              </div>
              <div
                style={{ fontSize: "10px", cursor: "pointer" }}
                onClick={() => {
                  setShowInput(false);
                }}
              >
                CANCEL
              </div>
            </div>
          </div>
        )}
        {commentsData?.items?.map((c) => {
          return (
            <Comment
              handleDeleteNode={handleDeleteNode}
              handleEditNode={handleEditNode}
              key={c.id}
              commentsData={c}
              handleInsertNode={handleInsertNode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
