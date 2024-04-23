import "../App.css";
import { DATA } from "../data/FolderData";
import { Directory } from "./Directory";

export function Sidebar() {
  return (
    <div className="sidebar">
      <Directory Data={DATA} />
    </div>
  );
}
