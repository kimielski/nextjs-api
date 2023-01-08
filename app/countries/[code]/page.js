import axios from "axios";
import Link from "next/link";

const apiEndpoint = `${process.env.API_COUNTRIES_BASE_URL}/alpha`;

export default async function Country({ params }) {
  const { code } = params;

  const getCountryBorders = (borders) => {
    /* Mapping the borders array and creating a link for each border. */

    if (borders) {
      return borders.map((border) => (
        <Link
          key={border}
          href={`/countries/${encodeURIComponent(border)}`}
          passHref
        >
          {border}&nbsp;
        </Link>
      ));
    }
    return "no borders";
  };
  try {
    const response = await axios.get(`${apiEndpoint}/${code}`);
    const countryData = response.data || false;

    return (
      <>
        <h1>Informations about {countryData.name}</h1>
        <p>
          Country topLevelDomain: {countryData.topLevelDomain} <br />
          Country code: {countryData.alpha2Code} <br />
          Country capital: {countryData.capital} <br />
          Country population: {countryData.population} <br />
          Country borders: {getCountryBorders(countryData.borders)}
        </p>
      </>
    );
  } catch (error) {
    console.error(error);
  }
}
