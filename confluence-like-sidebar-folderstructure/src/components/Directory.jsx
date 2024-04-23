import { Nodes } from "./Nodes";

export function Directory({ Data }) {
  return <Nodes nodes={Data} />;
}

/* The Structure is As follows :
- SideBar
    -Directory
          -<ul> Nodes </ul>
                <li> Icon , Label <li/> (Node)
                <li> Icon , Label <li/>
                <li> Icon , Label <li/>
    -Other Items
*/
