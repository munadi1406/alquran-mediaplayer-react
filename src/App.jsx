import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Surah from "./pages/Surah";
import { useState } from "react";
import ContextData from "./components/Context";
import Player from "./components/Player";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [audio,setAudio] = useState('');
  const [nama,setNama] = useState('')

  const handlePlay = (e,nama) => {
    setAudio(e);
    setNama(nama);
    setIsPlay(true);
  };
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="pl-1 pr-1 lg:pl-10 lg:pr-10  pb-48">
          <ContextData.Provider value={{ isPlay, handlePlay,audio,nama }}>
            <HashRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Surah/:id" element={<Surah />} />
              </Routes>
            </HashRouter>
            <Player />
          </ContextData.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
