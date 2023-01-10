"use client";

import Link from "next/link";
import { currentPageAtom } from "../storage/atoms";
import { useAtom } from "jotai";

const pageSize = 20;

const getCountriesList = (slicedCountries) => {
  return slicedCountries.map((country) => (
    <li key={country.alpha2Code}>
      <Link href={`/countries/${country.alpha3Code}`}>{country.name}</Link>
    </li>
  ));
};

const getPagination = (itemsCount, currentPage, setCurrentPage) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <>
      <nav className="my-10" aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          {currentPage > 1 && (
            <li
              key={"previusPage"}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          )}
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage
                  ? "px-3 py-2 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  : "z-10 px-3 py-2 leading-tight text-gray-600 border border-blue-300 bg-gray-50 hover:bg-gray-100 hover:text-gray-700"
              }
            >
              <a
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </a>
            </li>
          ))}
          {currentPage < pagesCount && (
            <li
              key={"nextPage"}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

const sliceItems = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize); // 0, 9
};

const PaginationList = ({ items }) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const slicedCountries = sliceItems(items, currentPage, pageSize);
  const listElements = getCountriesList(slicedCountries);
  const pagination = getPagination(items.length, currentPage, setCurrentPage);

  return (
    <>
      <h1>Countries</h1>
      <div>{listElements}</div>
      <div>{pagination}</div>
    </>
  );
};

export default PaginationList;
