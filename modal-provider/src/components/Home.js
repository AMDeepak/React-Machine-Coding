import { useModal } from "../context/ModalContext";

function Home() {
  const { openModal } = useModal();

  return (
    <>
      <h1>This is Home</h1>
      <button onClick={() => openModal("uploadModal", { title: "title" })}>
        Upload Modal
      </button>
    </>
  );
}

export default Home;
