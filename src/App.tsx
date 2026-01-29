import { useState } from "react";
import WeddingPage from "./components/WeddingPage";
import GlowEnvelopeLanding from "./components/GlowEnvelopeLanding";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      <MusicPlayer src="/music.mp3" startPlaying={musicStarted} />
      {!isOpen ? (
        <GlowEnvelopeLanding
          onStart={() => setMusicStarted(true)}
          onOpen={() => {
            setIsOpen(true);
          }}
        />
      ) : (
        <WeddingPage showTransition={false} isOpen={true} />
      )}
    </>
  );
}

export default App;
