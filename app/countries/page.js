import axios from "axios";
import Pagination from "../../components/Pagination";

const apiEndpoint = `${process.env.API_COUNTRIES_BASE_URL}/all`;

export async function getCountries() {
  const response = await axios.get(apiEndpoint);
  return response.data || false;
}

export default async function Countries() {
  const countries = await getCountries();

  if (countries) {
    return (
      <>
        <Pagination items={countries} />
      </>
    );
  }
}
