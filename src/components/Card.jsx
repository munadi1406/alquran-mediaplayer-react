import PropTypes from "prop-types";
import { useContext } from "react";
import ContextData from "./Context";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = (props) => {
  const { handlePlay } = useContext(ContextData);
  return (
    <motion.div initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1 , scale:1}}
      viewport={{once:true}}
      transition={{ type: 'spring', stiffness: 50 }}>
      <div className="p-2 m-1  min-h-46 bg-white/10 backdrop-blur-sm backdrop-filter rounded-md relative">
        <div className="grid grid-cols-2 ">
          <Link to={`/Surah/${props.nomor}`}>
            <div>
              <div className="font-amiri text-3xl">{props.nama}</div>
              <div className="italic text-sm rounded-tl-md ">
                {props.namaLatin}
              </div>
            </div>
          </Link>
          <div>
            <div
              className="cursor-pointer  flex justify-end items-center"
            >
              <FaCirclePlay size={50} onClick={() => handlePlay(props.audioFull["03"], props.namaLatin)}/>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <div className="text-xs italic ">{props.arti}</div>
          <div className="bg-blue-600 rounded-full w-max h-max text-xs px-2">
            {props.tempatTurun}
          </div>
          <div className="text-xs">{props.jumlahAyat}</div>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  nomor: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  namaLatin: PropTypes.string.isRequired,
  arti: PropTypes.string.isRequired,
  tempatTurun: PropTypes.string.isRequired,
  jumlahAyat: PropTypes.number.isRequired,
  audioFull: PropTypes.object.isRequired,
};

export default Card;
