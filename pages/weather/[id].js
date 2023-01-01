import {useRouter} from "next/router";
import axios from "axios";

const apiEndpoint = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${process.env.API_KEY}`;

export default function WeatherCity({id, name, coord}) {
    const {isFallback, back} = useRouter();
    if(isFallback){
        return <p>Loading data ... </p>
    }

    const {lat, lon} = coord;

    return (
        <>
            <h1>City {name} ({id})</h1>
            <p>Lat: {lat}</p>
            <p>Lon: {lon}</p>
            <button onClick={back}>Back</button>
        </>
    )
}

export async function getStaticPaths() {
    const {data, status} = await axios.get(apiEndpoint);
    const {list} = data;
    const paths = list.map( ({id}) => ({params: {id: id.toString()}}) );

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const apiEndpointCity = `https://api.openweathermap.org/data/2.5/weather?id=${params.id}&appid=${process.env.API_KEY}`;
    const {data, status} = await axios.get(apiEndpointCity);

    // const {id, name, coord:{lat, lon}} = data;

    return {
        props: {
            ...data
        }
    }
}