import { useState } from "react"
import { getSurah } from "../api/data"
import { useEffect ,Suspense,lazy} from "react"
const  Card = lazy(()=>import ( "../components/Card"))


const Home = () => {
    const [data,setData] = useState([])

    const getSurahData = async ()=>{
        try {
            const {data} = await getSurah();
            console.log(data)
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getSurahData()
    },[])

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
    <Suspense fallback={<h1>Loading...</h1>}>
        {data.map((e,i)=>(
            <Card {...e} key={i}/>
        ))}
    </Suspense>
    </div>
  )
}

export default Home