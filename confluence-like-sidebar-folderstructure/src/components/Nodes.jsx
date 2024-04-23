import "../App.css";
import { FaAngleDown, FaCircle, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const Icon = ({ isOpen, isParentNode, onClick }) => {
  if (isParentNode) {
    return (
      <button
        onClick={onClick}
        style={{
          color: "white",
        }}
      >
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </button>
    );
  }
  return <FaCircle style={{ color: "white", height: "6px" }} />;
};

const Node = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParentNode = Boolean(children && children.length);

  return (
    <li>
      <div className="node">
        <div className="label">
          <Icon
            isOpen={isOpen}
            isParentNode={isParentNode}
            onClick={() => setIsOpen(!isOpen)}
          />
          <a href={link}>{label}</a>
        </div>
      </div>
      {isParentNode && isOpen && <Nodes nodes={children} />}
    </li>
  );
};

export function Nodes({ nodes }) {
  return (
    <ul className="nodes">
      {nodes.map((node) => (
        <Node key={node.id} {...node} />
      ))}
    </ul>
  );
}
