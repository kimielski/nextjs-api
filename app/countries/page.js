import Link from "next/link";
import axios from "axios";

const apiEndpoint = `${process.env.API_COUNTRIES_BASE_URL}/all`;

export default async function Countries() {
  const response = await axios.get(apiEndpoint);
  const countries = response.data || false;
  if (countries) {
    const listElements = countries.map((country) => (
      <li key={country.alpha2Code}>
        <Link href={`/countries/${country.alpha3Code}`}>{country.name}</Link>
      </li>
    ));
    return (
      <>
        <h1>Countries</h1>
        <ul>{listElements}</ul>
      </>
    );
  }
}
