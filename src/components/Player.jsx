import ContextData from "./Context";
import { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { motion } from "framer-motion";

const Player = () => {
    const { isPlay, audio, nama } = useContext(ContextData);
    return isPlay &&
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-max fixed left-0 bottom-0 bg-slate-900/80 backdrop-blur-sm backdrop-filter ">
            <div className="">
                <AudioPlayer
                    autoPlay
                    src={audio}
                    onPlay={() => console.log("onPlay")}
                    className="bg-transparent text-white"
                    style={{ color: "white" }}
                    header={`${nama}`}
                />
            </div>
        </motion.div>
};

export default Player;
