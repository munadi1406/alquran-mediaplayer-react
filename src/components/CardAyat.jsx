import PropTypes from 'prop-types'
import { useEffect,useState,useRef } from 'react';
import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const CardAyat = (props) => {
  const audioRef = useRef()
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play)
  }

  useEffect(() => {
    play ? audioRef.current.play() : audioRef.current.pause()
    const handleAudioEnded = () => {
      setPlay(false);
    };
    const currentAudioRef = audioRef.current; // Salin audioRef.current ke variabel

    currentAudioRef.addEventListener('ended', handleAudioEnded);
  
    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      currentAudioRef.removeEventListener('ended', handleAudioEnded);
    };
    
  }, [play])

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:0.3}}
    >
    <div className='p-2 rounded-lg my-2 bg-white/10 backdrop-blur-sm backdrop-filter '>
      <div className='m-3 flex justify-start items-center'>
        <div onClick={handlePlay} className='cursor-pointer  flex justify-end items-center'>{play ? <FaCirclePause size={30} /> : <FaCirclePlay size={30} />}</div>
      </div>
      <audio className='hidden' ref={audioRef}>
        <source src={props.audio['03']} />
      </audio>
      <div className='text-end px-2  py-2 flex flex-row-reverse justify-start items-center flex-wrap'>
        <div className='font-amiri text-3xl mx-1 leading-loose'>{props.teksArab}</div>
        <div className='border-2 rounded-full h-8 w-8 flex justify-center items-center text-sm '>{props.nomorAyat}</div>
      </div>
      <div className='italic'>{props.teksLatin}</div>
      <div className='italic '>{props.teksIndonesia}</div>
    </div>
    </motion.div>
  )
}

CardAyat.propTypes = {
  teksLatin: PropTypes.string.isRequired,
  nomorAyat: PropTypes.number.isRequired,
  teksArab: PropTypes.string.isRequired,
  teksIndonesia: PropTypes.string.isRequired,
  audio: PropTypes.object.isRequired
}

export default CardAyat