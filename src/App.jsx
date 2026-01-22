import { useState, useRef } from "react";
import Cover from "./pages/Cover";
import WeddingPage from "./pages/WeddingPage";
import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setOpened(true);
    audioRef.current?.play();
  };

  const backToCover = () => {
    setOpened(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <div className={`app ${opened ? "opened" : ""}`}>
        <Cover onOpen={openInvitation} />
        <WeddingPage onBack={backToCover} />
      </div>
    </>
  );
}
