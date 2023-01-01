import axios from 'axios';
import Link from 'next/link'
import { useRouter } from "next/router";

const apiEndpoint = `${process.env.API_COUNTRIES_BASE_URL}/alpha`;

export default function Country({ country }){

    const { back } = useRouter();
    const { borders } = country;
    const countryBorders = borders.map( border => (
        <Link key={border} href={`/countries/${border}`} passHref>
            {border}&nbsp;
        </Link>
    ) );

    return (
        <>
            <h1>{country.name}</h1>
            <p>
                Country topLevelDomain: {country.topLevelDomain} <br/>
                Country code: {country.alpha2Code} <br/>
                Country capital: {country.capital} <br/>
                Country population: {country.population} <br/>
                Country borders: {countryBorders}
            </p>
            <button onClick={() => back()}>Back</button>
        </>
    )
}

export const getServerSideProps = async (context) => {

    const {code} = context.params;
    try {
        const response = await axios.get(`${apiEndpoint}/${code}`);
        console.log(response);
        return {
            props: {
                country: response.data
            }
        }
    } catch (error) {
        console.error(error);
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

}