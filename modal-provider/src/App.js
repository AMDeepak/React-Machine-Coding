import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Home from "./components/Home";
import { ModalManager } from "./components/modals/ModalManager";

function App() {
  return (
    <ModalProvider>
      <ModalManager />
      <Home />
      {/* //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </BrowserRouter> */}
    </ModalProvider>
  );
}

export default App;
