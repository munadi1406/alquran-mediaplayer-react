import { getSurah } from "../api/data";
import { useEffect,useState, Suspense, lazy } from "react";
const Card = lazy(() => import("../components/Card"));

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const getSurahData = async () => {
        try {
            const { data } = await getSurah();
            console.log(data);
            setData(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSurahData();
    }, []);


    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filterData = data.filter((e) =>
        e.namaLatin.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input type="search" onChange={handleSearch} value={search} placeholder="Search..." className="border-none bg-white/10 p-2 w-full rounded-md outline-2"/>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                <Suspense fallback={<h1>Loading...</h1>}>
                    {filterData.map((e, i) => (
                        <Card {...e} key={i} />
                    ))}
                </Suspense>
            </div>
        </>
    );
};

export default Home;
