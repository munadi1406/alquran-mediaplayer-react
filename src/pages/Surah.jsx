import { useParams } from "react-router-dom";
import { detailSurah } from "../api/data";
import { useEffect, useState } from "react";
import CardAyat from "../components/CardAyat";

const Surah = () => {
  const { id } = useParams();
  const [dataAyat, setDataAyat] = useState([]);
  const [detailSurahData, setDetailSurahData] = useState([])

  const getSurahData = async () => {
    try {
      const { data } = await detailSurah(id);
      console.log(data);
      setDataAyat(data.data.ayat);
      setDetailSurahData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSurahData();
  }, []);

  return (
    <div>
    <div className="bg-slate-600 rounded-lg p-2">
      <div className="flex space-x-1 justify-start items-center">
        <div className="border-2 rounded-full h-10 w-10 flex justify-center items-center">{detailSurahData.nomor}</div>
        <div className="font-amiri text-5xl">{detailSurahData.nama}</div>
        <div className="italic text-sm ">{detailSurahData.namaLatin} / {detailSurahData.arti}</div>
      </div>
      <div>{detailSurahData.deskripsi}</div>
    </div>
      {dataAyat.map((e, i) => (
        <CardAyat {...e} key={i} />
      ))}
    </div>
  );
};

export default Surah;
