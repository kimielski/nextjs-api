import axios from "axios";
import Link from "next/link";

const apiEndpoint = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${process.env.API_KEY}`;

export default function Weather({cities, isRequestFailed}) {
    if (isRequestFailed) {
        return <p>Opps ...</p>
    }

    const weatherElements = cities.map( city => <WeatherElement key={city.id} {...city} />)
    return (
        <>
            <h1>Weather</h1>
            <ul>
                {weatherElements}
            </ul>
        </>
    )
}

function WeatherElement({id, name}) {
    return (
        <li>
            <Link href={`/weather/${id}`}>
                {name}
            </Link>
        </li>
    )
}
export async function getStaticProps(){

    const {data, status} = await axios.get(apiEndpoint);

    if (status !== 200){
        return {
            props: {
                isRequestFailed: true,
            }
        }
    }

    const {list} = data;
    const cities = list.map( ({id, name, coord: {Lat, Lon}}) => ({id, name, Lat, Lon}) );

    return {
        props: {
            cities,
            isRequestFailed: false
        }
    }
}