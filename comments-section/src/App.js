import "./App.css";
import { useState } from "react";
import Comments from "./components/Comments";
import { useNode } from "./hooks/useNode";

const commentsData = {
  id: 1,
  // items: [
  //   {
  //     id: 1234,
  //     name: "hello",
  //     items: [
  //       {
  //         id: 1235,
  //         name: "hello world",
  //         items: [{ id: 1236, name: "hello world 123", items: [] }],
  //       },
  //     ],
  //   },
  //   {
  //     id: 1237,
  //     name: "react js",
  //     items: [
  //       {
  //         id: 1238,
  //         name: "javascript",
  //         items: [],
  //       },
  //     ],
  //   },
  // ],
  items: [],
};

const defaultComments = {
  id: 1,
  items: [],
};

function App() {
  const [comments, setComments] = useState(defaultComments);

  const { insertNode, deleteNode, editNode } = useNode();

  const handleInsertNode = (id, item) => {
    const final = insertNode(commentsData, id, item);
    console.log(final);
    setComments(final);
  };

  const handleEditNode = (id, value) => {
    const final = editNode(commentsData, id, value);
    setComments(final);
  };
  const handleDeleteNode = (id, item) => {
    const final = deleteNode(commentsData, id, item);
    setComments(...final);
  };
  return (
    <div style={{ margin: "10px" }}>
      <Comments
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        handleInsertNode={handleInsertNode}
        commentsData={comments}
      />
    </div>
  );
}

export default App;
