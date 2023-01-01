import Link from 'next/link';
import axios from 'axios';

const apiEndpoint = `${process.env.API_COUNTRIES_BASE_URL}/random`;

export default function Countries({ countries }) {

    const listElements = countries.map( country => (
        <li key={country.alpha2Code}>
            <Link href={`/countries/${country.alpha3Code}`}>
                <a>{country.name}</a>
            </Link>
        </li>
    ));

    return (
        <>
            <h1>Countries</h1>
            <ul>
                {listElements}
            </ul>
        </>
    )
}

export const getServerSideProps = async () => {

    try {
        const response = await axios.get(apiEndpoint);
        return {
            props: {
                countries: response.data
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