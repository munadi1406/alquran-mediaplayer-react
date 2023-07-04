import axios from "axios";


const endpoint = import.meta.env.VITE_SOME_ENDPOINT;

export const getSurah = async ()=>{
    const data = await axios.get(`${endpoint}/v2/surat`)
    return data
}


export const detailSurah = async (nomor)=>{
    const data = await axios.get(`${endpoint}/v2/surat/${nomor}`)
    return data
}